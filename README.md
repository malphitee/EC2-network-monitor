# EC2 网络监控 Worker

这是一个 Cloudflare Worker，用于监控 AWS EC2 实例的网络流量使用情况。

## 功能特点

- 使用 AWS SDK 获取 EC2 实例信息
- 通过 CloudWatch 获取网络流量指标
- 支持跨域请求
- 返回 JSON 格式的监控数据

## 部署步骤

1. 安装依赖：
```bash
npm install
```

2. 配置环境变量：
   - 在 Cloudflare Workers 控制台中设置以下环境变量：
     - `AWS_ACCESS_KEY_ID`
     - `AWS_SECRET_ACCESS_KEY`
   - 在 `wrangler.toml` 中设置：
     - `AWS_REGION`
     - `EC2_INSTANCE_ID`

3. 本地开发：
```bash
npm run dev
```

4. 部署到 Cloudflare：
```bash
npm run deploy
```

## 安全注意事项

- 请确保 AWS 凭证具有最小必要权限
- 建议使用 IAM 角色而不是访问密钥
- 定期轮换访问密钥
- 在生产环境中启用 CORS 限制

## API 响应格式

```json
{
  "instanceId": "i-xxxxxxxxxxxxxxxxx",
  "networkMetrics": [
    {
      "Timestamp": "2024-01-01T00:00:00Z",
      "Average": 123.45,
      "Unit": "Bytes"
    }
  ],
  "timestamp": "2024-01-01T00:00:00Z"
}
``` 