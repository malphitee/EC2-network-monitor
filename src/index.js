import { EC2Client, DescribeInstancesCommand } from '@aws-sdk/client-ec2';
import { CloudWatchClient, GetMetricStatisticsCommand } from '@aws-sdk/client-cloudwatch';



function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let value = bytes;
  let unitIndex = 0;
  
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex++;
  }
  
  return `${value.toFixed(2)} ${units[unitIndex]}`;
}

function buildTableData(data) {
  // 按日期分组
  const dailyStats = {};
  let totalIn = 0, totalOut = 0;
  data.forEach(metric => {
    const date = new Date(metric.Timestamp).toISOString().split('T')[0];
    if (!dailyStats[date]) dailyStats[date] = { in: 0, out: 0, count: 0 };
    dailyStats[date].in += metric.Average;
    dailyStats[date].out += metric.OutAverage || 0;
    dailyStats[date].count++;
  });
  const rows = [];
  Object.entries(dailyStats).sort().forEach(([date, stats]) => {
    const avgIn = stats.in / stats.count;
    const avgOut = stats.out / stats.count;
    totalIn += avgIn;
    totalOut += avgOut;
    rows.push([date, formatBytes(avgIn), formatBytes(avgOut)]);
  });
  rows.push(['总计', formatBytes(totalIn), formatBytes(totalOut)]);
  return rows;
}

function buildPlainTable(rows) {
  // 计算每列最大宽度
  const colWidths = [0, 0, 0];
  const header = ['日期', '输入流量', '输出流量'];
  [header, ...rows].forEach(row => {
    row.forEach((cell, i) => {
      colWidths[i] = Math.max(colWidths[i], cell.length);
    });
  });
  // 生成表格文本
  const lines = [];
  const headerLine = header.map((h, i) => h.padEnd(colWidths[i], ' ')).join('  ');
  lines.push(headerLine);
  lines.push('-'.repeat(headerLine.length));
  rows.slice(0, -1).forEach(row => {
    lines.push(row.map((cell, i) => cell.padEnd(colWidths[i], ' ')).join('  '));
  });
  // 总计行
  lines.push('-'.repeat(headerLine.length));
  const totalRow = rows[rows.length - 1].map((cell, i) => cell.padEnd(colWidths[i], ' ')).join('  ');
  lines.push(totalRow);
  return lines.join('\n');
}

function buildMarkdownTable(rows) {
  let md = '| 日期 | 输入流量 | 输出流量 |\n|------|----------|----------|\n';
  rows.slice(0, -1).forEach(row => {
    md += `| ${row[0]} | ${row[1]} | ${row[2]} |\n`;
  });
  const total = rows[rows.length - 1];
  md += `| **${total[0]}** | **${total[1]}** | **${total[2]}** |\n`;
  return md;
}

async function sendGotifyMessage(url, token, message) {
  const gotifyUrl = `${url}?token=${token}`;
  const body = JSON.stringify({
    title: "EC2流量日报",
    message: message,
    priority: 5
  });
  return await fetch(gotifyUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body
  });
}

async function sendTelegramMessage(botToken, chatId, message) {

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const body = JSON.stringify({
    chat_id: chatId,
    text: '```\n' + message + '\n```',
    parse_mode: 'Markdown'
  });
  console.log('Telegram推送请求URL:', url);
  console.log('Telegram推送请求Body:', body);
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body
    });
    console.log('Telegram推送响应状态:', resp.status);
    const respText = await resp.text();
    console.log('Telegram推送响应内容:', respText);
    return resp;
  } catch (err) {
    console.log('Telegram推送异常:', err);
    throw err;
  }
}

export default {
  async fetch(request, env, ctx) {
  Sentry.init({ dsn: "https://4aa85c04c06643ffb0f0ea089376234c@gp.liuq.ip-ddns.com/5" });

    // 只在主页面请求时推送，忽略/favicon.ico等
    const urlObj = new URL(request.url);
    const isMainPage = urlObj.pathname === '/';

    // 配置 AWS 客户端
    const ec2Client = new EC2Client({
      region: env.AWS_REGION,
      credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY
      }
    });

    const cloudWatchClient = new CloudWatchClient({
      region: env.AWS_REGION,
      credentials: {
        accessKeyId: env.AWS_ACCESS_KEY_ID,
        secretAccessKey: env.AWS_SECRET_ACCESS_KEY
      }
    });

    try {
      // 获取 EC2 实例信息
      const ec2Command = new DescribeInstancesCommand({
        InstanceIds: [env.EC2_INSTANCE_ID]
      });
      await ec2Client.send(ec2Command);

      // 获取本月的开始和结束时间
      const now = new Date();
      const nowDateStr = now.toISOString().split('T')[0];
      const startTime = new Date(now.getFullYear(), now.getMonth(), 1);
      const endTime = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);

      // 获取入站流量
      const networkInCommand = new GetMetricStatisticsCommand({
        Namespace: 'AWS/EC2',
        MetricName: 'NetworkIn',
        Dimensions: [
          {
            Name: 'InstanceId',
            Value: env.EC2_INSTANCE_ID
          }
        ],
        StartTime: startTime,
        EndTime: endTime,
        Period: 86400, // 按天统计
        Statistics: ['Average']
      });

      // 获取出站流量
      const networkOutCommand = new GetMetricStatisticsCommand({
        Namespace: 'AWS/EC2',
        MetricName: 'NetworkOut',
        Dimensions: [
          {
            Name: 'InstanceId',
            Value: env.EC2_INSTANCE_ID
          }
        ],
        StartTime: startTime,
        EndTime: endTime,
        Period: 86400, // 按天统计
        Statistics: ['Average']
      });

      const [networkInResponse, networkOutResponse] = await Promise.all([
        cloudWatchClient.send(networkInCommand),
        cloudWatchClient.send(networkOutCommand)
      ]);

      // 合并入站和出站数据
      const combinedMetrics = networkInResponse.Datapoints.map((inMetric, index) => ({
        ...inMetric,
        OutAverage: networkOutResponse.Datapoints[index]?.Average || 0
      }));

      // 构建表格数据
      const rows = buildTableData(combinedMetrics);

      const plainTable = buildPlainTable(rows);
      const title = `${nowDateStr} EC2流量使用统计`;
      const pushContent = `${title}\n\n${plainTable}`;

      // 推送渠道控制
      const channel = env.PUSH_CHANNEL || '1';
      if (isMainPage) {
        if (channel === '1' || channel === '0') {
          if (env.GOTIFY_URL && env.GOTIFY_TOKEN) {
            console.log('准备推送Gotify...');
            try {
              const gotifyResp = await sendGotifyMessage(env.GOTIFY_URL, env.GOTIFY_TOKEN, pushContent);
              console.log('Gotify推送响应状态:', gotifyResp.status);
              const gotifyText = await gotifyResp.text();
              console.log('Gotify推送响应内容:', gotifyText);
            } catch (pushErr) {
              console.log('Gotify推送异常:', pushErr);
            }
          } else {
            console.log('未配置GOTIFY_URL或GOTIFY_TOKEN，不推送Gotify');
          }
        }
        if (channel === '2' || channel === '0') {
          if (env.TG_BOT_TOKEN && env.TG_CHAT_ID) {
            console.log('准备推送Telegram...');
            try {
              await sendTelegramMessage(env.TG_BOT_TOKEN, env.TG_CHAT_ID, pushContent);
            } catch (tgErr) {
              console.log('Telegram推送异常:', tgErr);
            }
          } else {
            console.log('未配置TG_BOT_TOKEN或TG_CHAT_ID，不推送Telegram');
          }
        }
      } else {
        console.log('非主页面请求，不推送消息，path:', urlObj.pathname);
      }

      // 页面返回Markdown表格
      const markdownTable = buildMarkdownTable(rows);
      return new Response(markdownTable, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        }
      });
    } catch (error) {
      console.log('主流程异常:', error);
      return new Response(`错误: ${error.message}`, {
        status: 500,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
  }
}; 