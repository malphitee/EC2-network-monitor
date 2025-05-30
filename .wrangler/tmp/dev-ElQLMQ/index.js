var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .wrangler/tmp/bundle-Ll1JrC/strip-cf-connecting-ip-header.js
function stripCfConnectingIPHeader(input, init2) {
  const request = new Request(input, init2);
  request.headers.delete("CF-Connecting-IP");
  return request;
}
var init_strip_cf_connecting_ip_header = __esm({
  ".wrangler/tmp/bundle-Ll1JrC/strip-cf-connecting-ip-header.js"() {
    __name(stripCfConnectingIPHeader, "stripCfConnectingIPHeader");
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        return Reflect.apply(target, thisArg, [
          stripCfConnectingIPHeader.apply(null, argArray)
        ]);
      }
    });
  }
});

// node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e3) => e3.name !== markName) : this._entries.filter((e3) => e3.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e3) => e3.name !== measureName) : this._entries.filter((e3) => e3.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e3) => e3.entryType !== "resource" || e3.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e3) => e3.name === name && (!type || e3.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e3) => e3.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x3, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env2) {
        return 1;
      }
      hasColors(count3, env2) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      ref() {
      }
      unref() {
      }
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      mainModule = void 0;
      domain = void 0;
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, exit, platform, nextTick, unenvProcess, abort, addListener, allowedNodeEnvironmentFlags, hasUncaughtExceptionCaptureCallback, setUncaughtExceptionCaptureCallback, loadEnvFile, sourceMapsEnabled, arch, argv, argv0, chdir, config, connected, constrainedMemory, availableMemory, cpuUsage, cwd, debugPort, dlopen, disconnect, emit, emitWarning, env, eventNames, execArgv, execPath, finalization, features, getActiveResourcesInfo, getMaxListeners, hrtime3, kill, listeners, listenerCount, memoryUsage, on, off, once, pid, ppid, prependListener, prependOnceListener, rawListeners, release, removeAllListeners, removeListener, report, resourceUsage, setMaxListeners, setSourceMapsEnabled, stderr, stdin, stdout, title, throwDeprecation, traceDeprecation, umask, uptime, version, versions, domain, initgroups, moduleLoadList, reallyExit, openStdin, assert2, binding, send, exitCode, channel, getegid, geteuid, getgid, getgroups, getuid, setegid, seteuid, setgid, setgroups, setuid, permission, mainModule, _events, _eventsCount, _exiting, _maxListeners, _debugEnd, _debugProcess, _fatalException, _getActiveHandles, _getActiveRequests, _kill, _preload_modules, _rawDebug, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, _disconnect, _handleQueue, _pendingMessage, _channel, _send, _linkedBinding, _process, process_default;
var init_process2 = __esm({
  "node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    ({ exit, platform, nextTick } = getBuiltinModule(
      "node:process"
    ));
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      nextTick
    });
    ({
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      finalization,
      features,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      on,
      off,
      once,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/fast-xml-parser/src/util.js
var require_util = __commonJS({
  "node_modules/fast-xml-parser/src/util.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
    var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
    var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
    var regexName = new RegExp("^" + nameRegexp + "$");
    var getAllMatches = /* @__PURE__ */ __name(function(string, regex) {
      const matches = [];
      let match = regex.exec(string);
      while (match) {
        const allmatches = [];
        allmatches.startIndex = regex.lastIndex - match[0].length;
        const len = match.length;
        for (let index = 0; index < len; index++) {
          allmatches.push(match[index]);
        }
        matches.push(allmatches);
        match = regex.exec(string);
      }
      return matches;
    }, "getAllMatches");
    var isName = /* @__PURE__ */ __name(function(string) {
      const match = regexName.exec(string);
      return !(match === null || typeof match === "undefined");
    }, "isName");
    exports.isExist = function(v3) {
      return typeof v3 !== "undefined";
    };
    exports.isEmptyObject = function(obj) {
      return Object.keys(obj).length === 0;
    };
    exports.merge = function(target, a3, arrayMode) {
      if (a3) {
        const keys = Object.keys(a3);
        const len = keys.length;
        for (let i3 = 0; i3 < len; i3++) {
          if (arrayMode === "strict") {
            target[keys[i3]] = [a3[keys[i3]]];
          } else {
            target[keys[i3]] = a3[keys[i3]];
          }
        }
      }
    };
    exports.getValue = function(v3) {
      if (exports.isExist(v3)) {
        return v3;
      } else {
        return "";
      }
    };
    exports.isName = isName;
    exports.getAllMatches = getAllMatches;
    exports.nameRegexp = nameRegexp;
  }
});

// node_modules/fast-xml-parser/src/validator.js
var require_validator = __commonJS({
  "node_modules/fast-xml-parser/src/validator.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var util = require_util();
    var defaultOptions = {
      allowBooleanAttributes: false,
      //A tag can have attributes without any value
      unpairedTags: []
    };
    exports.validate = function(xmlData, options) {
      options = Object.assign({}, defaultOptions, options);
      const tags = [];
      let tagFound = false;
      let reachedRoot = false;
      if (xmlData[0] === "\uFEFF") {
        xmlData = xmlData.substr(1);
      }
      for (let i3 = 0; i3 < xmlData.length; i3++) {
        if (xmlData[i3] === "<" && xmlData[i3 + 1] === "?") {
          i3 += 2;
          i3 = readPI(xmlData, i3);
          if (i3.err) return i3;
        } else if (xmlData[i3] === "<") {
          let tagStartPos = i3;
          i3++;
          if (xmlData[i3] === "!") {
            i3 = readCommentAndCDATA(xmlData, i3);
            continue;
          } else {
            let closingTag = false;
            if (xmlData[i3] === "/") {
              closingTag = true;
              i3++;
            }
            let tagName = "";
            for (; i3 < xmlData.length && xmlData[i3] !== ">" && xmlData[i3] !== " " && xmlData[i3] !== "	" && xmlData[i3] !== "\n" && xmlData[i3] !== "\r"; i3++) {
              tagName += xmlData[i3];
            }
            tagName = tagName.trim();
            if (tagName[tagName.length - 1] === "/") {
              tagName = tagName.substring(0, tagName.length - 1);
              i3--;
            }
            if (!validateTagName(tagName)) {
              let msg;
              if (tagName.trim().length === 0) {
                msg = "Invalid space after '<'.";
              } else {
                msg = "Tag '" + tagName + "' is an invalid name.";
              }
              return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i3));
            }
            const result = readAttributeStr(xmlData, i3);
            if (result === false) {
              return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i3));
            }
            let attrStr = result.value;
            i3 = result.index;
            if (attrStr[attrStr.length - 1] === "/") {
              const attrStrStart = i3 - attrStr.length;
              attrStr = attrStr.substring(0, attrStr.length - 1);
              const isValid = validateAttributeString(attrStr, options);
              if (isValid === true) {
                tagFound = true;
              } else {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
              }
            } else if (closingTag) {
              if (!result.tagClosed) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i3));
              } else if (attrStr.trim().length > 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
              } else if (tags.length === 0) {
                return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
              } else {
                const otg = tags.pop();
                if (tagName !== otg.tagName) {
                  let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                  return getErrorObject(
                    "InvalidTag",
                    "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.",
                    getLineNumberForPosition(xmlData, tagStartPos)
                  );
                }
                if (tags.length == 0) {
                  reachedRoot = true;
                }
              }
            } else {
              const isValid = validateAttributeString(attrStr, options);
              if (isValid !== true) {
                return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i3 - attrStr.length + isValid.err.line));
              }
              if (reachedRoot === true) {
                return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i3));
              } else if (options.unpairedTags.indexOf(tagName) !== -1) {
              } else {
                tags.push({ tagName, tagStartPos });
              }
              tagFound = true;
            }
            for (i3++; i3 < xmlData.length; i3++) {
              if (xmlData[i3] === "<") {
                if (xmlData[i3 + 1] === "!") {
                  i3++;
                  i3 = readCommentAndCDATA(xmlData, i3);
                  continue;
                } else if (xmlData[i3 + 1] === "?") {
                  i3 = readPI(xmlData, ++i3);
                  if (i3.err) return i3;
                } else {
                  break;
                }
              } else if (xmlData[i3] === "&") {
                const afterAmp = validateAmpersand(xmlData, i3);
                if (afterAmp == -1)
                  return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i3));
                i3 = afterAmp;
              } else {
                if (reachedRoot === true && !isWhiteSpace(xmlData[i3])) {
                  return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i3));
                }
              }
            }
            if (xmlData[i3] === "<") {
              i3--;
            }
          }
        } else {
          if (isWhiteSpace(xmlData[i3])) {
            continue;
          }
          return getErrorObject("InvalidChar", "char '" + xmlData[i3] + "' is not expected.", getLineNumberForPosition(xmlData, i3));
        }
      }
      if (!tagFound) {
        return getErrorObject("InvalidXml", "Start tag expected.", 1);
      } else if (tags.length == 1) {
        return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
      } else if (tags.length > 0) {
        return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t3) => t3.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
      }
      return true;
    };
    function isWhiteSpace(char) {
      return char === " " || char === "	" || char === "\n" || char === "\r";
    }
    __name(isWhiteSpace, "isWhiteSpace");
    function readPI(xmlData, i3) {
      const start = i3;
      for (; i3 < xmlData.length; i3++) {
        if (xmlData[i3] == "?" || xmlData[i3] == " ") {
          const tagname = xmlData.substr(start, i3 - start);
          if (i3 > 5 && tagname === "xml") {
            return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i3));
          } else if (xmlData[i3] == "?" && xmlData[i3 + 1] == ">") {
            i3++;
            break;
          } else {
            continue;
          }
        }
      }
      return i3;
    }
    __name(readPI, "readPI");
    function readCommentAndCDATA(xmlData, i3) {
      if (xmlData.length > i3 + 5 && xmlData[i3 + 1] === "-" && xmlData[i3 + 2] === "-") {
        for (i3 += 3; i3 < xmlData.length; i3++) {
          if (xmlData[i3] === "-" && xmlData[i3 + 1] === "-" && xmlData[i3 + 2] === ">") {
            i3 += 2;
            break;
          }
        }
      } else if (xmlData.length > i3 + 8 && xmlData[i3 + 1] === "D" && xmlData[i3 + 2] === "O" && xmlData[i3 + 3] === "C" && xmlData[i3 + 4] === "T" && xmlData[i3 + 5] === "Y" && xmlData[i3 + 6] === "P" && xmlData[i3 + 7] === "E") {
        let angleBracketsCount = 1;
        for (i3 += 8; i3 < xmlData.length; i3++) {
          if (xmlData[i3] === "<") {
            angleBracketsCount++;
          } else if (xmlData[i3] === ">") {
            angleBracketsCount--;
            if (angleBracketsCount === 0) {
              break;
            }
          }
        }
      } else if (xmlData.length > i3 + 9 && xmlData[i3 + 1] === "[" && xmlData[i3 + 2] === "C" && xmlData[i3 + 3] === "D" && xmlData[i3 + 4] === "A" && xmlData[i3 + 5] === "T" && xmlData[i3 + 6] === "A" && xmlData[i3 + 7] === "[") {
        for (i3 += 8; i3 < xmlData.length; i3++) {
          if (xmlData[i3] === "]" && xmlData[i3 + 1] === "]" && xmlData[i3 + 2] === ">") {
            i3 += 2;
            break;
          }
        }
      }
      return i3;
    }
    __name(readCommentAndCDATA, "readCommentAndCDATA");
    var doubleQuote = '"';
    var singleQuote = "'";
    function readAttributeStr(xmlData, i3) {
      let attrStr = "";
      let startChar = "";
      let tagClosed = false;
      for (; i3 < xmlData.length; i3++) {
        if (xmlData[i3] === doubleQuote || xmlData[i3] === singleQuote) {
          if (startChar === "") {
            startChar = xmlData[i3];
          } else if (startChar !== xmlData[i3]) {
          } else {
            startChar = "";
          }
        } else if (xmlData[i3] === ">") {
          if (startChar === "") {
            tagClosed = true;
            break;
          }
        }
        attrStr += xmlData[i3];
      }
      if (startChar !== "") {
        return false;
      }
      return {
        value: attrStr,
        index: i3,
        tagClosed
      };
    }
    __name(readAttributeStr, "readAttributeStr");
    var validAttrStrRegxp = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
    function validateAttributeString(attrStr, options) {
      const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
      const attrNames = {};
      for (let i3 = 0; i3 < matches.length; i3++) {
        if (matches[i3][1].length === 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i3][2] + "' has no space in starting.", getPositionFromMatch(matches[i3]));
        } else if (matches[i3][3] !== void 0 && matches[i3][4] === void 0) {
          return getErrorObject("InvalidAttr", "Attribute '" + matches[i3][2] + "' is without value.", getPositionFromMatch(matches[i3]));
        } else if (matches[i3][3] === void 0 && !options.allowBooleanAttributes) {
          return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i3][2] + "' is not allowed.", getPositionFromMatch(matches[i3]));
        }
        const attrName = matches[i3][2];
        if (!validateAttrName(attrName)) {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i3]));
        }
        if (!attrNames.hasOwnProperty(attrName)) {
          attrNames[attrName] = 1;
        } else {
          return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i3]));
        }
      }
      return true;
    }
    __name(validateAttributeString, "validateAttributeString");
    function validateNumberAmpersand(xmlData, i3) {
      let re = /\d/;
      if (xmlData[i3] === "x") {
        i3++;
        re = /[\da-fA-F]/;
      }
      for (; i3 < xmlData.length; i3++) {
        if (xmlData[i3] === ";")
          return i3;
        if (!xmlData[i3].match(re))
          break;
      }
      return -1;
    }
    __name(validateNumberAmpersand, "validateNumberAmpersand");
    function validateAmpersand(xmlData, i3) {
      i3++;
      if (xmlData[i3] === ";")
        return -1;
      if (xmlData[i3] === "#") {
        i3++;
        return validateNumberAmpersand(xmlData, i3);
      }
      let count3 = 0;
      for (; i3 < xmlData.length; i3++, count3++) {
        if (xmlData[i3].match(/\w/) && count3 < 20)
          continue;
        if (xmlData[i3] === ";")
          break;
        return -1;
      }
      return i3;
    }
    __name(validateAmpersand, "validateAmpersand");
    function getErrorObject(code, message, lineNumber) {
      return {
        err: {
          code,
          msg: message,
          line: lineNumber.line || lineNumber,
          col: lineNumber.col
        }
      };
    }
    __name(getErrorObject, "getErrorObject");
    function validateAttrName(attrName) {
      return util.isName(attrName);
    }
    __name(validateAttrName, "validateAttrName");
    function validateTagName(tagname) {
      return util.isName(tagname);
    }
    __name(validateTagName, "validateTagName");
    function getLineNumberForPosition(xmlData, index) {
      const lines = xmlData.substring(0, index).split(/\r?\n/);
      return {
        line: lines.length,
        // column number is last line's length + 1, because column numbering starts at 1:
        col: lines[lines.length - 1].length + 1
      };
    }
    __name(getLineNumberForPosition, "getLineNumberForPosition");
    function getPositionFromMatch(match) {
      return match.startIndex + match[1].length;
    }
    __name(getPositionFromMatch, "getPositionFromMatch");
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var require_OptionsBuilder = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var defaultOptions = {
      preserveOrder: false,
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      removeNSPrefix: false,
      // remove NS from tag name or attribute name if true
      allowBooleanAttributes: false,
      //a tag can have attributes without any value
      //ignoreRootElement : false,
      parseTagValue: true,
      parseAttributeValue: false,
      trimValues: true,
      //Trim string values of tag and attributes
      cdataPropName: false,
      numberParseOptions: {
        hex: true,
        leadingZeros: true,
        eNotation: true
      },
      tagValueProcessor: /* @__PURE__ */ __name(function(tagName, val2) {
        return val2;
      }, "tagValueProcessor"),
      attributeValueProcessor: /* @__PURE__ */ __name(function(attrName, val2) {
        return val2;
      }, "attributeValueProcessor"),
      stopNodes: [],
      //nested tags will not be parsed even for errors
      alwaysCreateTextNode: false,
      isArray: /* @__PURE__ */ __name(() => false, "isArray"),
      commentPropName: false,
      unpairedTags: [],
      processEntities: true,
      htmlEntities: false,
      ignoreDeclaration: false,
      ignorePiTags: false,
      transformTagName: false,
      transformAttributeName: false,
      updateTag: /* @__PURE__ */ __name(function(tagName, jPath, attrs) {
        return tagName;
      }, "updateTag")
      // skipEmptyListItem: false
    };
    var buildOptions = /* @__PURE__ */ __name(function(options) {
      return Object.assign({}, defaultOptions, options);
    }, "buildOptions");
    exports.buildOptions = buildOptions;
    exports.defaultOptions = defaultOptions;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var require_xmlNode = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/xmlNode.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var XmlNode = class {
      static {
        __name(this, "XmlNode");
      }
      constructor(tagname) {
        this.tagname = tagname;
        this.child = [];
        this[":@"] = {};
      }
      add(key, val2) {
        if (key === "__proto__") key = "#__proto__";
        this.child.push({ [key]: val2 });
      }
      addChild(node) {
        if (node.tagname === "__proto__") node.tagname = "#__proto__";
        if (node[":@"] && Object.keys(node[":@"]).length > 0) {
          this.child.push({ [node.tagname]: node.child, [":@"]: node[":@"] });
        } else {
          this.child.push({ [node.tagname]: node.child });
        }
      }
    };
    module.exports = XmlNode;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var require_DocTypeReader = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js"(exports, module) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var util = require_util();
    function readDocType(xmlData, i3) {
      const entities = {};
      if (xmlData[i3 + 3] === "O" && xmlData[i3 + 4] === "C" && xmlData[i3 + 5] === "T" && xmlData[i3 + 6] === "Y" && xmlData[i3 + 7] === "P" && xmlData[i3 + 8] === "E") {
        i3 = i3 + 9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for (; i3 < xmlData.length; i3++) {
          if (xmlData[i3] === "<" && !comment) {
            if (hasBody && isEntity(xmlData, i3)) {
              i3 += 7;
              [entityName, val, i3] = readEntityExp(xmlData, i3 + 1);
              if (val.indexOf("&") === -1)
                entities[validateEntityName(entityName)] = {
                  regx: RegExp(`&${entityName};`, "g"),
                  val
                };
            } else if (hasBody && isElement(xmlData, i3)) i3 += 8;
            else if (hasBody && isAttlist(xmlData, i3)) i3 += 8;
            else if (hasBody && isNotation(xmlData, i3)) i3 += 9;
            else if (isComment) comment = true;
            else throw new Error("Invalid DOCTYPE");
            angleBracketsCount++;
            exp = "";
          } else if (xmlData[i3] === ">") {
            if (comment) {
              if (xmlData[i3 - 1] === "-" && xmlData[i3 - 2] === "-") {
                comment = false;
                angleBracketsCount--;
              }
            } else {
              angleBracketsCount--;
            }
            if (angleBracketsCount === 0) {
              break;
            }
          } else if (xmlData[i3] === "[") {
            hasBody = true;
          } else {
            exp += xmlData[i3];
          }
        }
        if (angleBracketsCount !== 0) {
          throw new Error(`Unclosed DOCTYPE`);
        }
      } else {
        throw new Error(`Invalid Tag instead of DOCTYPE`);
      }
      return { entities, i: i3 };
    }
    __name(readDocType, "readDocType");
    function readEntityExp(xmlData, i3) {
      let entityName2 = "";
      for (; i3 < xmlData.length && (xmlData[i3] !== "'" && xmlData[i3] !== '"'); i3++) {
        entityName2 += xmlData[i3];
      }
      entityName2 = entityName2.trim();
      if (entityName2.indexOf(" ") !== -1) throw new Error("External entites are not supported");
      const startChar = xmlData[i3++];
      let val2 = "";
      for (; i3 < xmlData.length && xmlData[i3] !== startChar; i3++) {
        val2 += xmlData[i3];
      }
      return [entityName2, val2, i3];
    }
    __name(readEntityExp, "readEntityExp");
    function isComment(xmlData, i3) {
      if (xmlData[i3 + 1] === "!" && xmlData[i3 + 2] === "-" && xmlData[i3 + 3] === "-") return true;
      return false;
    }
    __name(isComment, "isComment");
    function isEntity(xmlData, i3) {
      if (xmlData[i3 + 1] === "!" && xmlData[i3 + 2] === "E" && xmlData[i3 + 3] === "N" && xmlData[i3 + 4] === "T" && xmlData[i3 + 5] === "I" && xmlData[i3 + 6] === "T" && xmlData[i3 + 7] === "Y") return true;
      return false;
    }
    __name(isEntity, "isEntity");
    function isElement(xmlData, i3) {
      if (xmlData[i3 + 1] === "!" && xmlData[i3 + 2] === "E" && xmlData[i3 + 3] === "L" && xmlData[i3 + 4] === "E" && xmlData[i3 + 5] === "M" && xmlData[i3 + 6] === "E" && xmlData[i3 + 7] === "N" && xmlData[i3 + 8] === "T") return true;
      return false;
    }
    __name(isElement, "isElement");
    function isAttlist(xmlData, i3) {
      if (xmlData[i3 + 1] === "!" && xmlData[i3 + 2] === "A" && xmlData[i3 + 3] === "T" && xmlData[i3 + 4] === "T" && xmlData[i3 + 5] === "L" && xmlData[i3 + 6] === "I" && xmlData[i3 + 7] === "S" && xmlData[i3 + 8] === "T") return true;
      return false;
    }
    __name(isAttlist, "isAttlist");
    function isNotation(xmlData, i3) {
      if (xmlData[i3 + 1] === "!" && xmlData[i3 + 2] === "N" && xmlData[i3 + 3] === "O" && xmlData[i3 + 4] === "T" && xmlData[i3 + 5] === "A" && xmlData[i3 + 6] === "T" && xmlData[i3 + 7] === "I" && xmlData[i3 + 8] === "O" && xmlData[i3 + 9] === "N") return true;
      return false;
    }
    __name(isNotation, "isNotation");
    function validateEntityName(name) {
      if (util.isName(name))
        return name;
      else
        throw new Error(`Invalid entity name ${name}`);
    }
    __name(validateEntityName, "validateEntityName");
    module.exports = readDocType;
  }
});

// node_modules/strnum/strnum.js
var require_strnum = __commonJS({
  "node_modules/strnum/strnum.js"(exports, module) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
    var numRegex = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/;
    var consider = {
      hex: true,
      // oct: false,
      leadingZeros: true,
      decimalPoint: ".",
      eNotation: true
      //skipLike: /regex/
    };
    function toNumber(str, options = {}) {
      options = Object.assign({}, consider, options);
      if (!str || typeof str !== "string") return str;
      let trimmedStr = str.trim();
      if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr)) return str;
      else if (str === "0") return 0;
      else if (options.hex && hexRegex.test(trimmedStr)) {
        return parse_int(trimmedStr, 16);
      } else if (trimmedStr.search(/[eE]/) !== -1) {
        const notation = trimmedStr.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
        if (notation) {
          if (options.leadingZeros) {
            trimmedStr = (notation[1] || "") + notation[3];
          } else {
            if (notation[2] === "0" && notation[3][0] === ".") {
            } else {
              return str;
            }
          }
          return options.eNotation ? Number(trimmedStr) : str;
        } else {
          return str;
        }
      } else {
        const match = numRegex.exec(trimmedStr);
        if (match) {
          const sign = match[1];
          const leadingZeros = match[2];
          let numTrimmedByZeros = trimZeros(match[3]);
          if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str;
          else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str;
          else if (options.leadingZeros && leadingZeros === str) return 0;
          else {
            const num = Number(trimmedStr);
            const numStr = "" + num;
            if (numStr.search(/[eE]/) !== -1) {
              if (options.eNotation) return num;
              else return str;
            } else if (trimmedStr.indexOf(".") !== -1) {
              if (numStr === "0" && numTrimmedByZeros === "") return num;
              else if (numStr === numTrimmedByZeros) return num;
              else if (sign && numStr === "-" + numTrimmedByZeros) return num;
              else return str;
            }
            if (leadingZeros) {
              return numTrimmedByZeros === numStr || sign + numTrimmedByZeros === numStr ? num : str;
            } else {
              return trimmedStr === numStr || trimmedStr === sign + numStr ? num : str;
            }
          }
        } else {
          return str;
        }
      }
    }
    __name(toNumber, "toNumber");
    function trimZeros(numStr) {
      if (numStr && numStr.indexOf(".") !== -1) {
        numStr = numStr.replace(/0+$/, "");
        if (numStr === ".") numStr = "0";
        else if (numStr[0] === ".") numStr = "0" + numStr;
        else if (numStr[numStr.length - 1] === ".") numStr = numStr.substr(0, numStr.length - 1);
        return numStr;
      }
      return numStr;
    }
    __name(trimZeros, "trimZeros");
    function parse_int(numStr, base) {
      if (parseInt) return parseInt(numStr, base);
      else if (Number.parseInt) return Number.parseInt(numStr, base);
      else if (window && window.parseInt) return window.parseInt(numStr, base);
      else throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
    }
    __name(parse_int, "parse_int");
    module.exports = toNumber;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var require_OrderedObjParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var util = require_util();
    var xmlNode = require_xmlNode();
    var readDocType = require_DocTypeReader();
    var toNumber = require_strnum();
    var OrderedObjParser = class {
      static {
        __name(this, "OrderedObjParser");
      }
      constructor(options) {
        this.options = options;
        this.currentNode = null;
        this.tagsNodeStack = [];
        this.docTypeEntities = {};
        this.lastEntities = {
          "apos": { regex: /&(apos|#39|#x27);/g, val: "'" },
          "gt": { regex: /&(gt|#62|#x3E);/g, val: ">" },
          "lt": { regex: /&(lt|#60|#x3C);/g, val: "<" },
          "quot": { regex: /&(quot|#34|#x22);/g, val: '"' }
        };
        this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
        this.htmlEntities = {
          "space": { regex: /&(nbsp|#160);/g, val: " " },
          // "lt" : { regex: /&(lt|#60);/g, val: "<" },
          // "gt" : { regex: /&(gt|#62);/g, val: ">" },
          // "amp" : { regex: /&(amp|#38);/g, val: "&" },
          // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
          // "apos" : { regex: /&(apos|#39);/g, val: "'" },
          "cent": { regex: /&(cent|#162);/g, val: "\xA2" },
          "pound": { regex: /&(pound|#163);/g, val: "\xA3" },
          "yen": { regex: /&(yen|#165);/g, val: "\xA5" },
          "euro": { regex: /&(euro|#8364);/g, val: "\u20AC" },
          "copyright": { regex: /&(copy|#169);/g, val: "\xA9" },
          "reg": { regex: /&(reg|#174);/g, val: "\xAE" },
          "inr": { regex: /&(inr|#8377);/g, val: "\u20B9" },
          "num_dec": { regex: /&#([0-9]{1,7});/g, val: /* @__PURE__ */ __name((_3, str) => String.fromCharCode(Number.parseInt(str, 10)), "val") },
          "num_hex": { regex: /&#x([0-9a-fA-F]{1,6});/g, val: /* @__PURE__ */ __name((_3, str) => String.fromCharCode(Number.parseInt(str, 16)), "val") }
        };
        this.addExternalEntities = addExternalEntities;
        this.parseXml = parseXml;
        this.parseTextData = parseTextData;
        this.resolveNameSpace = resolveNameSpace;
        this.buildAttributesMap = buildAttributesMap;
        this.isItStopNode = isItStopNode;
        this.replaceEntitiesValue = replaceEntitiesValue;
        this.readStopNodeData = readStopNodeData;
        this.saveTextToParentTag = saveTextToParentTag;
        this.addChild = addChild;
      }
    };
    function addExternalEntities(externalEntities) {
      const entKeys = Object.keys(externalEntities);
      for (let i3 = 0; i3 < entKeys.length; i3++) {
        const ent = entKeys[i3];
        this.lastEntities[ent] = {
          regex: new RegExp("&" + ent + ";", "g"),
          val: externalEntities[ent]
        };
      }
    }
    __name(addExternalEntities, "addExternalEntities");
    function parseTextData(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
      if (val2 !== void 0) {
        if (this.options.trimValues && !dontTrim) {
          val2 = val2.trim();
        }
        if (val2.length > 0) {
          if (!escapeEntities) val2 = this.replaceEntitiesValue(val2);
          const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
          if (newval === null || newval === void 0) {
            return val2;
          } else if (typeof newval !== typeof val2 || newval !== val2) {
            return newval;
          } else if (this.options.trimValues) {
            return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
          } else {
            const trimmedVal = val2.trim();
            if (trimmedVal === val2) {
              return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
            } else {
              return val2;
            }
          }
        }
      }
    }
    __name(parseTextData, "parseTextData");
    function resolveNameSpace(tagname) {
      if (this.options.removeNSPrefix) {
        const tags = tagname.split(":");
        const prefix = tagname.charAt(0) === "/" ? "/" : "";
        if (tags[0] === "xmlns") {
          return "";
        }
        if (tags.length === 2) {
          tagname = prefix + tags[1];
        }
      }
      return tagname;
    }
    __name(resolveNameSpace, "resolveNameSpace");
    var attrsRegx = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
    function buildAttributesMap(attrStr, jPath, tagName) {
      if (!this.options.ignoreAttributes && typeof attrStr === "string") {
        const matches = util.getAllMatches(attrStr, attrsRegx);
        const len = matches.length;
        const attrs = {};
        for (let i3 = 0; i3 < len; i3++) {
          const attrName = this.resolveNameSpace(matches[i3][1]);
          let oldVal = matches[i3][4];
          let aName = this.options.attributeNamePrefix + attrName;
          if (attrName.length) {
            if (this.options.transformAttributeName) {
              aName = this.options.transformAttributeName(aName);
            }
            if (aName === "__proto__") aName = "#__proto__";
            if (oldVal !== void 0) {
              if (this.options.trimValues) {
                oldVal = oldVal.trim();
              }
              oldVal = this.replaceEntitiesValue(oldVal);
              const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
              if (newVal === null || newVal === void 0) {
                attrs[aName] = oldVal;
              } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
                attrs[aName] = newVal;
              } else {
                attrs[aName] = parseValue(
                  oldVal,
                  this.options.parseAttributeValue,
                  this.options.numberParseOptions
                );
              }
            } else if (this.options.allowBooleanAttributes) {
              attrs[aName] = true;
            }
          }
        }
        if (!Object.keys(attrs).length) {
          return;
        }
        if (this.options.attributesGroupName) {
          const attrCollection = {};
          attrCollection[this.options.attributesGroupName] = attrs;
          return attrCollection;
        }
        return attrs;
      }
    }
    __name(buildAttributesMap, "buildAttributesMap");
    var parseXml = /* @__PURE__ */ __name(function(xmlData) {
      xmlData = xmlData.replace(/\r\n?/g, "\n");
      const xmlObj = new xmlNode("!xml");
      let currentNode = xmlObj;
      let textData = "";
      let jPath = "";
      for (let i3 = 0; i3 < xmlData.length; i3++) {
        const ch = xmlData[i3];
        if (ch === "<") {
          if (xmlData[i3 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i3, "Closing Tag is not closed.");
            let tagName = xmlData.substring(i3 + 2, closeIndex).trim();
            if (this.options.removeNSPrefix) {
              const colonIndex = tagName.indexOf(":");
              if (colonIndex !== -1) {
                tagName = tagName.substr(colonIndex + 1);
              }
            }
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode) {
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
            }
            const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
            if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
              throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
            }
            let propIndex = 0;
            if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
              propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
              this.tagsNodeStack.pop();
            } else {
              propIndex = jPath.lastIndexOf(".");
            }
            jPath = jPath.substring(0, propIndex);
            currentNode = this.tagsNodeStack.pop();
            textData = "";
            i3 = closeIndex;
          } else if (xmlData[i3 + 1] === "?") {
            let tagData = readTagExp(xmlData, i3, false, "?>");
            if (!tagData) throw new Error("Pi Tag is not closed.");
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
            } else {
              const childNode = new xmlNode(tagData.tagName);
              childNode.add(this.options.textNodeName, "");
              if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
              }
              this.addChild(currentNode, childNode, jPath);
            }
            i3 = tagData.closeIndex + 1;
          } else if (xmlData.substr(i3 + 1, 3) === "!--") {
            const endIndex = findClosingIndex(xmlData, "-->", i3 + 4, "Comment is not closed.");
            if (this.options.commentPropName) {
              const comment = xmlData.substring(i3 + 4, endIndex - 2);
              textData = this.saveTextToParentTag(textData, currentNode, jPath);
              currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
            }
            i3 = endIndex;
          } else if (xmlData.substr(i3 + 1, 2) === "!D") {
            const result = readDocType(xmlData, i3);
            this.docTypeEntities = result.entities;
            i3 = result.i;
          } else if (xmlData.substr(i3 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i3, "CDATA is not closed.") - 2;
            const tagExp = xmlData.substring(i3 + 9, closeIndex);
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true, true);
            if (val2 == void 0) val2 = "";
            if (this.options.cdataPropName) {
              currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
            } else {
              currentNode.add(this.options.textNodeName, val2);
            }
            i3 = closeIndex + 2;
          } else {
            let result = readTagExp(xmlData, i3, this.options.removeNSPrefix);
            let tagName = result.tagName;
            const rawTagName = result.rawTagName;
            let tagExp = result.tagExp;
            let attrExpPresent = result.attrExpPresent;
            let closeIndex = result.closeIndex;
            if (this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }
            if (currentNode && textData) {
              if (currentNode.tagname !== "!xml") {
                textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
              }
            }
            const lastTag = currentNode;
            if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
              currentNode = this.tagsNodeStack.pop();
              jPath = jPath.substring(0, jPath.lastIndexOf("."));
            }
            if (tagName !== xmlObj.tagname) {
              jPath += jPath ? "." + tagName : tagName;
            }
            if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
              let tagContent = "";
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  jPath = jPath.substr(0, jPath.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                i3 = result.closeIndex;
              } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
                i3 = result.closeIndex;
              } else {
                const result2 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
                if (!result2) throw new Error(`Unexpected end of ${rawTagName}`);
                i3 = result2.i;
                tagContent = result2.tagContent;
              }
              const childNode = new xmlNode(tagName);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
              }
              if (tagContent) {
                tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
              }
              jPath = jPath.substr(0, jPath.lastIndexOf("."));
              childNode.add(this.options.textNodeName, tagContent);
              this.addChild(currentNode, childNode, jPath);
            } else {
              if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
                if (tagName[tagName.length - 1] === "/") {
                  tagName = tagName.substr(0, tagName.length - 1);
                  jPath = jPath.substr(0, jPath.length - 1);
                  tagExp = tagName;
                } else {
                  tagExp = tagExp.substr(0, tagExp.length - 1);
                }
                if (this.options.transformTagName) {
                  tagName = this.options.transformTagName(tagName);
                }
                const childNode = new xmlNode(tagName);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                jPath = jPath.substr(0, jPath.lastIndexOf("."));
              } else {
                const childNode = new xmlNode(tagName);
                this.tagsNodeStack.push(currentNode);
                if (tagName !== tagExp && attrExpPresent) {
                  childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
                }
                this.addChild(currentNode, childNode, jPath);
                currentNode = childNode;
              }
              textData = "";
              i3 = closeIndex;
            }
          }
        } else {
          textData += xmlData[i3];
        }
      }
      return xmlObj.child;
    }, "parseXml");
    function addChild(currentNode, childNode, jPath) {
      const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
      if (result === false) {
      } else if (typeof result === "string") {
        childNode.tagname = result;
        currentNode.addChild(childNode);
      } else {
        currentNode.addChild(childNode);
      }
    }
    __name(addChild, "addChild");
    var replaceEntitiesValue = /* @__PURE__ */ __name(function(val2) {
      if (this.options.processEntities) {
        for (let entityName2 in this.docTypeEntities) {
          const entity = this.docTypeEntities[entityName2];
          val2 = val2.replace(entity.regx, entity.val);
        }
        for (let entityName2 in this.lastEntities) {
          const entity = this.lastEntities[entityName2];
          val2 = val2.replace(entity.regex, entity.val);
        }
        if (this.options.htmlEntities) {
          for (let entityName2 in this.htmlEntities) {
            const entity = this.htmlEntities[entityName2];
            val2 = val2.replace(entity.regex, entity.val);
          }
        }
        val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
      }
      return val2;
    }, "replaceEntitiesValue");
    function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
      if (textData) {
        if (isLeafNode === void 0) isLeafNode = Object.keys(currentNode.child).length === 0;
        textData = this.parseTextData(
          textData,
          currentNode.tagname,
          jPath,
          false,
          currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
          isLeafNode
        );
        if (textData !== void 0 && textData !== "")
          currentNode.add(this.options.textNodeName, textData);
        textData = "";
      }
      return textData;
    }
    __name(saveTextToParentTag, "saveTextToParentTag");
    function isItStopNode(stopNodes, jPath, currentTagName) {
      const allNodesExp = "*." + currentTagName;
      for (const stopNodePath in stopNodes) {
        const stopNodeExp = stopNodes[stopNodePath];
        if (allNodesExp === stopNodeExp || jPath === stopNodeExp) return true;
      }
      return false;
    }
    __name(isItStopNode, "isItStopNode");
    function tagExpWithClosingIndex(xmlData, i3, closingChar = ">") {
      let attrBoundary;
      let tagExp = "";
      for (let index = i3; index < xmlData.length; index++) {
        let ch = xmlData[index];
        if (attrBoundary) {
          if (ch === attrBoundary) attrBoundary = "";
        } else if (ch === '"' || ch === "'") {
          attrBoundary = ch;
        } else if (ch === closingChar[0]) {
          if (closingChar[1]) {
            if (xmlData[index + 1] === closingChar[1]) {
              return {
                data: tagExp,
                index
              };
            }
          } else {
            return {
              data: tagExp,
              index
            };
          }
        } else if (ch === "	") {
          ch = " ";
        }
        tagExp += ch;
      }
    }
    __name(tagExpWithClosingIndex, "tagExpWithClosingIndex");
    function findClosingIndex(xmlData, str, i3, errMsg) {
      const closingIndex = xmlData.indexOf(str, i3);
      if (closingIndex === -1) {
        throw new Error(errMsg);
      } else {
        return closingIndex + str.length - 1;
      }
    }
    __name(findClosingIndex, "findClosingIndex");
    function readTagExp(xmlData, i3, removeNSPrefix, closingChar = ">") {
      const result = tagExpWithClosingIndex(xmlData, i3 + 1, closingChar);
      if (!result) return;
      let tagExp = result.data;
      const closeIndex = result.index;
      const separatorIndex = tagExp.search(/\s/);
      let tagName = tagExp;
      let attrExpPresent = true;
      if (separatorIndex !== -1) {
        tagName = tagExp.substring(0, separatorIndex);
        tagExp = tagExp.substring(separatorIndex + 1).trimStart();
      }
      const rawTagName = tagName;
      if (removeNSPrefix) {
        const colonIndex = tagName.indexOf(":");
        if (colonIndex !== -1) {
          tagName = tagName.substr(colonIndex + 1);
          attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
        }
      }
      return {
        tagName,
        tagExp,
        closeIndex,
        attrExpPresent,
        rawTagName
      };
    }
    __name(readTagExp, "readTagExp");
    function readStopNodeData(xmlData, tagName, i3) {
      const startIndex = i3;
      let openTagCount = 1;
      for (; i3 < xmlData.length; i3++) {
        if (xmlData[i3] === "<") {
          if (xmlData[i3 + 1] === "/") {
            const closeIndex = findClosingIndex(xmlData, ">", i3, `${tagName} is not closed`);
            let closeTagName = xmlData.substring(i3 + 2, closeIndex).trim();
            if (closeTagName === tagName) {
              openTagCount--;
              if (openTagCount === 0) {
                return {
                  tagContent: xmlData.substring(startIndex, i3),
                  i: closeIndex
                };
              }
            }
            i3 = closeIndex;
          } else if (xmlData[i3 + 1] === "?") {
            const closeIndex = findClosingIndex(xmlData, "?>", i3 + 1, "StopNode is not closed.");
            i3 = closeIndex;
          } else if (xmlData.substr(i3 + 1, 3) === "!--") {
            const closeIndex = findClosingIndex(xmlData, "-->", i3 + 3, "StopNode is not closed.");
            i3 = closeIndex;
          } else if (xmlData.substr(i3 + 1, 2) === "![") {
            const closeIndex = findClosingIndex(xmlData, "]]>", i3, "StopNode is not closed.") - 2;
            i3 = closeIndex;
          } else {
            const tagData = readTagExp(xmlData, i3, ">");
            if (tagData) {
              const openTagName = tagData && tagData.tagName;
              if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
                openTagCount++;
              }
              i3 = tagData.closeIndex;
            }
          }
        }
      }
    }
    __name(readStopNodeData, "readStopNodeData");
    function parseValue(val2, shouldParse, options) {
      if (shouldParse && typeof val2 === "string") {
        const newval = val2.trim();
        if (newval === "true") return true;
        else if (newval === "false") return false;
        else return toNumber(val2, options);
      } else {
        if (util.isExist(val2)) {
          return val2;
        } else {
          return "";
        }
      }
    }
    __name(parseValue, "parseValue");
    module.exports = OrderedObjParser;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/node2json.js
var require_node2json = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/node2json.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    function prettify(node, options) {
      return compress(node, options);
    }
    __name(prettify, "prettify");
    function compress(arr, options, jPath) {
      let text;
      const compressedObj = {};
      for (let i3 = 0; i3 < arr.length; i3++) {
        const tagObj = arr[i3];
        const property = propName(tagObj);
        let newJpath = "";
        if (jPath === void 0) newJpath = property;
        else newJpath = jPath + "." + property;
        if (property === options.textNodeName) {
          if (text === void 0) text = tagObj[property];
          else text += "" + tagObj[property];
        } else if (property === void 0) {
          continue;
        } else if (tagObj[property]) {
          let val2 = compress(tagObj[property], options, newJpath);
          const isLeaf = isLeafTag(val2, options);
          if (tagObj[":@"]) {
            assignAttributes(val2, tagObj[":@"], newJpath, options);
          } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== void 0 && !options.alwaysCreateTextNode) {
            val2 = val2[options.textNodeName];
          } else if (Object.keys(val2).length === 0) {
            if (options.alwaysCreateTextNode) val2[options.textNodeName] = "";
            else val2 = "";
          }
          if (compressedObj[property] !== void 0 && compressedObj.hasOwnProperty(property)) {
            if (!Array.isArray(compressedObj[property])) {
              compressedObj[property] = [compressedObj[property]];
            }
            compressedObj[property].push(val2);
          } else {
            if (options.isArray(property, newJpath, isLeaf)) {
              compressedObj[property] = [val2];
            } else {
              compressedObj[property] = val2;
            }
          }
        }
      }
      if (typeof text === "string") {
        if (text.length > 0) compressedObj[options.textNodeName] = text;
      } else if (text !== void 0) compressedObj[options.textNodeName] = text;
      return compressedObj;
    }
    __name(compress, "compress");
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i3 = 0; i3 < keys.length; i3++) {
        const key = keys[i3];
        if (key !== ":@") return key;
      }
    }
    __name(propName, "propName");
    function assignAttributes(obj, attrMap, jpath, options) {
      if (attrMap) {
        const keys = Object.keys(attrMap);
        const len = keys.length;
        for (let i3 = 0; i3 < len; i3++) {
          const atrrName = keys[i3];
          if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
            obj[atrrName] = [attrMap[atrrName]];
          } else {
            obj[atrrName] = attrMap[atrrName];
          }
        }
      }
    }
    __name(assignAttributes, "assignAttributes");
    function isLeafTag(obj, options) {
      const { textNodeName } = options;
      const propCount = Object.keys(obj).length;
      if (propCount === 0) {
        return true;
      }
      if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
        return true;
      }
      return false;
    }
    __name(isLeafTag, "isLeafTag");
    exports.prettify = prettify;
  }
});

// node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var require_XMLParser = __commonJS({
  "node_modules/fast-xml-parser/src/xmlparser/XMLParser.js"(exports, module) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var { buildOptions } = require_OptionsBuilder();
    var OrderedObjParser = require_OrderedObjParser();
    var { prettify } = require_node2json();
    var validator = require_validator();
    var XMLParser2 = class {
      static {
        __name(this, "XMLParser");
      }
      constructor(options) {
        this.externalEntities = {};
        this.options = buildOptions(options);
      }
      /**
       * Parse XML dats to JS object 
       * @param {string|Buffer} xmlData 
       * @param {boolean|Object} validationOption 
       */
      parse(xmlData, validationOption) {
        if (typeof xmlData === "string") {
        } else if (xmlData.toString) {
          xmlData = xmlData.toString();
        } else {
          throw new Error("XML data is accepted in String or Bytes[] form.");
        }
        if (validationOption) {
          if (validationOption === true) validationOption = {};
          const result = validator.validate(xmlData, validationOption);
          if (result !== true) {
            throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
          }
        }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if (this.options.preserveOrder || orderedResult === void 0) return orderedResult;
        else return prettify(orderedResult, this.options);
      }
      /**
       * Add Entity which is not by default supported by this library
       * @param {string} key 
       * @param {string} value 
       */
      addEntity(key, value) {
        if (value.indexOf("&") !== -1) {
          throw new Error("Entity value can't have '&'");
        } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
          throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
        } else if (value === "&") {
          throw new Error("An entity with value '&' is not permitted");
        } else {
          this.externalEntities[key] = value;
        }
      }
    };
    module.exports = XMLParser2;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
var require_orderedJs2Xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js"(exports, module) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var EOL = "\n";
    function toXml(jArray, options) {
      let indentation = "";
      if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
      }
      return arrToStr(jArray, options, "", indentation);
    }
    __name(toXml, "toXml");
    function arrToStr(arr, options, jPath, indentation) {
      let xmlStr = "";
      let isPreviousElementTag = false;
      for (let i3 = 0; i3 < arr.length; i3++) {
        const tagObj = arr[i3];
        const tagName = propName(tagObj);
        if (tagName === void 0) continue;
        let newJPath = "";
        if (jPath.length === 0) newJPath = tagName;
        else newJPath = `${jPath}.${tagName}`;
        if (tagName === options.textNodeName) {
          let tagText = tagObj[tagName];
          if (!isStopNode(newJPath, options)) {
            tagText = options.tagValueProcessor(tagName, tagText);
            tagText = replaceEntitiesValue(tagText, options);
          }
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += tagText;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.cdataPropName) {
          if (isPreviousElementTag) {
            xmlStr += indentation;
          }
          xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
          isPreviousElementTag = false;
          continue;
        } else if (tagName === options.commentPropName) {
          xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
          isPreviousElementTag = true;
          continue;
        } else if (tagName[0] === "?") {
          const attStr2 = attr_to_str(tagObj[":@"], options);
          const tempInd = tagName === "?xml" ? "" : indentation;
          let piTextNodeName = tagObj[tagName][0][options.textNodeName];
          piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
          xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
          isPreviousElementTag = true;
          continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
          newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
          if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
          else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
          xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
          xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
          xmlStr += tagStart + ">";
          if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
            xmlStr += indentation + options.indentBy + tagValue + indentation;
          } else {
            xmlStr += tagValue;
          }
          xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
      }
      return xmlStr;
    }
    __name(arrToStr, "arrToStr");
    function propName(obj) {
      const keys = Object.keys(obj);
      for (let i3 = 0; i3 < keys.length; i3++) {
        const key = keys[i3];
        if (!obj.hasOwnProperty(key)) continue;
        if (key !== ":@") return key;
      }
    }
    __name(propName, "propName");
    function attr_to_str(attrMap, options) {
      let attrStr = "";
      if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
          if (!attrMap.hasOwnProperty(attr)) continue;
          let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
          attrVal = replaceEntitiesValue(attrVal, options);
          if (attrVal === true && options.suppressBooleanAttributes) {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
          } else {
            attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
          }
        }
      }
      return attrStr;
    }
    __name(attr_to_str, "attr_to_str");
    function isStopNode(jPath, options) {
      jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
      let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
      for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
      }
      return false;
    }
    __name(isStopNode, "isStopNode");
    function replaceEntitiesValue(textValue, options) {
      if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i3 = 0; i3 < options.entities.length; i3++) {
          const entity = options.entities[i3];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    }
    __name(replaceEntitiesValue, "replaceEntitiesValue");
    module.exports = toXml;
  }
});

// node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
var require_json2xml = __commonJS({
  "node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var buildFromOrderedJs = require_orderedJs2Xml();
    var defaultOptions = {
      attributeNamePrefix: "@_",
      attributesGroupName: false,
      textNodeName: "#text",
      ignoreAttributes: true,
      cdataPropName: false,
      format: false,
      indentBy: "  ",
      suppressEmptyNode: false,
      suppressUnpairedNode: true,
      suppressBooleanAttributes: true,
      tagValueProcessor: /* @__PURE__ */ __name(function(key, a3) {
        return a3;
      }, "tagValueProcessor"),
      attributeValueProcessor: /* @__PURE__ */ __name(function(attrName, a3) {
        return a3;
      }, "attributeValueProcessor"),
      preserveOrder: false,
      commentPropName: false,
      unpairedTags: [],
      entities: [
        { regex: new RegExp("&", "g"), val: "&amp;" },
        //it must be on top
        { regex: new RegExp(">", "g"), val: "&gt;" },
        { regex: new RegExp("<", "g"), val: "&lt;" },
        { regex: new RegExp("'", "g"), val: "&apos;" },
        { regex: new RegExp('"', "g"), val: "&quot;" }
      ],
      processEntities: true,
      stopNodes: [],
      // transformTagName: false,
      // transformAttributeName: false,
      oneListGroup: false
    };
    function Builder(options) {
      this.options = Object.assign({}, defaultOptions, options);
      if (this.options.ignoreAttributes || this.options.attributesGroupName) {
        this.isAttribute = function() {
          return false;
        };
      } else {
        this.attrPrefixLen = this.options.attributeNamePrefix.length;
        this.isAttribute = isAttribute;
      }
      this.processTextOrObjNode = processTextOrObjNode;
      if (this.options.format) {
        this.indentate = indentate;
        this.tagEndChar = ">\n";
        this.newLine = "\n";
      } else {
        this.indentate = function() {
          return "";
        };
        this.tagEndChar = ">";
        this.newLine = "";
      }
    }
    __name(Builder, "Builder");
    Builder.prototype.build = function(jObj) {
      if (this.options.preserveOrder) {
        return buildFromOrderedJs(jObj, this.options);
      } else {
        if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
          jObj = {
            [this.options.arrayNodeName]: jObj
          };
        }
        return this.j2x(jObj, 0).val;
      }
    };
    Builder.prototype.j2x = function(jObj, level) {
      let attrStr = "";
      let val2 = "";
      for (let key in jObj) {
        if (!Object.prototype.hasOwnProperty.call(jObj, key)) continue;
        if (typeof jObj[key] === "undefined") {
          if (this.isAttribute(key)) {
            val2 += "";
          }
        } else if (jObj[key] === null) {
          if (this.isAttribute(key)) {
            val2 += "";
          } else if (key[0] === "?") {
            val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
          } else {
            val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
          }
        } else if (jObj[key] instanceof Date) {
          val2 += this.buildTextValNode(jObj[key], key, "", level);
        } else if (typeof jObj[key] !== "object") {
          const attr = this.isAttribute(key);
          if (attr) {
            attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
          } else {
            if (key === this.options.textNodeName) {
              let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
              val2 += this.replaceEntitiesValue(newval);
            } else {
              val2 += this.buildTextValNode(jObj[key], key, "", level);
            }
          }
        } else if (Array.isArray(jObj[key])) {
          const arrLen = jObj[key].length;
          let listTagVal = "";
          let listTagAttr = "";
          for (let j3 = 0; j3 < arrLen; j3++) {
            const item = jObj[key][j3];
            if (typeof item === "undefined") {
            } else if (item === null) {
              if (key[0] === "?") val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
              else val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
            } else if (typeof item === "object") {
              if (this.options.oneListGroup) {
                const result = this.j2x(item, level + 1);
                listTagVal += result.val;
                if (this.options.attributesGroupName && item.hasOwnProperty(this.options.attributesGroupName)) {
                  listTagAttr += result.attrStr;
                }
              } else {
                listTagVal += this.processTextOrObjNode(item, key, level);
              }
            } else {
              if (this.options.oneListGroup) {
                let textValue = this.options.tagValueProcessor(key, item);
                textValue = this.replaceEntitiesValue(textValue);
                listTagVal += textValue;
              } else {
                listTagVal += this.buildTextValNode(item, key, "", level);
              }
            }
          }
          if (this.options.oneListGroup) {
            listTagVal = this.buildObjectNode(listTagVal, key, listTagAttr, level);
          }
          val2 += listTagVal;
        } else {
          if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
            const Ks = Object.keys(jObj[key]);
            const L = Ks.length;
            for (let j3 = 0; j3 < L; j3++) {
              attrStr += this.buildAttrPairStr(Ks[j3], "" + jObj[key][Ks[j3]]);
            }
          } else {
            val2 += this.processTextOrObjNode(jObj[key], key, level);
          }
        }
      }
      return { attrStr, val: val2 };
    };
    Builder.prototype.buildAttrPairStr = function(attrName, val2) {
      val2 = this.options.attributeValueProcessor(attrName, "" + val2);
      val2 = this.replaceEntitiesValue(val2);
      if (this.options.suppressBooleanAttributes && val2 === "true") {
        return " " + attrName;
      } else return " " + attrName + '="' + val2 + '"';
    };
    function processTextOrObjNode(object, key, level) {
      const result = this.j2x(object, level + 1);
      if (object[this.options.textNodeName] !== void 0 && Object.keys(object).length === 1) {
        return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
      } else {
        return this.buildObjectNode(result.val, key, result.attrStr, level);
      }
    }
    __name(processTextOrObjNode, "processTextOrObjNode");
    Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
      if (val2 === "") {
        if (key[0] === "?") return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
        else {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        }
      } else {
        let tagEndExp = "</" + key + this.tagEndChar;
        let piClosingChar = "";
        if (key[0] === "?") {
          piClosingChar = "?";
          tagEndExp = "";
        }
        if ((attrStr || attrStr === "") && val2.indexOf("<") === -1) {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
        } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
          return this.indentate(level) + `<!--${val2}-->` + this.newLine;
        } else {
          return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
        }
      }
    };
    Builder.prototype.closeTag = function(key) {
      let closeTag = "";
      if (this.options.unpairedTags.indexOf(key) !== -1) {
        if (!this.options.suppressUnpairedNode) closeTag = "/";
      } else if (this.options.suppressEmptyNode) {
        closeTag = "/";
      } else {
        closeTag = `></${key}`;
      }
      return closeTag;
    };
    Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
      if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
        return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
      } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
        return this.indentate(level) + `<!--${val2}-->` + this.newLine;
      } else if (key[0] === "?") {
        return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
      } else {
        let textValue = this.options.tagValueProcessor(key, val2);
        textValue = this.replaceEntitiesValue(textValue);
        if (textValue === "") {
          return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
        } else {
          return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
        }
      }
    };
    Builder.prototype.replaceEntitiesValue = function(textValue) {
      if (textValue && textValue.length > 0 && this.options.processEntities) {
        for (let i3 = 0; i3 < this.options.entities.length; i3++) {
          const entity = this.options.entities[i3];
          textValue = textValue.replace(entity.regex, entity.val);
        }
      }
      return textValue;
    };
    function indentate(level) {
      return this.options.indentBy.repeat(level);
    }
    __name(indentate, "indentate");
    function isAttribute(name) {
      if (name.startsWith(this.options.attributeNamePrefix) && name !== this.options.textNodeName) {
        return name.substr(this.attrPrefixLen);
      } else {
        return false;
      }
    }
    __name(isAttribute, "isAttribute");
    module.exports = Builder;
  }
});

// node_modules/fast-xml-parser/src/fxp.js
var require_fxp = __commonJS({
  "node_modules/fast-xml-parser/src/fxp.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    var validator = require_validator();
    var XMLParser2 = require_XMLParser();
    var XMLBuilder = require_json2xml();
    module.exports = {
      XMLParser: XMLParser2,
      XMLValidator: validator,
      XMLBuilder
    };
  }
});

// node_modules/bowser/es5.js
var require_es5 = __commonJS({
  "node_modules/bowser/es5.js"(exports, module) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    !function(e3, t3) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t3() : "function" == typeof define && define.amd ? define([], t3) : "object" == typeof exports ? exports.bowser = t3() : e3.bowser = t3();
    }(exports, function() {
      return function(e3) {
        var t3 = {};
        function r3(n3) {
          if (t3[n3]) return t3[n3].exports;
          var i3 = t3[n3] = { i: n3, l: false, exports: {} };
          return e3[n3].call(i3.exports, i3, i3.exports, r3), i3.l = true, i3.exports;
        }
        __name(r3, "r");
        return r3.m = e3, r3.c = t3, r3.d = function(e4, t4, n3) {
          r3.o(e4, t4) || Object.defineProperty(e4, t4, { enumerable: true, get: n3 });
        }, r3.r = function(e4) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
        }, r3.t = function(e4, t4) {
          if (1 & t4 && (e4 = r3(e4)), 8 & t4) return e4;
          if (4 & t4 && "object" == typeof e4 && e4 && e4.__esModule) return e4;
          var n3 = /* @__PURE__ */ Object.create(null);
          if (r3.r(n3), Object.defineProperty(n3, "default", { enumerable: true, value: e4 }), 2 & t4 && "string" != typeof e4) for (var i3 in e4) r3.d(n3, i3, function(t5) {
            return e4[t5];
          }.bind(null, i3));
          return n3;
        }, r3.n = function(e4) {
          var t4 = e4 && e4.__esModule ? function() {
            return e4.default;
          } : function() {
            return e4;
          };
          return r3.d(t4, "a", t4), t4;
        }, r3.o = function(e4, t4) {
          return Object.prototype.hasOwnProperty.call(e4, t4);
        }, r3.p = "", r3(r3.s = 90);
      }({ 17: function(e3, t3, r3) {
        "use strict";
        t3.__esModule = true, t3.default = void 0;
        var n3 = r3(18), i3 = function() {
          function e4() {
          }
          __name(e4, "e");
          return e4.getFirstMatch = function(e5, t4) {
            var r4 = t4.match(e5);
            return r4 && r4.length > 0 && r4[1] || "";
          }, e4.getSecondMatch = function(e5, t4) {
            var r4 = t4.match(e5);
            return r4 && r4.length > 1 && r4[2] || "";
          }, e4.matchAndReturnConst = function(e5, t4, r4) {
            if (e5.test(t4)) return r4;
          }, e4.getWindowsVersionName = function(e5) {
            switch (e5) {
              case "NT":
                return "NT";
              case "XP":
                return "XP";
              case "NT 5.0":
                return "2000";
              case "NT 5.1":
                return "XP";
              case "NT 5.2":
                return "2003";
              case "NT 6.0":
                return "Vista";
              case "NT 6.1":
                return "7";
              case "NT 6.2":
                return "8";
              case "NT 6.3":
                return "8.1";
              case "NT 10.0":
                return "10";
              default:
                return;
            }
          }, e4.getMacOSVersionName = function(e5) {
            var t4 = e5.split(".").splice(0, 2).map(function(e6) {
              return parseInt(e6, 10) || 0;
            });
            if (t4.push(0), 10 === t4[0]) switch (t4[1]) {
              case 5:
                return "Leopard";
              case 6:
                return "Snow Leopard";
              case 7:
                return "Lion";
              case 8:
                return "Mountain Lion";
              case 9:
                return "Mavericks";
              case 10:
                return "Yosemite";
              case 11:
                return "El Capitan";
              case 12:
                return "Sierra";
              case 13:
                return "High Sierra";
              case 14:
                return "Mojave";
              case 15:
                return "Catalina";
              default:
                return;
            }
          }, e4.getAndroidVersionName = function(e5) {
            var t4 = e5.split(".").splice(0, 2).map(function(e6) {
              return parseInt(e6, 10) || 0;
            });
            if (t4.push(0), !(1 === t4[0] && t4[1] < 5)) return 1 === t4[0] && t4[1] < 6 ? "Cupcake" : 1 === t4[0] && t4[1] >= 6 ? "Donut" : 2 === t4[0] && t4[1] < 2 ? "Eclair" : 2 === t4[0] && 2 === t4[1] ? "Froyo" : 2 === t4[0] && t4[1] > 2 ? "Gingerbread" : 3 === t4[0] ? "Honeycomb" : 4 === t4[0] && t4[1] < 1 ? "Ice Cream Sandwich" : 4 === t4[0] && t4[1] < 4 ? "Jelly Bean" : 4 === t4[0] && t4[1] >= 4 ? "KitKat" : 5 === t4[0] ? "Lollipop" : 6 === t4[0] ? "Marshmallow" : 7 === t4[0] ? "Nougat" : 8 === t4[0] ? "Oreo" : 9 === t4[0] ? "Pie" : void 0;
          }, e4.getVersionPrecision = function(e5) {
            return e5.split(".").length;
          }, e4.compareVersions = function(t4, r4, n4) {
            void 0 === n4 && (n4 = false);
            var i4 = e4.getVersionPrecision(t4), s3 = e4.getVersionPrecision(r4), a3 = Math.max(i4, s3), o3 = 0, u3 = e4.map([t4, r4], function(t5) {
              var r5 = a3 - e4.getVersionPrecision(t5), n5 = t5 + new Array(r5 + 1).join(".0");
              return e4.map(n5.split("."), function(e5) {
                return new Array(20 - e5.length).join("0") + e5;
              }).reverse();
            });
            for (n4 && (o3 = a3 - Math.min(i4, s3)), a3 -= 1; a3 >= o3; ) {
              if (u3[0][a3] > u3[1][a3]) return 1;
              if (u3[0][a3] === u3[1][a3]) {
                if (a3 === o3) return 0;
                a3 -= 1;
              } else if (u3[0][a3] < u3[1][a3]) return -1;
            }
          }, e4.map = function(e5, t4) {
            var r4, n4 = [];
            if (Array.prototype.map) return Array.prototype.map.call(e5, t4);
            for (r4 = 0; r4 < e5.length; r4 += 1) n4.push(t4(e5[r4]));
            return n4;
          }, e4.find = function(e5, t4) {
            var r4, n4;
            if (Array.prototype.find) return Array.prototype.find.call(e5, t4);
            for (r4 = 0, n4 = e5.length; r4 < n4; r4 += 1) {
              var i4 = e5[r4];
              if (t4(i4, r4)) return i4;
            }
          }, e4.assign = function(e5) {
            for (var t4, r4, n4 = e5, i4 = arguments.length, s3 = new Array(i4 > 1 ? i4 - 1 : 0), a3 = 1; a3 < i4; a3++) s3[a3 - 1] = arguments[a3];
            if (Object.assign) return Object.assign.apply(Object, [e5].concat(s3));
            var o3 = /* @__PURE__ */ __name(function() {
              var e6 = s3[t4];
              "object" == typeof e6 && null !== e6 && Object.keys(e6).forEach(function(t5) {
                n4[t5] = e6[t5];
              });
            }, "o");
            for (t4 = 0, r4 = s3.length; t4 < r4; t4 += 1) o3();
            return e5;
          }, e4.getBrowserAlias = function(e5) {
            return n3.BROWSER_ALIASES_MAP[e5];
          }, e4.getBrowserTypeByAlias = function(e5) {
            return n3.BROWSER_MAP[e5] || "";
          }, e4;
        }();
        t3.default = i3, e3.exports = t3.default;
      }, 18: function(e3, t3, r3) {
        "use strict";
        t3.__esModule = true, t3.ENGINE_MAP = t3.OS_MAP = t3.PLATFORMS_MAP = t3.BROWSER_MAP = t3.BROWSER_ALIASES_MAP = void 0;
        t3.BROWSER_ALIASES_MAP = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" };
        t3.BROWSER_MAP = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" };
        t3.PLATFORMS_MAP = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" };
        t3.OS_MAP = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" };
        t3.ENGINE_MAP = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
      }, 90: function(e3, t3, r3) {
        "use strict";
        t3.__esModule = true, t3.default = void 0;
        var n3, i3 = (n3 = r3(91)) && n3.__esModule ? n3 : { default: n3 }, s3 = r3(18);
        function a3(e4, t4) {
          for (var r4 = 0; r4 < t4.length; r4++) {
            var n4 = t4[r4];
            n4.enumerable = n4.enumerable || false, n4.configurable = true, "value" in n4 && (n4.writable = true), Object.defineProperty(e4, n4.key, n4);
          }
        }
        __name(a3, "a");
        var o3 = function() {
          function e4() {
          }
          __name(e4, "e");
          var t4, r4, n4;
          return e4.getParser = function(e5, t5) {
            if (void 0 === t5 && (t5 = false), "string" != typeof e5) throw new Error("UserAgent should be a string");
            return new i3.default(e5, t5);
          }, e4.parse = function(e5) {
            return new i3.default(e5).getResult();
          }, t4 = e4, n4 = [{ key: "BROWSER_MAP", get: /* @__PURE__ */ __name(function() {
            return s3.BROWSER_MAP;
          }, "get") }, { key: "ENGINE_MAP", get: /* @__PURE__ */ __name(function() {
            return s3.ENGINE_MAP;
          }, "get") }, { key: "OS_MAP", get: /* @__PURE__ */ __name(function() {
            return s3.OS_MAP;
          }, "get") }, { key: "PLATFORMS_MAP", get: /* @__PURE__ */ __name(function() {
            return s3.PLATFORMS_MAP;
          }, "get") }], (r4 = null) && a3(t4.prototype, r4), n4 && a3(t4, n4), e4;
        }();
        t3.default = o3, e3.exports = t3.default;
      }, 91: function(e3, t3, r3) {
        "use strict";
        t3.__esModule = true, t3.default = void 0;
        var n3 = u3(r3(92)), i3 = u3(r3(93)), s3 = u3(r3(94)), a3 = u3(r3(95)), o3 = u3(r3(17));
        function u3(e4) {
          return e4 && e4.__esModule ? e4 : { default: e4 };
        }
        __name(u3, "u");
        var d3 = function() {
          function e4(e5, t5) {
            if (void 0 === t5 && (t5 = false), null == e5 || "" === e5) throw new Error("UserAgent parameter can't be empty");
            this._ua = e5, this.parsedResult = {}, true !== t5 && this.parse();
          }
          __name(e4, "e");
          var t4 = e4.prototype;
          return t4.getUA = function() {
            return this._ua;
          }, t4.test = function(e5) {
            return e5.test(this._ua);
          }, t4.parseBrowser = function() {
            var e5 = this;
            this.parsedResult.browser = {};
            var t5 = o3.default.find(n3.default, function(t6) {
              if ("function" == typeof t6.test) return t6.test(e5);
              if (t6.test instanceof Array) return t6.test.some(function(t7) {
                return e5.test(t7);
              });
              throw new Error("Browser's test function is not valid");
            });
            return t5 && (this.parsedResult.browser = t5.describe(this.getUA())), this.parsedResult.browser;
          }, t4.getBrowser = function() {
            return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
          }, t4.getBrowserName = function(e5) {
            return e5 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
          }, t4.getBrowserVersion = function() {
            return this.getBrowser().version;
          }, t4.getOS = function() {
            return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
          }, t4.parseOS = function() {
            var e5 = this;
            this.parsedResult.os = {};
            var t5 = o3.default.find(i3.default, function(t6) {
              if ("function" == typeof t6.test) return t6.test(e5);
              if (t6.test instanceof Array) return t6.test.some(function(t7) {
                return e5.test(t7);
              });
              throw new Error("Browser's test function is not valid");
            });
            return t5 && (this.parsedResult.os = t5.describe(this.getUA())), this.parsedResult.os;
          }, t4.getOSName = function(e5) {
            var t5 = this.getOS().name;
            return e5 ? String(t5).toLowerCase() || "" : t5 || "";
          }, t4.getOSVersion = function() {
            return this.getOS().version;
          }, t4.getPlatform = function() {
            return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
          }, t4.getPlatformType = function(e5) {
            void 0 === e5 && (e5 = false);
            var t5 = this.getPlatform().type;
            return e5 ? String(t5).toLowerCase() || "" : t5 || "";
          }, t4.parsePlatform = function() {
            var e5 = this;
            this.parsedResult.platform = {};
            var t5 = o3.default.find(s3.default, function(t6) {
              if ("function" == typeof t6.test) return t6.test(e5);
              if (t6.test instanceof Array) return t6.test.some(function(t7) {
                return e5.test(t7);
              });
              throw new Error("Browser's test function is not valid");
            });
            return t5 && (this.parsedResult.platform = t5.describe(this.getUA())), this.parsedResult.platform;
          }, t4.getEngine = function() {
            return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
          }, t4.getEngineName = function(e5) {
            return e5 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
          }, t4.parseEngine = function() {
            var e5 = this;
            this.parsedResult.engine = {};
            var t5 = o3.default.find(a3.default, function(t6) {
              if ("function" == typeof t6.test) return t6.test(e5);
              if (t6.test instanceof Array) return t6.test.some(function(t7) {
                return e5.test(t7);
              });
              throw new Error("Browser's test function is not valid");
            });
            return t5 && (this.parsedResult.engine = t5.describe(this.getUA())), this.parsedResult.engine;
          }, t4.parse = function() {
            return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
          }, t4.getResult = function() {
            return o3.default.assign({}, this.parsedResult);
          }, t4.satisfies = function(e5) {
            var t5 = this, r4 = {}, n4 = 0, i4 = {}, s4 = 0;
            if (Object.keys(e5).forEach(function(t6) {
              var a5 = e5[t6];
              "string" == typeof a5 ? (i4[t6] = a5, s4 += 1) : "object" == typeof a5 && (r4[t6] = a5, n4 += 1);
            }), n4 > 0) {
              var a4 = Object.keys(r4), u4 = o3.default.find(a4, function(e6) {
                return t5.isOS(e6);
              });
              if (u4) {
                var d4 = this.satisfies(r4[u4]);
                if (void 0 !== d4) return d4;
              }
              var c3 = o3.default.find(a4, function(e6) {
                return t5.isPlatform(e6);
              });
              if (c3) {
                var f3 = this.satisfies(r4[c3]);
                if (void 0 !== f3) return f3;
              }
            }
            if (s4 > 0) {
              var l3 = Object.keys(i4), h3 = o3.default.find(l3, function(e6) {
                return t5.isBrowser(e6, true);
              });
              if (void 0 !== h3) return this.compareVersion(i4[h3]);
            }
          }, t4.isBrowser = function(e5, t5) {
            void 0 === t5 && (t5 = false);
            var r4 = this.getBrowserName().toLowerCase(), n4 = e5.toLowerCase(), i4 = o3.default.getBrowserTypeByAlias(n4);
            return t5 && i4 && (n4 = i4.toLowerCase()), n4 === r4;
          }, t4.compareVersion = function(e5) {
            var t5 = [0], r4 = e5, n4 = false, i4 = this.getBrowserVersion();
            if ("string" == typeof i4) return ">" === e5[0] || "<" === e5[0] ? (r4 = e5.substr(1), "=" === e5[1] ? (n4 = true, r4 = e5.substr(2)) : t5 = [], ">" === e5[0] ? t5.push(1) : t5.push(-1)) : "=" === e5[0] ? r4 = e5.substr(1) : "~" === e5[0] && (n4 = true, r4 = e5.substr(1)), t5.indexOf(o3.default.compareVersions(i4, r4, n4)) > -1;
          }, t4.isOS = function(e5) {
            return this.getOSName(true) === String(e5).toLowerCase();
          }, t4.isPlatform = function(e5) {
            return this.getPlatformType(true) === String(e5).toLowerCase();
          }, t4.isEngine = function(e5) {
            return this.getEngineName(true) === String(e5).toLowerCase();
          }, t4.is = function(e5, t5) {
            return void 0 === t5 && (t5 = false), this.isBrowser(e5, t5) || this.isOS(e5) || this.isPlatform(e5);
          }, t4.some = function(e5) {
            var t5 = this;
            return void 0 === e5 && (e5 = []), e5.some(function(e6) {
              return t5.is(e6);
            });
          }, e4;
        }();
        t3.default = d3, e3.exports = t3.default;
      }, 92: function(e3, t3, r3) {
        "use strict";
        t3.__esModule = true, t3.default = void 0;
        var n3, i3 = (n3 = r3(17)) && n3.__esModule ? n3 : { default: n3 };
        var s3 = /version\/(\d+(\.?_?\d+)+)/i, a3 = [{ test: [/googlebot/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Googlebot" }, r4 = i3.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e4) || i3.default.getFirstMatch(s3, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/opera/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Opera" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/opr\/|opios/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Opera" }, r4 = i3.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e4) || i3.default.getFirstMatch(s3, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/SamsungBrowser/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Samsung Internet for Android" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/Whale/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "NAVER Whale Browser" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/MZBrowser/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "MZ Browser" }, r4 = i3.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/focus/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Focus" }, r4 = i3.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/swing/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Swing" }, r4 = i3.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/coast/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Opera Coast" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Opera Touch" }, r4 = i3.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/yabrowser/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Yandex Browser" }, r4 = i3.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/ucbrowser/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "UC Browser" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/Maxthon|mxios/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Maxthon" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/epiphany/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Epiphany" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/puffin/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Puffin" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/sleipnir/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Sleipnir" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/k-meleon/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "K-Meleon" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/micromessenger/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "WeChat" }, r4 = i3.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/qqbrowser/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: /qqbrowserlite/i.test(e4) ? "QQ Browser Lite" : "QQ Browser" }, r4 = i3.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/msie|trident/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Internet Explorer" }, r4 = i3.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/\sedg\//i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Microsoft Edge" }, r4 = i3.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/edg([ea]|ios)/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Microsoft Edge" }, r4 = i3.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/vivaldi/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Vivaldi" }, r4 = i3.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/seamonkey/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "SeaMonkey" }, r4 = i3.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/sailfish/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Sailfish" }, r4 = i3.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/silk/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Amazon Silk" }, r4 = i3.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/phantom/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "PhantomJS" }, r4 = i3.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/slimerjs/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "SlimerJS" }, r4 = i3.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "BlackBerry" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/(web|hpw)[o0]s/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "WebOS Browser" }, r4 = i3.default.getFirstMatch(s3, e4) || i3.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/bada/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Bada" }, r4 = i3.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/tizen/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Tizen" }, r4 = i3.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/qupzilla/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "QupZilla" }, r4 = i3.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/firefox|iceweasel|fxios/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Firefox" }, r4 = i3.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/electron/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Electron" }, r4 = i3.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/MiuiBrowser/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Miui" }, r4 = i3.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/chromium/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Chromium" }, r4 = i3.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e4) || i3.default.getFirstMatch(s3, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/chrome|crios|crmo/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Chrome" }, r4 = i3.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/GSA/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Google Search" }, r4 = i3.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e4) {
          var t4 = !e4.test(/like android/i), r4 = e4.test(/android/i);
          return t4 && r4;
        }, "test"), describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Android Browser" }, r4 = i3.default.getFirstMatch(s3, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/playstation 4/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "PlayStation 4" }, r4 = i3.default.getFirstMatch(s3, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/safari|applewebkit/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: "Safari" }, r4 = i3.default.getFirstMatch(s3, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/.*/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = -1 !== e4.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
          return { name: i3.default.getFirstMatch(t4, e4), version: i3.default.getSecondMatch(t4, e4) };
        }, "describe") }];
        t3.default = a3, e3.exports = t3.default;
      }, 93: function(e3, t3, r3) {
        "use strict";
        t3.__esModule = true, t3.default = void 0;
        var n3, i3 = (n3 = r3(17)) && n3.__esModule ? n3 : { default: n3 }, s3 = r3(18);
        var a3 = [{ test: [/Roku\/DVP/], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = i3.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e4);
          return { name: s3.OS_MAP.Roku, version: t4 };
        }, "describe") }, { test: [/windows phone/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = i3.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e4);
          return { name: s3.OS_MAP.WindowsPhone, version: t4 };
        }, "describe") }, { test: [/windows /i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = i3.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e4), r4 = i3.default.getWindowsVersionName(t4);
          return { name: s3.OS_MAP.Windows, version: t4, versionName: r4 };
        }, "describe") }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: s3.OS_MAP.iOS }, r4 = i3.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/macintosh/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = i3.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e4).replace(/[_\s]/g, "."), r4 = i3.default.getMacOSVersionName(t4), n4 = { name: s3.OS_MAP.MacOS, version: t4 };
          return r4 && (n4.versionName = r4), n4;
        }, "describe") }, { test: [/(ipod|iphone|ipad)/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = i3.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e4).replace(/[_\s]/g, ".");
          return { name: s3.OS_MAP.iOS, version: t4 };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e4) {
          var t4 = !e4.test(/like android/i), r4 = e4.test(/android/i);
          return t4 && r4;
        }, "test"), describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = i3.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e4), r4 = i3.default.getAndroidVersionName(t4), n4 = { name: s3.OS_MAP.Android, version: t4 };
          return r4 && (n4.versionName = r4), n4;
        }, "describe") }, { test: [/(web|hpw)[o0]s/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = i3.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e4), r4 = { name: s3.OS_MAP.WebOS };
          return t4 && t4.length && (r4.version = t4), r4;
        }, "describe") }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = i3.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e4) || i3.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e4) || i3.default.getFirstMatch(/\bbb(\d+)/i, e4);
          return { name: s3.OS_MAP.BlackBerry, version: t4 };
        }, "describe") }, { test: [/bada/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = i3.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e4);
          return { name: s3.OS_MAP.Bada, version: t4 };
        }, "describe") }, { test: [/tizen/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = i3.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e4);
          return { name: s3.OS_MAP.Tizen, version: t4 };
        }, "describe") }, { test: [/linux/i], describe: /* @__PURE__ */ __name(function() {
          return { name: s3.OS_MAP.Linux };
        }, "describe") }, { test: [/CrOS/], describe: /* @__PURE__ */ __name(function() {
          return { name: s3.OS_MAP.ChromeOS };
        }, "describe") }, { test: [/PlayStation 4/], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = i3.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e4);
          return { name: s3.OS_MAP.PlayStation4, version: t4 };
        }, "describe") }];
        t3.default = a3, e3.exports = t3.default;
      }, 94: function(e3, t3, r3) {
        "use strict";
        t3.__esModule = true, t3.default = void 0;
        var n3, i3 = (n3 = r3(17)) && n3.__esModule ? n3 : { default: n3 }, s3 = r3(18);
        var a3 = [{ test: [/googlebot/i], describe: /* @__PURE__ */ __name(function() {
          return { type: "bot", vendor: "Google" };
        }, "describe") }, { test: [/huawei/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = i3.default.getFirstMatch(/(can-l01)/i, e4) && "Nova", r4 = { type: s3.PLATFORMS_MAP.mobile, vendor: "Huawei" };
          return t4 && (r4.model = t4), r4;
        }, "describe") }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.tablet, vendor: "Nexus" };
        }, "describe") }, { test: [/ipad/i], describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
        }, "describe") }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
        }, "describe") }, { test: [/kftt build/i], describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
        }, "describe") }, { test: [/silk/i], describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.tablet, vendor: "Amazon" };
        }, "describe") }, { test: [/tablet(?! pc)/i], describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.tablet };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e4) {
          var t4 = e4.test(/ipod|iphone/i), r4 = e4.test(/like (ipod|iphone)/i);
          return t4 && !r4;
        }, "test"), describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = i3.default.getFirstMatch(/(ipod|iphone)/i, e4);
          return { type: s3.PLATFORMS_MAP.mobile, vendor: "Apple", model: t4 };
        }, "describe") }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.mobile, vendor: "Nexus" };
        }, "describe") }, { test: [/[^-]mobi/i], describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.mobile };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e4) {
          return "blackberry" === e4.getBrowserName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e4) {
          return "bada" === e4.getBrowserName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.mobile };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e4) {
          return "windows phone" === e4.getBrowserName();
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e4) {
          var t4 = Number(String(e4.getOSVersion()).split(".")[0]);
          return "android" === e4.getOSName(true) && t4 >= 3;
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.tablet };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e4) {
          return "android" === e4.getOSName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.mobile };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e4) {
          return "macos" === e4.getOSName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.desktop, vendor: "Apple" };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e4) {
          return "windows" === e4.getOSName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.desktop };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e4) {
          return "linux" === e4.getOSName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.desktop };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e4) {
          return "playstation 4" === e4.getOSName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.tv };
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e4) {
          return "roku" === e4.getOSName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function() {
          return { type: s3.PLATFORMS_MAP.tv };
        }, "describe") }];
        t3.default = a3, e3.exports = t3.default;
      }, 95: function(e3, t3, r3) {
        "use strict";
        t3.__esModule = true, t3.default = void 0;
        var n3, i3 = (n3 = r3(17)) && n3.__esModule ? n3 : { default: n3 }, s3 = r3(18);
        var a3 = [{ test: /* @__PURE__ */ __name(function(e4) {
          return "microsoft edge" === e4.getBrowserName(true);
        }, "test"), describe: /* @__PURE__ */ __name(function(e4) {
          if (/\sedg\//i.test(e4)) return { name: s3.ENGINE_MAP.Blink };
          var t4 = i3.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e4);
          return { name: s3.ENGINE_MAP.EdgeHTML, version: t4 };
        }, "describe") }, { test: [/trident/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: s3.ENGINE_MAP.Trident }, r4 = i3.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e4) {
          return e4.test(/presto/i);
        }, "test"), describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: s3.ENGINE_MAP.Presto }, r4 = i3.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: /* @__PURE__ */ __name(function(e4) {
          var t4 = e4.test(/gecko/i), r4 = e4.test(/like gecko/i);
          return t4 && !r4;
        }, "test"), describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: s3.ENGINE_MAP.Gecko }, r4 = i3.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }, { test: [/(apple)?webkit\/537\.36/i], describe: /* @__PURE__ */ __name(function() {
          return { name: s3.ENGINE_MAP.Blink };
        }, "describe") }, { test: [/(apple)?webkit/i], describe: /* @__PURE__ */ __name(function(e4) {
          var t4 = { name: s3.ENGINE_MAP.WebKit }, r4 = i3.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e4);
          return r4 && (t4.version = r4), t4;
        }, "describe") }];
        t3.default = a3, e3.exports = t3.default;
      } });
    });
  }
});

// .wrangler/tmp/bundle-Ll1JrC/middleware-loader.entry.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-Ll1JrC/middleware-insertion-facade.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-ec2/dist-es/EC2Client.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/protocol-http/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/protocol-http/dist-es/extensions/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getHttpHandlerExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  return {
    setHttpHandler(handler) {
      runtimeConfig.httpHandler = handler;
    },
    httpHandler() {
      return runtimeConfig.httpHandler;
    },
    updateHttpClientConfig(key, value) {
      runtimeConfig.httpHandler?.updateHttpClientConfig(key, value);
    },
    httpHandlerConfigs() {
      return runtimeConfig.httpHandler.httpHandlerConfigs();
    }
  };
}, "getHttpHandlerExtensionConfiguration");
var resolveHttpHandlerRuntimeConfig = /* @__PURE__ */ __name((httpHandlerExtensionConfiguration) => {
  return {
    httpHandler: httpHandlerExtensionConfiguration.httpHandler()
  };
}, "resolveHttpHandlerRuntimeConfig");

// node_modules/@smithy/protocol-http/dist-es/Field.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/abort.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/auth/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/auth/auth.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HttpAuthLocation;
(function(HttpAuthLocation2) {
  HttpAuthLocation2["HEADER"] = "header";
  HttpAuthLocation2["QUERY"] = "query";
})(HttpAuthLocation || (HttpAuthLocation = {}));

// node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HttpApiKeyAuthLocation;
(function(HttpApiKeyAuthLocation2) {
  HttpApiKeyAuthLocation2["HEADER"] = "header";
  HttpApiKeyAuthLocation2["QUERY"] = "query";
})(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));

// node_modules/@smithy/types/dist-es/auth/HttpAuthScheme.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/auth/HttpAuthSchemeProvider.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/auth/HttpSigner.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/auth/IdentityProviderConfig.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/blob/blob-payload-input-types.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/checksum.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/client.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/command.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/connection/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/connection/config.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/connection/manager.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/connection/pool.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/crypto.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/encode.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/endpoint.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var EndpointURLScheme;
(function(EndpointURLScheme2) {
  EndpointURLScheme2["HTTP"] = "http";
  EndpointURLScheme2["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));

// node_modules/@smithy/types/dist-es/endpoints/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/endpoints/EndpointRuleObject.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/endpoints/ErrorRuleObject.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/endpoints/RuleSetObject.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/endpoints/shared.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/endpoints/TreeRuleObject.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/eventStream.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/extensions/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/extensions/checksum.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var AlgorithmId;
(function(AlgorithmId2) {
  AlgorithmId2["MD5"] = "md5";
  AlgorithmId2["CRC32"] = "crc32";
  AlgorithmId2["CRC32C"] = "crc32c";
  AlgorithmId2["SHA1"] = "sha1";
  AlgorithmId2["SHA256"] = "sha256";
})(AlgorithmId || (AlgorithmId = {}));

// node_modules/@smithy/types/dist-es/extensions/defaultExtensionConfiguration.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/feature-ids.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/http.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var FieldPosition;
(function(FieldPosition2) {
  FieldPosition2[FieldPosition2["HEADER"] = 0] = "HEADER";
  FieldPosition2[FieldPosition2["TRAILER"] = 1] = "TRAILER";
})(FieldPosition || (FieldPosition = {}));

// node_modules/@smithy/types/dist-es/http/httpHandlerInitialization.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/identity/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/identity/apiKeyIdentity.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/identity/awsCredentialIdentity.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/identity/identity.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/identity/tokenIdentity.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/logger.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/middleware.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SMITHY_CONTEXT_KEY = "__smithy_context";

// node_modules/@smithy/types/dist-es/pagination.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/profile.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var IniSectionType;
(function(IniSectionType2) {
  IniSectionType2["PROFILE"] = "profile";
  IniSectionType2["SSO_SESSION"] = "sso-session";
  IniSectionType2["SERVICES"] = "services";
})(IniSectionType || (IniSectionType = {}));

// node_modules/@smithy/types/dist-es/response.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/retry.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/schema/schema.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/schema/sentinels.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/serde.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/shapes.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/signature.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/stream.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-common-types.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-input-types.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/streaming-payload/streaming-blob-payload-output-types.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/transfer.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var RequestHandlerProtocol;
(function(RequestHandlerProtocol2) {
  RequestHandlerProtocol2["HTTP_0_9"] = "http/0.9";
  RequestHandlerProtocol2["HTTP_1_0"] = "http/1.0";
  RequestHandlerProtocol2["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol || (RequestHandlerProtocol = {}));

// node_modules/@smithy/types/dist-es/transform/client-payload-blob-type-narrow.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/transform/mutable.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/transform/no-undefined.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/transform/type-transform.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/uri.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/util.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/types/dist-es/waiter.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/protocol-http/dist-es/Fields.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/protocol-http/dist-es/httpHandler.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/protocol-http/dist-es/httpRequest.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HttpRequest = class _HttpRequest {
  static {
    __name(this, "HttpRequest");
  }
  constructor(options) {
    this.method = options.method || "GET";
    this.hostname = options.hostname || "localhost";
    this.port = options.port;
    this.query = options.query || {};
    this.headers = options.headers || {};
    this.body = options.body;
    this.protocol = options.protocol ? options.protocol.slice(-1) !== ":" ? `${options.protocol}:` : options.protocol : "https:";
    this.path = options.path ? options.path.charAt(0) !== "/" ? `/${options.path}` : options.path : "/";
    this.username = options.username;
    this.password = options.password;
    this.fragment = options.fragment;
  }
  static clone(request) {
    const cloned = new _HttpRequest({
      ...request,
      headers: { ...request.headers }
    });
    if (cloned.query) {
      cloned.query = cloneQuery(cloned.query);
    }
    return cloned;
  }
  static isInstance(request) {
    if (!request) {
      return false;
    }
    const req = request;
    return "method" in req && "protocol" in req && "hostname" in req && "path" in req && typeof req["query"] === "object" && typeof req["headers"] === "object";
  }
  clone() {
    return _HttpRequest.clone(this);
  }
};
function cloneQuery(query) {
  return Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
      ...carry,
      [paramName]: Array.isArray(param) ? [...param] : param
    };
  }, {});
}
__name(cloneQuery, "cloneQuery");

// node_modules/@smithy/protocol-http/dist-es/httpResponse.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HttpResponse = class {
  static {
    __name(this, "HttpResponse");
  }
  constructor(options) {
    this.statusCode = options.statusCode;
    this.reason = options.reason;
    this.headers = options.headers || {};
    this.body = options.body;
  }
  static isInstance(response) {
    if (!response)
      return false;
    const resp = response;
    return typeof resp.statusCode === "number" && typeof resp.headers === "object";
  }
};

// node_modules/@smithy/protocol-http/dist-es/isValidHostname.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/protocol-http/dist-es/types.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
function resolveHostHeaderConfig(input) {
  return input;
}
__name(resolveHostHeaderConfig, "resolveHostHeaderConfig");
var hostHeaderMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
  if (!HttpRequest.isInstance(args.request))
    return next(args);
  const { request } = args;
  const { handlerProtocol = "" } = options.requestHandler.metadata || {};
  if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
    delete request.headers["host"];
    request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
  } else if (!request.headers["host"]) {
    let host = request.hostname;
    if (request.port != null)
      host += `:${request.port}`;
    request.headers["host"] = host;
  }
  return next(args);
}, "hostHeaderMiddleware");
var hostHeaderMiddlewareOptions = {
  name: "hostHeaderMiddleware",
  step: "build",
  priority: "low",
  tags: ["HOST"],
  override: true
};
var getHostHeaderPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
  }, "applyToStack")
}), "getHostHeaderPlugin");

// node_modules/@aws-sdk/middleware-logger/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var loggerMiddleware = /* @__PURE__ */ __name(() => (next, context2) => async (args) => {
  try {
    const response = await next(args);
    const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context2;
    const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context2.inputFilterSensitiveLog;
    const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context2.outputFilterSensitiveLog;
    const { $metadata, ...outputWithoutMetadata } = response.output;
    logger2?.info?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      output: outputFilterSensitiveLog(outputWithoutMetadata),
      metadata: $metadata
    });
    return response;
  } catch (error3) {
    const { clientName, commandName, logger: logger2, dynamoDbDocumentClientOptions = {} } = context2;
    const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
    const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context2.inputFilterSensitiveLog;
    logger2?.error?.({
      clientName,
      commandName,
      input: inputFilterSensitiveLog(args.input),
      error: error3,
      metadata: error3.$metadata
    });
    throw error3;
  }
}, "loggerMiddleware");
var loggerMiddlewareOptions = {
  name: "loggerMiddleware",
  tags: ["LOGGER"],
  step: "initialize",
  override: true
};
var getLoggerPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
  }, "applyToStack")
}), "getLoggerPlugin");

// node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
var ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
var ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
var recursionDetectionMiddleware = /* @__PURE__ */ __name((options) => (next) => async (args) => {
  const { request } = args;
  if (!HttpRequest.isInstance(request) || options.runtime !== "node") {
    return next(args);
  }
  const traceIdHeader = Object.keys(request.headers ?? {}).find((h3) => h3.toLowerCase() === TRACE_ID_HEADER_NAME.toLowerCase()) ?? TRACE_ID_HEADER_NAME;
  if (request.headers.hasOwnProperty(traceIdHeader)) {
    return next(args);
  }
  const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
  const traceId = process.env[ENV_TRACE_ID];
  const nonEmptyString = /* @__PURE__ */ __name((str) => typeof str === "string" && str.length > 0, "nonEmptyString");
  if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
    request.headers[TRACE_ID_HEADER_NAME] = traceId;
  }
  return next({
    ...args,
    request
  });
}, "recursionDetectionMiddleware");
var addRecursionDetectionMiddlewareOptions = {
  step: "build",
  tags: ["RECURSION_DETECTION"],
  name: "recursionDetectionMiddleware",
  override: true,
  priority: "low"
};
var getRecursionDetectionPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
  }, "applyToStack")
}), "getRecursionDetectionPlugin");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/getSmithyContext.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-middleware/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getSmithyContext = /* @__PURE__ */ __name((context2) => context2[SMITHY_CONTEXT_KEY] || (context2[SMITHY_CONTEXT_KEY] = {}), "getSmithyContext");

// node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var normalizeProvider = /* @__PURE__ */ __name((input) => {
  if (typeof input === "function")
    return input;
  const promisified = Promise.resolve(input);
  return () => promisified;
}, "normalizeProvider");

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/resolveAuthOptions.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var resolveAuthOptions = /* @__PURE__ */ __name((candidateAuthOptions, authSchemePreference) => {
  if (!authSchemePreference || authSchemePreference.length === 0) {
    return candidateAuthOptions;
  }
  const preferredAuthOptions = [];
  for (const preferredSchemeName of authSchemePreference) {
    for (const candidateAuthOption of candidateAuthOptions) {
      const candidateAuthSchemeName = candidateAuthOption.schemeId.split("#")[1];
      if (candidateAuthSchemeName === preferredSchemeName) {
        preferredAuthOptions.push(candidateAuthOption);
      }
    }
  }
  for (const candidateAuthOption of candidateAuthOptions) {
    if (!preferredAuthOptions.find(({ schemeId }) => schemeId === candidateAuthOption.schemeId)) {
      preferredAuthOptions.push(candidateAuthOption);
    }
  }
  return preferredAuthOptions;
}, "resolveAuthOptions");

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js
function convertHttpAuthSchemesToMap(httpAuthSchemes) {
  const map = /* @__PURE__ */ new Map();
  for (const scheme of httpAuthSchemes) {
    map.set(scheme.schemeId, scheme);
  }
  return map;
}
__name(convertHttpAuthSchemesToMap, "convertHttpAuthSchemesToMap");
var httpAuthSchemeMiddleware = /* @__PURE__ */ __name((config2, mwOptions) => (next, context2) => async (args) => {
  const options = config2.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config2, context2, args.input));
  const authSchemePreference = config2.authSchemePreference ? await config2.authSchemePreference() : [];
  const resolvedOptions = resolveAuthOptions(options, authSchemePreference);
  const authSchemes = convertHttpAuthSchemesToMap(config2.httpAuthSchemes);
  const smithyContext = getSmithyContext(context2);
  const failureReasons = [];
  for (const option of resolvedOptions) {
    const scheme = authSchemes.get(option.schemeId);
    if (!scheme) {
      failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
      continue;
    }
    const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config2));
    if (!identityProvider) {
      failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
      continue;
    }
    const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config2, context2) || {};
    option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
    option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
    smithyContext.selectedHttpAuthScheme = {
      httpAuthOption: option,
      identity: await identityProvider(option.identityProperties),
      signer: scheme.signer
    };
    break;
  }
  if (!smithyContext.selectedHttpAuthScheme) {
    throw new Error(failureReasons.join("\n"));
  }
  return next(args);
}, "httpAuthSchemeMiddleware");

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
  step: "serialize",
  tags: ["HTTP_AUTH_SCHEME"],
  name: "httpAuthSchemeMiddleware",
  override: true,
  relation: "before",
  toMiddleware: "endpointV2Middleware"
};
var getHttpAuthSchemeEndpointRuleSetPlugin = /* @__PURE__ */ __name((config2, { httpAuthSchemeParametersProvider, identityProviderConfigProvider }) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.addRelativeTo(httpAuthSchemeMiddleware(config2, {
      httpAuthSchemeParametersProvider,
      identityProviderConfigProvider
    }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
  }, "applyToStack")
}), "getHttpAuthSchemeEndpointRuleSetPlugin");

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-serde/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var deserializerMiddleware = /* @__PURE__ */ __name((options, deserializer) => (next, context2) => async (args) => {
  const { response } = await next(args);
  try {
    const parsed = await deserializer(response, options);
    return {
      response,
      output: parsed
    };
  } catch (error3) {
    Object.defineProperty(error3, "$response", {
      value: response
    });
    if (!("$metadata" in error3)) {
      const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
      try {
        error3.message += "\n  " + hint;
      } catch (e3) {
        if (!context2.logger || context2.logger?.constructor?.name === "NoOpLogger") {
          console.warn(hint);
        } else {
          context2.logger?.warn?.(hint);
        }
      }
      if (typeof error3.$responseBodyText !== "undefined") {
        if (error3.$response) {
          error3.$response.body = error3.$responseBodyText;
        }
      }
      try {
        if (HttpResponse.isInstance(response)) {
          const { headers = {} } = response;
          const headerEntries = Object.entries(headers);
          error3.$metadata = {
            httpStatusCode: response.statusCode,
            requestId: findHeader(/^x-[\w-]+-request-?id$/, headerEntries),
            extendedRequestId: findHeader(/^x-[\w-]+-id-2$/, headerEntries),
            cfId: findHeader(/^x-[\w-]+-cf-id$/, headerEntries)
          };
        }
      } catch (e3) {
      }
    }
    throw error3;
  }
}, "deserializerMiddleware");
var findHeader = /* @__PURE__ */ __name((pattern, headers) => {
  return (headers.find(([k3]) => {
    return k3.match(pattern);
  }) || [void 0, void 0])[1];
}, "findHeader");

// node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var serializerMiddleware = /* @__PURE__ */ __name((options, serializer) => (next, context2) => async (args) => {
  const endpointConfig = options;
  const endpoint = context2.endpointV2?.url && endpointConfig.urlParser ? async () => endpointConfig.urlParser(context2.endpointV2.url) : endpointConfig.endpoint;
  if (!endpoint) {
    throw new Error("No valid endpoint provider available.");
  }
  const request = await serializer(args.input, { ...options, endpoint });
  return next({
    ...args,
    request
  });
}, "serializerMiddleware");

// node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js
var deserializerMiddlewareOption = {
  name: "deserializerMiddleware",
  step: "deserialize",
  tags: ["DESERIALIZER"],
  override: true
};
var serializerMiddlewareOption = {
  name: "serializerMiddleware",
  step: "serialize",
  tags: ["SERIALIZER"],
  override: true
};
function getSerdePlugin(config2, serializer, deserializer) {
  return {
    applyToStack: /* @__PURE__ */ __name((commandStack) => {
      commandStack.add(deserializerMiddleware(config2, deserializer), deserializerMiddlewareOption);
      commandStack.add(serializerMiddleware(config2, serializer), serializerMiddlewareOption);
    }, "applyToStack")
  };
}
__name(getSerdePlugin, "getSerdePlugin");

// node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js
var httpAuthSchemeMiddlewareOptions = {
  step: "serialize",
  tags: ["HTTP_AUTH_SCHEME"],
  name: "httpAuthSchemeMiddleware",
  override: true,
  relation: "before",
  toMiddleware: serializerMiddlewareOption.name
};

// node_modules/@smithy/core/dist-es/middleware-http-signing/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var defaultErrorHandler = /* @__PURE__ */ __name((signingProperties) => (error3) => {
  throw error3;
}, "defaultErrorHandler");
var defaultSuccessHandler = /* @__PURE__ */ __name((httpResponse, signingProperties) => {
}, "defaultSuccessHandler");
var httpSigningMiddleware = /* @__PURE__ */ __name((config2) => (next, context2) => async (args) => {
  if (!HttpRequest.isInstance(args.request)) {
    return next(args);
  }
  const smithyContext = getSmithyContext(context2);
  const scheme = smithyContext.selectedHttpAuthScheme;
  if (!scheme) {
    throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
  }
  const { httpAuthOption: { signingProperties = {} }, identity, signer } = scheme;
  const output = await next({
    ...args,
    request: await signer.sign(args.request, identity, signingProperties)
  }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
  (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
  return output;
}, "httpSigningMiddleware");

// node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var httpSigningMiddlewareOptions = {
  step: "finalizeRequest",
  tags: ["HTTP_SIGNING"],
  name: "httpSigningMiddleware",
  aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
  override: true,
  relation: "after",
  toMiddleware: "retryMiddleware"
};
var getHttpSigningPlugin = /* @__PURE__ */ __name((config2) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.addRelativeTo(httpSigningMiddleware(config2), httpSigningMiddlewareOptions);
  }, "applyToStack")
}), "getHttpSigningPlugin");

// node_modules/@smithy/core/dist-es/normalizeProvider.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var normalizeProvider2 = /* @__PURE__ */ __name((input) => {
  if (typeof input === "function")
    return input;
  const promisified = Promise.resolve(input);
  return () => promisified;
}, "normalizeProvider");

// node_modules/@smithy/core/dist-es/pagination/createPaginator.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/protocols/requestBuilder.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/protocols/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/blob/transforms.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-base64/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-base64/dist-es/constants.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var alphabetByEncoding = {};
var alphabetByValue = new Array(64);
for (let i3 = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i3 + start <= limit; i3++) {
  const char = String.fromCharCode(i3 + start);
  alphabetByEncoding[char] = i3;
  alphabetByValue[i3] = char;
}
for (let i3 = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i3 + start <= limit; i3++) {
  const char = String.fromCharCode(i3 + start);
  const index = i3 + 26;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
for (let i3 = 0; i3 < 10; i3++) {
  alphabetByEncoding[i3.toString(10)] = i3 + 52;
  const char = i3.toString(10);
  const index = i3 + 52;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
alphabetByEncoding["+"] = 62;
alphabetByValue[62] = "+";
alphabetByEncoding["/"] = 63;
alphabetByValue[63] = "/";
var bitsPerLetter = 6;
var bitsPerByte = 8;
var maxLetterValue = 63;

// node_modules/@smithy/util-base64/dist-es/fromBase64.browser.js
var fromBase64 = /* @__PURE__ */ __name((input) => {
  let totalByteLength = input.length / 4 * 3;
  if (input.slice(-2) === "==") {
    totalByteLength -= 2;
  } else if (input.slice(-1) === "=") {
    totalByteLength--;
  }
  const out = new ArrayBuffer(totalByteLength);
  const dataView = new DataView(out);
  for (let i3 = 0; i3 < input.length; i3 += 4) {
    let bits = 0;
    let bitLength = 0;
    for (let j3 = i3, limit = i3 + 3; j3 <= limit; j3++) {
      if (input[j3] !== "=") {
        if (!(input[j3] in alphabetByEncoding)) {
          throw new TypeError(`Invalid character ${input[j3]} in base64 string.`);
        }
        bits |= alphabetByEncoding[input[j3]] << (limit - j3) * bitsPerLetter;
        bitLength += bitsPerLetter;
      } else {
        bits >>= bitsPerLetter;
      }
    }
    const chunkOffset = i3 / 4 * 3;
    bits >>= bitLength % bitsPerByte;
    const byteLength = Math.floor(bitLength / bitsPerByte);
    for (let k3 = 0; k3 < byteLength; k3++) {
      const offset = (byteLength - k3 - 1) * bitsPerByte;
      dataView.setUint8(chunkOffset + k3, (bits & 255 << offset) >> offset);
    }
  }
  return new Uint8Array(out);
}, "fromBase64");

// node_modules/@smithy/util-base64/dist-es/toBase64.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-utf8/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var fromUtf8 = /* @__PURE__ */ __name((input) => new TextEncoder().encode(input), "fromUtf8");

// node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var toUint8Array = /* @__PURE__ */ __name((data) => {
  if (typeof data === "string") {
    return fromUtf8(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}, "toUint8Array");

// node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var toUtf8 = /* @__PURE__ */ __name((input) => {
  if (typeof input === "string") {
    return input;
  }
  if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
    throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
  }
  return new TextDecoder("utf-8").decode(input);
}, "toUtf8");

// node_modules/@smithy/util-base64/dist-es/toBase64.browser.js
function toBase64(_input) {
  let input;
  if (typeof _input === "string") {
    input = fromUtf8(_input);
  } else {
    input = _input;
  }
  const isArrayLike = typeof input === "object" && typeof input.length === "number";
  const isUint8Array = typeof input === "object" && typeof input.byteOffset === "number" && typeof input.byteLength === "number";
  if (!isArrayLike && !isUint8Array) {
    throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
  }
  let str = "";
  for (let i3 = 0; i3 < input.length; i3 += 3) {
    let bits = 0;
    let bitLength = 0;
    for (let j3 = i3, limit = Math.min(i3 + 3, input.length); j3 < limit; j3++) {
      bits |= input[j3] << (limit - j3 - 1) * bitsPerByte;
      bitLength += bitsPerByte;
    }
    const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
    bits <<= bitClusterCount * bitsPerLetter - bitLength;
    for (let k3 = 1; k3 <= bitClusterCount; k3++) {
      const offset = (bitClusterCount - k3) * bitsPerLetter;
      str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
    }
    str += "==".slice(0, 4 - bitClusterCount);
  }
  return str;
}
__name(toBase64, "toBase64");

// node_modules/@smithy/util-stream/dist-es/blob/transforms.js
function transformToString(payload, encoding = "utf-8") {
  if (encoding === "base64") {
    return toBase64(payload);
  }
  return toUtf8(payload);
}
__name(transformToString, "transformToString");
function transformFromString(str, encoding) {
  if (encoding === "base64") {
    return Uint8ArrayBlobAdapter.mutate(fromBase64(str));
  }
  return Uint8ArrayBlobAdapter.mutate(fromUtf8(str));
}
__name(transformFromString, "transformFromString");

// node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js
var Uint8ArrayBlobAdapter = class _Uint8ArrayBlobAdapter extends Uint8Array {
  static {
    __name(this, "Uint8ArrayBlobAdapter");
  }
  static fromString(source, encoding = "utf-8") {
    switch (typeof source) {
      case "string":
        return transformFromString(source, encoding);
      default:
        throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
    }
  }
  static mutate(source) {
    Object.setPrototypeOf(source, _Uint8ArrayBlobAdapter.prototype);
    return source;
  }
  transformToString(encoding = "utf-8") {
    return transformToString(this, encoding);
  }
};

// node_modules/@smithy/util-stream/dist-es/checksum/ChecksumStream.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/checksum/createChecksumStream.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/stream-type-check.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/createBufferedReadableStream.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/ByteArrayCollector.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/headStream.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/fetch-http-handler/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/querystring-builder/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-uri-escape/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var escapeUri = /* @__PURE__ */ __name((uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode), "escapeUri");
var hexEncode = /* @__PURE__ */ __name((c3) => `%${c3.charCodeAt(0).toString(16).toUpperCase()}`, "hexEncode");

// node_modules/@smithy/util-uri-escape/dist-es/escape-uri-path.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/querystring-builder/dist-es/index.js
function buildQueryString(query) {
  const parts = [];
  for (let key of Object.keys(query).sort()) {
    const value = query[key];
    key = escapeUri(key);
    if (Array.isArray(value)) {
      for (let i3 = 0, iLen = value.length; i3 < iLen; i3++) {
        parts.push(`${key}=${escapeUri(value[i3])}`);
      }
    } else {
      let qsEntry = key;
      if (value || typeof value === "string") {
        qsEntry += `=${escapeUri(value)}`;
      }
      parts.push(qsEntry);
    }
  }
  return parts.join("&");
}
__name(buildQueryString, "buildQueryString");

// node_modules/@smithy/fetch-http-handler/dist-es/create-request.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function createRequest(url, requestOptions) {
  return new Request(url, requestOptions);
}
__name(createRequest, "createRequest");

// node_modules/@smithy/fetch-http-handler/dist-es/request-timeout.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function requestTimeout(timeoutInMs = 0) {
  return new Promise((resolve, reject) => {
    if (timeoutInMs) {
      setTimeout(() => {
        const timeoutError = new Error(`Request did not complete within ${timeoutInMs} ms`);
        timeoutError.name = "TimeoutError";
        reject(timeoutError);
      }, timeoutInMs);
    }
  });
}
__name(requestTimeout, "requestTimeout");

// node_modules/@smithy/fetch-http-handler/dist-es/fetch-http-handler.js
var keepAliveSupport = {
  supported: void 0
};
var FetchHttpHandler = class _FetchHttpHandler {
  static {
    __name(this, "FetchHttpHandler");
  }
  static create(instanceOrOptions) {
    if (typeof instanceOrOptions?.handle === "function") {
      return instanceOrOptions;
    }
    return new _FetchHttpHandler(instanceOrOptions);
  }
  constructor(options) {
    if (typeof options === "function") {
      this.configProvider = options().then((opts) => opts || {});
    } else {
      this.config = options ?? {};
      this.configProvider = Promise.resolve(this.config);
    }
    if (keepAliveSupport.supported === void 0) {
      keepAliveSupport.supported = Boolean(typeof Request !== "undefined" && "keepalive" in createRequest("https://[::1]"));
    }
  }
  destroy() {
  }
  async handle(request, { abortSignal } = {}) {
    if (!this.config) {
      this.config = await this.configProvider;
    }
    const requestTimeoutInMs = this.config.requestTimeout;
    const keepAlive = this.config.keepAlive === true;
    const credentials = this.config.credentials;
    if (abortSignal?.aborted) {
      const abortError = new Error("Request aborted");
      abortError.name = "AbortError";
      return Promise.reject(abortError);
    }
    let path = request.path;
    const queryString = buildQueryString(request.query || {});
    if (queryString) {
      path += `?${queryString}`;
    }
    if (request.fragment) {
      path += `#${request.fragment}`;
    }
    let auth = "";
    if (request.username != null || request.password != null) {
      const username = request.username ?? "";
      const password = request.password ?? "";
      auth = `${username}:${password}@`;
    }
    const { port, method } = request;
    const url = `${request.protocol}//${auth}${request.hostname}${port ? `:${port}` : ""}${path}`;
    const body = method === "GET" || method === "HEAD" ? void 0 : request.body;
    const requestOptions = {
      body,
      headers: new Headers(request.headers),
      method,
      credentials
    };
    if (this.config?.cache) {
      requestOptions.cache = this.config.cache;
    }
    if (body) {
      requestOptions.duplex = "half";
    }
    if (typeof AbortController !== "undefined") {
      requestOptions.signal = abortSignal;
    }
    if (keepAliveSupport.supported) {
      requestOptions.keepalive = keepAlive;
    }
    if (typeof this.config.requestInit === "function") {
      Object.assign(requestOptions, this.config.requestInit(request));
    }
    let removeSignalEventListener = /* @__PURE__ */ __name(() => {
    }, "removeSignalEventListener");
    const fetchRequest = createRequest(url, requestOptions);
    const raceOfPromises = [
      fetch(fetchRequest).then((response) => {
        const fetchHeaders = response.headers;
        const transformedHeaders = {};
        for (const pair of fetchHeaders.entries()) {
          transformedHeaders[pair[0]] = pair[1];
        }
        const hasReadableStream = response.body != void 0;
        if (!hasReadableStream) {
          return response.blob().then((body2) => ({
            response: new HttpResponse({
              headers: transformedHeaders,
              reason: response.statusText,
              statusCode: response.status,
              body: body2
            })
          }));
        }
        return {
          response: new HttpResponse({
            headers: transformedHeaders,
            reason: response.statusText,
            statusCode: response.status,
            body: response.body
          })
        };
      }),
      requestTimeout(requestTimeoutInMs)
    ];
    if (abortSignal) {
      raceOfPromises.push(new Promise((resolve, reject) => {
        const onAbort = /* @__PURE__ */ __name(() => {
          const abortError = new Error("Request aborted");
          abortError.name = "AbortError";
          reject(abortError);
        }, "onAbort");
        if (typeof abortSignal.addEventListener === "function") {
          const signal = abortSignal;
          signal.addEventListener("abort", onAbort, { once: true });
          removeSignalEventListener = /* @__PURE__ */ __name(() => signal.removeEventListener("abort", onAbort), "removeSignalEventListener");
        } else {
          abortSignal.onabort = onAbort;
        }
      }));
    }
    return Promise.race(raceOfPromises).finally(removeSignalEventListener);
  }
  updateHttpClientConfig(key, value) {
    this.config = void 0;
    this.configProvider = this.configProvider.then((config2) => {
      config2[key] = value;
      return config2;
    });
  }
  httpHandlerConfigs() {
    return this.config ?? {};
  }
};

// node_modules/@smithy/fetch-http-handler/dist-es/stream-collector.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var streamCollector = /* @__PURE__ */ __name(async (stream) => {
  if (typeof Blob === "function" && stream instanceof Blob || stream.constructor?.name === "Blob") {
    if (Blob.prototype.arrayBuffer !== void 0) {
      return new Uint8Array(await stream.arrayBuffer());
    }
    return collectBlob(stream);
  }
  return collectStream(stream);
}, "streamCollector");
async function collectBlob(blob) {
  const base64 = await readToBase64(blob);
  const arrayBuffer = fromBase64(base64);
  return new Uint8Array(arrayBuffer);
}
__name(collectBlob, "collectBlob");
async function collectStream(stream) {
  const chunks = [];
  const reader = stream.getReader();
  let isDone = false;
  let length = 0;
  while (!isDone) {
    const { done, value } = await reader.read();
    if (value) {
      chunks.push(value);
      length += value.length;
    }
    isDone = done;
  }
  const collected = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    collected.set(chunk, offset);
    offset += chunk.length;
  }
  return collected;
}
__name(collectStream, "collectStream");
function readToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState !== 2) {
        return reject(new Error("Reader aborted too early"));
      }
      const result = reader.result ?? "";
      const commaIndex = result.indexOf(",");
      const dataOffset = commaIndex > -1 ? commaIndex + 1 : result.length;
      resolve(result.substring(dataOffset));
    };
    reader.onabort = () => reject(new Error("Read aborted"));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}
__name(readToBase64, "readToBase64");

// node_modules/@smithy/util-hex-encoding/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SHORT_TO_HEX = {};
var HEX_TO_SHORT = {};
for (let i3 = 0; i3 < 256; i3++) {
  let encodedByte = i3.toString(16).toLowerCase();
  if (encodedByte.length === 1) {
    encodedByte = `0${encodedByte}`;
  }
  SHORT_TO_HEX[i3] = encodedByte;
  HEX_TO_SHORT[encodedByte] = i3;
}
function fromHex(encoded) {
  if (encoded.length % 2 !== 0) {
    throw new Error("Hex encoded strings must have an even number length");
  }
  const out = new Uint8Array(encoded.length / 2);
  for (let i3 = 0; i3 < encoded.length; i3 += 2) {
    const encodedByte = encoded.slice(i3, i3 + 2).toLowerCase();
    if (encodedByte in HEX_TO_SHORT) {
      out[i3 / 2] = HEX_TO_SHORT[encodedByte];
    } else {
      throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
    }
  }
  return out;
}
__name(fromHex, "fromHex");
function toHex(bytes) {
  let out = "";
  for (let i3 = 0; i3 < bytes.byteLength; i3++) {
    out += SHORT_TO_HEX[bytes[i3]];
  }
  return out;
}
__name(toHex, "toHex");

// node_modules/@smithy/util-stream/dist-es/splitStream.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/protocols/collect-stream-body.js
var collectBody = /* @__PURE__ */ __name(async (streamBody = new Uint8Array(), context2) => {
  if (streamBody instanceof Uint8Array) {
    return Uint8ArrayBlobAdapter.mutate(streamBody);
  }
  if (!streamBody) {
    return Uint8ArrayBlobAdapter.mutate(new Uint8Array());
  }
  const fromContext = context2.streamCollector(streamBody);
  return Uint8ArrayBlobAdapter.mutate(await fromContext);
}, "collectBody");

// node_modules/@smithy/core/dist-es/submodules/protocols/extended-encode-uri-component.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function extendedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c3) {
    return "%" + c3.charCodeAt(0).toString(16).toUpperCase();
  });
}
__name(extendedEncodeURIComponent, "extendedEncodeURIComponent");

// node_modules/@smithy/core/dist-es/submodules/protocols/requestBuilder.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/protocols/resolve-path.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/setFeature.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function setFeature(context2, feature, value) {
  if (!context2.__smithy_context) {
    context2.__smithy_context = {
      features: {}
    };
  } else if (!context2.__smithy_context.features) {
    context2.__smithy_context.features = {};
  }
  context2.__smithy_context.features[feature] = value;
}
__name(setFeature, "setFeature");

// node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DefaultIdentityProviderConfig = class {
  static {
    __name(this, "DefaultIdentityProviderConfig");
  }
  constructor(config2) {
    this.authSchemes = /* @__PURE__ */ new Map();
    for (const [key, value] of Object.entries(config2)) {
      if (value !== void 0) {
        this.authSchemes.set(key, value);
      }
    }
  }
  getIdentityProvider(schemeId) {
    return this.authSchemes.get(schemeId);
  }
};

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpBearerAuth.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var createIsIdentityExpiredFunction = /* @__PURE__ */ __name((expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs, "createIsIdentityExpiredFunction");
var EXPIRATION_MS = 3e5;
var isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
var doesIdentityRequireRefresh = /* @__PURE__ */ __name((identity) => identity.expiration !== void 0, "doesIdentityRequireRefresh");
var memoizeIdentityProvider = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
  if (provider === void 0) {
    return void 0;
  }
  const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = /* @__PURE__ */ __name(async (options) => {
    if (!pending) {
      pending = normalizedProvider(options);
    }
    try {
      resolved = await pending;
      hasResult = true;
      isConstant = false;
    } finally {
      pending = void 0;
    }
    return resolved;
  }, "coalesceProvider");
  if (isExpired === void 0) {
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider(options);
      }
      return resolved;
    };
  }
  return async (options) => {
    if (!hasResult || options?.forceRefresh) {
      resolved = await coalesceProvider(options);
    }
    if (isConstant) {
      return resolved;
    }
    if (!requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider(options);
      return resolved;
    }
    return resolved;
  };
}, "memoizeIdentityProvider");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
var DEFAULT_UA_APP_ID = void 0;
function isValidUserAgentAppId(appId) {
  if (appId === void 0) {
    return true;
  }
  return typeof appId === "string" && appId.length <= 50;
}
__name(isValidUserAgentAppId, "isValidUserAgentAppId");
function resolveUserAgentConfig(input) {
  const normalizedAppIdProvider = normalizeProvider2(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
  const { customUserAgent } = input;
  return Object.assign(input, {
    customUserAgent: typeof customUserAgent === "string" ? [[customUserAgent]] : customUserAgent,
    userAgentAppId: /* @__PURE__ */ __name(async () => {
      const appId = await normalizedAppIdProvider();
      if (!isValidUserAgentAppId(appId)) {
        const logger2 = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
        if (typeof appId !== "string") {
          logger2?.warn("userAgentAppId must be a string or undefined.");
        } else if (appId.length > 50) {
          logger2?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
        }
      }
      return appId;
    }, "userAgentAppId")
  });
}
__name(resolveUserAgentConfig, "resolveUserAgentConfig");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/cache/EndpointCache.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var EndpointCache = class {
  static {
    __name(this, "EndpointCache");
  }
  constructor({ size, params }) {
    this.data = /* @__PURE__ */ new Map();
    this.parameters = [];
    this.capacity = size ?? 50;
    if (params) {
      this.parameters = params;
    }
  }
  get(endpointParams, resolver) {
    const key = this.hash(endpointParams);
    if (key === false) {
      return resolver();
    }
    if (!this.data.has(key)) {
      if (this.data.size > this.capacity + 10) {
        const keys = this.data.keys();
        let i3 = 0;
        while (true) {
          const { value, done } = keys.next();
          this.data.delete(value);
          if (done || ++i3 > 10) {
            break;
          }
        }
      }
      this.data.set(key, resolver());
    }
    return this.data.get(key);
  }
  size() {
    return this.data.size;
  }
  hash(endpointParams) {
    let buffer = "";
    const { parameters } = this;
    if (parameters.length === 0) {
      return false;
    }
    for (const param of parameters) {
      const val2 = String(endpointParams[param] ?? "");
      if (val2.includes("|;")) {
        return false;
      }
      buffer += val2 + "|;";
    }
    return buffer;
  }
};

// node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
var isIpAddress = /* @__PURE__ */ __name((value) => IP_V4_REGEX.test(value) || value.startsWith("[") && value.endsWith("]"), "isIpAddress");

// node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
var isValidHostLabel = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
  if (!allowSubDomains) {
    return VALID_HOST_LABEL_REGEX.test(value);
  }
  const labels = value.split(".");
  for (const label of labels) {
    if (!isValidHostLabel(label)) {
      return false;
    }
  }
  return true;
}, "isValidHostLabel");

// node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var customEndpointFunctions = {};

// node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/debug/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var debugId = "endpoints";

// node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function toDebugString(input) {
  if (typeof input !== "object" || input == null) {
    return input;
  }
  if ("ref" in input) {
    return `$${toDebugString(input.ref)}`;
  }
  if ("fn" in input) {
    return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
  }
  return JSON.stringify(input, null, 2);
}
__name(toDebugString, "toDebugString");

// node_modules/@smithy/util-endpoints/dist-es/types/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var EndpointError = class extends Error {
  static {
    __name(this, "EndpointError");
  }
  constructor(message) {
    super(message);
    this.name = "EndpointError";
  }
};

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointFunctions.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/types/EndpointRuleObject.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/types/ErrorRuleObject.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/types/RuleSetObject.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/types/TreeRuleObject.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/types/shared.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/lib/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var booleanEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "booleanEquals");

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getAttrPathList = /* @__PURE__ */ __name((path) => {
  const parts = path.split(".");
  const pathList = [];
  for (const part of parts) {
    const squareBracketIndex = part.indexOf("[");
    if (squareBracketIndex !== -1) {
      if (part.indexOf("]") !== part.length - 1) {
        throw new EndpointError(`Path: '${path}' does not end with ']'`);
      }
      const arrayIndex = part.slice(squareBracketIndex + 1, -1);
      if (Number.isNaN(parseInt(arrayIndex))) {
        throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
      }
      if (squareBracketIndex !== 0) {
        pathList.push(part.slice(0, squareBracketIndex));
      }
      pathList.push(arrayIndex);
    } else {
      pathList.push(part);
    }
  }
  return pathList;
}, "getAttrPathList");

// node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js
var getAttr = /* @__PURE__ */ __name((value, path) => getAttrPathList(path).reduce((acc, index) => {
  if (typeof acc !== "object") {
    throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
  } else if (Array.isArray(acc)) {
    return acc[parseInt(index)];
  }
  return acc[index];
}, value), "getAttr");

// node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var isSet = /* @__PURE__ */ __name((value) => value != null, "isSet");

// node_modules/@smithy/util-endpoints/dist-es/lib/not.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var not = /* @__PURE__ */ __name((value) => !value, "not");

// node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_PORTS = {
  [EndpointURLScheme.HTTP]: 80,
  [EndpointURLScheme.HTTPS]: 443
};
var parseURL = /* @__PURE__ */ __name((value) => {
  const whatwgURL = (() => {
    try {
      if (value instanceof URL) {
        return value;
      }
      if (typeof value === "object" && "hostname" in value) {
        const { hostname: hostname2, port, protocol: protocol2 = "", path = "", query = {} } = value;
        const url = new URL(`${protocol2}//${hostname2}${port ? `:${port}` : ""}${path}`);
        url.search = Object.entries(query).map(([k3, v3]) => `${k3}=${v3}`).join("&");
        return url;
      }
      return new URL(value);
    } catch (error3) {
      return null;
    }
  })();
  if (!whatwgURL) {
    console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
    return null;
  }
  const urlString = whatwgURL.href;
  const { host, hostname, pathname, protocol, search } = whatwgURL;
  if (search) {
    return null;
  }
  const scheme = protocol.slice(0, -1);
  if (!Object.values(EndpointURLScheme).includes(scheme)) {
    return null;
  }
  const isIp = isIpAddress(hostname);
  const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) || typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`);
  const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
  return {
    scheme,
    authority,
    path: pathname,
    normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
    isIp
  };
}, "parseURL");

// node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var stringEquals = /* @__PURE__ */ __name((value1, value2) => value1 === value2, "stringEquals");

// node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var substring = /* @__PURE__ */ __name((input, start, stop, reverse) => {
  if (start >= stop || input.length < stop) {
    return null;
  }
  if (!reverse) {
    return input.substring(start, stop);
  }
  return input.substring(input.length - stop, input.length - start);
}, "substring");

// node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var uriEncode = /* @__PURE__ */ __name((value) => encodeURIComponent(value).replace(/[!*'()]/g, (c3) => `%${c3.charCodeAt(0).toString(16).toUpperCase()}`), "uriEncode");

// node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js
var endpointFunctions = {
  booleanEquals,
  getAttr,
  isSet,
  isValidHostLabel,
  not,
  parseURL,
  stringEquals,
  substring,
  uriEncode
};

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var evaluateTemplate = /* @__PURE__ */ __name((template, options) => {
  const evaluatedTemplateArr = [];
  const templateContext = {
    ...options.endpointParams,
    ...options.referenceRecord
  };
  let currentIndex = 0;
  while (currentIndex < template.length) {
    const openingBraceIndex = template.indexOf("{", currentIndex);
    if (openingBraceIndex === -1) {
      evaluatedTemplateArr.push(template.slice(currentIndex));
      break;
    }
    evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
    const closingBraceIndex = template.indexOf("}", openingBraceIndex);
    if (closingBraceIndex === -1) {
      evaluatedTemplateArr.push(template.slice(openingBraceIndex));
      break;
    }
    if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
      evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
      currentIndex = closingBraceIndex + 2;
    }
    const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
    if (parameterName.includes("#")) {
      const [refName, attrName] = parameterName.split("#");
      evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
    } else {
      evaluatedTemplateArr.push(templateContext[parameterName]);
    }
    currentIndex = closingBraceIndex + 1;
  }
  return evaluatedTemplateArr.join("");
}, "evaluateTemplate");

// node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getReferenceValue = /* @__PURE__ */ __name(({ ref }, options) => {
  const referenceRecord = {
    ...options.endpointParams,
    ...options.referenceRecord
  };
  return referenceRecord[ref];
}, "getReferenceValue");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js
var evaluateExpression = /* @__PURE__ */ __name((obj, keyName, options) => {
  if (typeof obj === "string") {
    return evaluateTemplate(obj, options);
  } else if (obj["fn"]) {
    return callFunction(obj, options);
  } else if (obj["ref"]) {
    return getReferenceValue(obj, options);
  }
  throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
}, "evaluateExpression");

// node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js
var callFunction = /* @__PURE__ */ __name(({ fn, argv: argv2 }, options) => {
  const evaluatedArgs = argv2.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
  const fnSegments = fn.split(".");
  if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
    return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
  }
  return endpointFunctions[fn](...evaluatedArgs);
}, "callFunction");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js
var evaluateCondition = /* @__PURE__ */ __name(({ assign, ...fnArgs }, options) => {
  if (assign && assign in options.referenceRecord) {
    throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
  }
  const value = callFunction(fnArgs, options);
  options.logger?.debug?.(`${debugId} evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
  return {
    result: value === "" ? true : !!value,
    ...assign != null && { toAssign: { name: assign, value } }
  };
}, "evaluateCondition");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js
var evaluateConditions = /* @__PURE__ */ __name((conditions = [], options) => {
  const conditionsReferenceRecord = {};
  for (const condition of conditions) {
    const { result, toAssign } = evaluateCondition(condition, {
      ...options,
      referenceRecord: {
        ...options.referenceRecord,
        ...conditionsReferenceRecord
      }
    });
    if (!result) {
      return { result };
    }
    if (toAssign) {
      conditionsReferenceRecord[toAssign.name] = toAssign.value;
      options.logger?.debug?.(`${debugId} assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
    }
  }
  return { result: true, referenceRecord: conditionsReferenceRecord };
}, "evaluateConditions");

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getEndpointHeaders = /* @__PURE__ */ __name((headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
  ...acc,
  [headerKey]: headerVal.map((headerValEntry) => {
    const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
    if (typeof processedExpr !== "string") {
      throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
    }
    return processedExpr;
  })
}), {}), "getEndpointHeaders");

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getEndpointProperty = /* @__PURE__ */ __name((property, options) => {
  if (Array.isArray(property)) {
    return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
  }
  switch (typeof property) {
    case "string":
      return evaluateTemplate(property, options);
    case "object":
      if (property === null) {
        throw new EndpointError(`Unexpected endpoint property: ${property}`);
      }
      return getEndpointProperties(property, options);
    case "boolean":
      return property;
    default:
      throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
  }
}, "getEndpointProperty");

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js
var getEndpointProperties = /* @__PURE__ */ __name((properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
  ...acc,
  [propertyKey]: getEndpointProperty(propertyVal, options)
}), {}), "getEndpointProperties");

// node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getEndpointUrl = /* @__PURE__ */ __name((endpointUrl, options) => {
  const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
  if (typeof expression === "string") {
    try {
      return new URL(expression);
    } catch (error3) {
      console.error(`Failed to construct URL with ${expression}`, error3);
      throw error3;
    }
  }
  throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
}, "getEndpointUrl");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js
var evaluateEndpointRule = /* @__PURE__ */ __name((endpointRule, options) => {
  const { conditions, endpoint } = endpointRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  const endpointRuleOptions = {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  };
  const { url, properties, headers } = endpoint;
  options.logger?.debug?.(`${debugId} Resolving endpoint from template: ${toDebugString(endpoint)}`);
  return {
    ...headers != void 0 && {
      headers: getEndpointHeaders(headers, endpointRuleOptions)
    },
    ...properties != void 0 && {
      properties: getEndpointProperties(properties, endpointRuleOptions)
    },
    url: getEndpointUrl(url, endpointRuleOptions)
  };
}, "evaluateEndpointRule");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var evaluateErrorRule = /* @__PURE__ */ __name((errorRule, options) => {
  const { conditions, error: error3 } = errorRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  throw new EndpointError(evaluateExpression(error3, "Error", {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  }));
}, "evaluateErrorRule");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var evaluateTreeRule = /* @__PURE__ */ __name((treeRule, options) => {
  const { conditions, rules } = treeRule;
  const { result, referenceRecord } = evaluateConditions(conditions, options);
  if (!result) {
    return;
  }
  return evaluateRules(rules, {
    ...options,
    referenceRecord: { ...options.referenceRecord, ...referenceRecord }
  });
}, "evaluateTreeRule");

// node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js
var evaluateRules = /* @__PURE__ */ __name((rules, options) => {
  for (const rule of rules) {
    if (rule.type === "endpoint") {
      const endpointOrUndefined = evaluateEndpointRule(rule, options);
      if (endpointOrUndefined) {
        return endpointOrUndefined;
      }
    } else if (rule.type === "error") {
      evaluateErrorRule(rule, options);
    } else if (rule.type === "tree") {
      const endpointOrUndefined = evaluateTreeRule(rule, options);
      if (endpointOrUndefined) {
        return endpointOrUndefined;
      }
    } else {
      throw new EndpointError(`Unknown endpoint rule: ${rule}`);
    }
  }
  throw new EndpointError(`Rules evaluation failed`);
}, "evaluateRules");

// node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js
var resolveEndpoint = /* @__PURE__ */ __name((ruleSetObject, options) => {
  const { endpointParams, logger: logger2 } = options;
  const { parameters, rules } = ruleSetObject;
  options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
  const paramsWithDefault = Object.entries(parameters).filter(([, v3]) => v3.default != null).map(([k3, v3]) => [k3, v3.default]);
  if (paramsWithDefault.length > 0) {
    for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
      endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
    }
  }
  const requiredParams = Object.entries(parameters).filter(([, v3]) => v3.required).map(([k3]) => k3);
  for (const requiredParam of requiredParams) {
    if (endpointParams[requiredParam] == null) {
      throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
    }
  }
  const endpoint = evaluateRules(rules, { endpointParams, logger: logger2, referenceRecord: {} });
  options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
  return endpoint;
}, "resolveEndpoint");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js
var isVirtualHostableS3Bucket = /* @__PURE__ */ __name((value, allowSubDomains = false) => {
  if (allowSubDomains) {
    for (const label of value.split(".")) {
      if (!isVirtualHostableS3Bucket(label)) {
        return false;
      }
    }
    return true;
  }
  if (!isValidHostLabel(value)) {
    return false;
  }
  if (value.length < 3 || value.length > 63) {
    return false;
  }
  if (value !== value.toLowerCase()) {
    return false;
  }
  if (isIpAddress(value)) {
    return false;
  }
  return true;
}, "isVirtualHostableS3Bucket");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ARN_DELIMITER = ":";
var RESOURCE_DELIMITER = "/";
var parseArn = /* @__PURE__ */ __name((value) => {
  const segments = value.split(ARN_DELIMITER);
  if (segments.length < 6)
    return null;
  const [arn, partition2, service, region, accountId, ...resourcePath] = segments;
  if (arn !== "arn" || partition2 === "" || service === "" || resourcePath.join(ARN_DELIMITER) === "")
    return null;
  const resourceId = resourcePath.map((resource) => resource.split(RESOURCE_DELIMITER)).flat();
  return {
    partition: partition2,
    service,
    region,
    accountId,
    resourceId
  };
}, "parseArn");

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
var partitions_default = {
  partitions: [{
    id: "aws",
    outputs: {
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      implicitGlobalRegion: "us-east-1",
      name: "aws",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^(us|eu|ap|sa|ca|me|af|il|mx)\\-\\w+\\-\\d+$",
    regions: {
      "af-south-1": {
        description: "Africa (Cape Town)"
      },
      "ap-east-1": {
        description: "Asia Pacific (Hong Kong)"
      },
      "ap-northeast-1": {
        description: "Asia Pacific (Tokyo)"
      },
      "ap-northeast-2": {
        description: "Asia Pacific (Seoul)"
      },
      "ap-northeast-3": {
        description: "Asia Pacific (Osaka)"
      },
      "ap-south-1": {
        description: "Asia Pacific (Mumbai)"
      },
      "ap-south-2": {
        description: "Asia Pacific (Hyderabad)"
      },
      "ap-southeast-1": {
        description: "Asia Pacific (Singapore)"
      },
      "ap-southeast-2": {
        description: "Asia Pacific (Sydney)"
      },
      "ap-southeast-3": {
        description: "Asia Pacific (Jakarta)"
      },
      "ap-southeast-4": {
        description: "Asia Pacific (Melbourne)"
      },
      "ap-southeast-5": {
        description: "Asia Pacific (Malaysia)"
      },
      "ap-southeast-7": {
        description: "Asia Pacific (Thailand)"
      },
      "aws-global": {
        description: "AWS Standard global region"
      },
      "ca-central-1": {
        description: "Canada (Central)"
      },
      "ca-west-1": {
        description: "Canada West (Calgary)"
      },
      "eu-central-1": {
        description: "Europe (Frankfurt)"
      },
      "eu-central-2": {
        description: "Europe (Zurich)"
      },
      "eu-north-1": {
        description: "Europe (Stockholm)"
      },
      "eu-south-1": {
        description: "Europe (Milan)"
      },
      "eu-south-2": {
        description: "Europe (Spain)"
      },
      "eu-west-1": {
        description: "Europe (Ireland)"
      },
      "eu-west-2": {
        description: "Europe (London)"
      },
      "eu-west-3": {
        description: "Europe (Paris)"
      },
      "il-central-1": {
        description: "Israel (Tel Aviv)"
      },
      "me-central-1": {
        description: "Middle East (UAE)"
      },
      "me-south-1": {
        description: "Middle East (Bahrain)"
      },
      "mx-central-1": {
        description: "Mexico (Central)"
      },
      "sa-east-1": {
        description: "South America (Sao Paulo)"
      },
      "us-east-1": {
        description: "US East (N. Virginia)"
      },
      "us-east-2": {
        description: "US East (Ohio)"
      },
      "us-west-1": {
        description: "US West (N. California)"
      },
      "us-west-2": {
        description: "US West (Oregon)"
      }
    }
  }, {
    id: "aws-cn",
    outputs: {
      dnsSuffix: "amazonaws.com.cn",
      dualStackDnsSuffix: "api.amazonwebservices.com.cn",
      implicitGlobalRegion: "cn-northwest-1",
      name: "aws-cn",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^cn\\-\\w+\\-\\d+$",
    regions: {
      "aws-cn-global": {
        description: "AWS China global region"
      },
      "cn-north-1": {
        description: "China (Beijing)"
      },
      "cn-northwest-1": {
        description: "China (Ningxia)"
      }
    }
  }, {
    id: "aws-us-gov",
    outputs: {
      dnsSuffix: "amazonaws.com",
      dualStackDnsSuffix: "api.aws",
      implicitGlobalRegion: "us-gov-west-1",
      name: "aws-us-gov",
      supportsDualStack: true,
      supportsFIPS: true
    },
    regionRegex: "^us\\-gov\\-\\w+\\-\\d+$",
    regions: {
      "aws-us-gov-global": {
        description: "AWS GovCloud (US) global region"
      },
      "us-gov-east-1": {
        description: "AWS GovCloud (US-East)"
      },
      "us-gov-west-1": {
        description: "AWS GovCloud (US-West)"
      }
    }
  }, {
    id: "aws-iso",
    outputs: {
      dnsSuffix: "c2s.ic.gov",
      dualStackDnsSuffix: "c2s.ic.gov",
      implicitGlobalRegion: "us-iso-east-1",
      name: "aws-iso",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-iso\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-global": {
        description: "AWS ISO (US) global region"
      },
      "us-iso-east-1": {
        description: "US ISO East"
      },
      "us-iso-west-1": {
        description: "US ISO WEST"
      }
    }
  }, {
    id: "aws-iso-b",
    outputs: {
      dnsSuffix: "sc2s.sgov.gov",
      dualStackDnsSuffix: "sc2s.sgov.gov",
      implicitGlobalRegion: "us-isob-east-1",
      name: "aws-iso-b",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-isob\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-b-global": {
        description: "AWS ISOB (US) global region"
      },
      "us-isob-east-1": {
        description: "US ISOB East (Ohio)"
      }
    }
  }, {
    id: "aws-iso-e",
    outputs: {
      dnsSuffix: "cloud.adc-e.uk",
      dualStackDnsSuffix: "cloud.adc-e.uk",
      implicitGlobalRegion: "eu-isoe-west-1",
      name: "aws-iso-e",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^eu\\-isoe\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-e-global": {
        description: "AWS ISOE (Europe) global region"
      },
      "eu-isoe-west-1": {
        description: "EU ISOE West"
      }
    }
  }, {
    id: "aws-iso-f",
    outputs: {
      dnsSuffix: "csp.hci.ic.gov",
      dualStackDnsSuffix: "csp.hci.ic.gov",
      implicitGlobalRegion: "us-isof-south-1",
      name: "aws-iso-f",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^us\\-isof\\-\\w+\\-\\d+$",
    regions: {
      "aws-iso-f-global": {
        description: "AWS ISOF global region"
      },
      "us-isof-east-1": {
        description: "US ISOF EAST"
      },
      "us-isof-south-1": {
        description: "US ISOF SOUTH"
      }
    }
  }, {
    id: "aws-eusc",
    outputs: {
      dnsSuffix: "amazonaws.eu",
      dualStackDnsSuffix: "amazonaws.eu",
      implicitGlobalRegion: "eusc-de-east-1",
      name: "aws-eusc",
      supportsDualStack: false,
      supportsFIPS: true
    },
    regionRegex: "^eusc\\-(de)\\-\\w+\\-\\d+$",
    regions: {
      "eusc-de-east-1": {
        description: "EU (Germany)"
      }
    }
  }],
  version: "1.1"
};

// node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js
var selectedPartitionsInfo = partitions_default;
var selectedUserAgentPrefix = "";
var partition = /* @__PURE__ */ __name((value) => {
  const { partitions } = selectedPartitionsInfo;
  for (const partition2 of partitions) {
    const { regions, outputs } = partition2;
    for (const [region, regionData] of Object.entries(regions)) {
      if (region === value) {
        return {
          ...outputs,
          ...regionData
        };
      }
    }
  }
  for (const partition2 of partitions) {
    const { regionRegex, outputs } = partition2;
    if (new RegExp(regionRegex).test(value)) {
      return {
        ...outputs
      };
    }
  }
  const DEFAULT_PARTITION = partitions.find((partition2) => partition2.id === "aws");
  if (!DEFAULT_PARTITION) {
    throw new Error("Provided region was not found in the partition array or regex, and default partition with id 'aws' doesn't exist.");
  }
  return {
    ...DEFAULT_PARTITION.outputs
  };
}, "partition");
var getUserAgentPrefix = /* @__PURE__ */ __name(() => selectedUserAgentPrefix, "getUserAgentPrefix");

// node_modules/@aws-sdk/util-endpoints/dist-es/aws.js
var awsEndpointFunctions = {
  isVirtualHostableS3Bucket,
  parseArn,
  partition
};
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointRuleObject.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/ErrorRuleObject.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/RuleSetObject.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/TreeRuleObject.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/util-endpoints/dist-es/types/shared.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/client/setCredentialFeature.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function setCredentialFeature(credentials, feature, value) {
  if (!credentials.$source) {
    credentials.$source = {};
  }
  credentials.$source[feature] = value;
  return credentials;
}
__name(setCredentialFeature, "setCredentialFeature");

// node_modules/@aws-sdk/core/dist-es/submodules/client/setFeature.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function setFeature2(context2, feature, value) {
  if (!context2.__aws_sdk_context) {
    context2.__aws_sdk_context = {
      features: {}
    };
  } else if (!context2.__aws_sdk_context.features) {
    context2.__aws_sdk_context.features = {};
  }
  context2.__aws_sdk_context.features[feature] = value;
}
__name(setFeature2, "setFeature");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getDateHeader.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getDateHeader = /* @__PURE__ */ __name((response) => HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : void 0, "getDateHeader");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getSkewCorrectedDate.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getSkewCorrectedDate = /* @__PURE__ */ __name((systemClockOffset) => new Date(Date.now() + systemClockOffset), "getSkewCorrectedDate");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/isClockSkewed.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var isClockSkewed = /* @__PURE__ */ __name((clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 3e5, "isClockSkewed");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js
var getUpdatedSystemClockOffset = /* @__PURE__ */ __name((clockTime, currentSystemClockOffset) => {
  const clockTimeInMs = Date.parse(clockTime);
  if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
    return clockTimeInMs - Date.now();
  }
  return currentSystemClockOffset;
}, "getUpdatedSystemClockOffset");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js
var throwSigningPropertyError = /* @__PURE__ */ __name((name, property) => {
  if (!property) {
    throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
  }
  return property;
}, "throwSigningPropertyError");
var validateSigningProperties = /* @__PURE__ */ __name(async (signingProperties) => {
  const context2 = throwSigningPropertyError("context", signingProperties.context);
  const config2 = throwSigningPropertyError("config", signingProperties.config);
  const authScheme = context2.endpointV2?.properties?.authSchemes?.[0];
  const signerFunction = throwSigningPropertyError("signer", config2.signer);
  const signer = await signerFunction(authScheme);
  const signingRegion = signingProperties?.signingRegion;
  const signingRegionSet = signingProperties?.signingRegionSet;
  const signingName = signingProperties?.signingName;
  return {
    config: config2,
    signer,
    signingRegion,
    signingRegionSet,
    signingName
  };
}, "validateSigningProperties");
var AwsSdkSigV4Signer = class {
  static {
    __name(this, "AwsSdkSigV4Signer");
  }
  async sign(httpRequest, identity, signingProperties) {
    if (!HttpRequest.isInstance(httpRequest)) {
      throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
    }
    const validatedProps = await validateSigningProperties(signingProperties);
    const { config: config2, signer } = validatedProps;
    let { signingRegion, signingName } = validatedProps;
    const handlerExecutionContext = signingProperties.context;
    if (handlerExecutionContext?.authSchemes?.length ?? 0 > 1) {
      const [first, second] = handlerExecutionContext.authSchemes;
      if (first?.name === "sigv4a" && second?.name === "sigv4") {
        signingRegion = second?.signingRegion ?? signingRegion;
        signingName = second?.signingName ?? signingName;
      }
    }
    const signedRequest = await signer.sign(httpRequest, {
      signingDate: getSkewCorrectedDate(config2.systemClockOffset),
      signingRegion,
      signingService: signingName
    });
    return signedRequest;
  }
  errorHandler(signingProperties) {
    return (error3) => {
      const serverTime = error3.ServerTime ?? getDateHeader(error3.$response);
      if (serverTime) {
        const config2 = throwSigningPropertyError("config", signingProperties.config);
        const initialSystemClockOffset = config2.systemClockOffset;
        config2.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config2.systemClockOffset);
        const clockSkewCorrected = config2.systemClockOffset !== initialSystemClockOffset;
        if (clockSkewCorrected && error3.$metadata) {
          error3.$metadata.clockSkewCorrected = true;
        }
      }
      throw error3;
    };
  }
  successHandler(httpResponse, signingProperties) {
    const dateHeader = getDateHeader(httpResponse);
    if (dateHeader) {
      const config2 = throwSigningPropertyError("config", signingProperties.config);
      config2.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config2.systemClockOffset);
    }
  }
};

// node_modules/@smithy/property-provider/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/property-provider/dist-es/ProviderError.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/property-provider/dist-es/TokenProviderError.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/property-provider/dist-es/chain.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/property-provider/dist-es/fromStatic.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/property-provider/dist-es/memoize.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var memoize = /* @__PURE__ */ __name((provider, isExpired, requiresRefresh) => {
  let resolved;
  let pending;
  let hasResult;
  let isConstant = false;
  const coalesceProvider = /* @__PURE__ */ __name(async () => {
    if (!pending) {
      pending = provider();
    }
    try {
      resolved = await pending;
      hasResult = true;
      isConstant = false;
    } finally {
      pending = void 0;
    }
    return resolved;
  }, "coalesceProvider");
  if (isExpired === void 0) {
    return async (options) => {
      if (!hasResult || options?.forceRefresh) {
        resolved = await coalesceProvider();
      }
      return resolved;
    };
  }
  return async (options) => {
    if (!hasResult || options?.forceRefresh) {
      resolved = await coalesceProvider();
    }
    if (isConstant) {
      return resolved;
    }
    if (requiresRefresh && !requiresRefresh(resolved)) {
      isConstant = true;
      return resolved;
    }
    if (isExpired(resolved)) {
      await coalesceProvider();
      return resolved;
    }
    return resolved;
  };
}, "memoize");

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/signature-v4/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/signature-v4/dist-es/constants.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
var CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
var AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
var SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
var EXPIRES_QUERY_PARAM = "X-Amz-Expires";
var SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
var TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
var AUTH_HEADER = "authorization";
var AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
var DATE_HEADER = "date";
var GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
var SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
var SHA256_HEADER = "x-amz-content-sha256";
var TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
var ALWAYS_UNSIGNABLE_HEADERS = {
  authorization: true,
  "cache-control": true,
  connection: true,
  expect: true,
  from: true,
  "keep-alive": true,
  "max-forwards": true,
  pragma: true,
  referer: true,
  te: true,
  trailer: true,
  "transfer-encoding": true,
  upgrade: true,
  "user-agent": true,
  "x-amzn-trace-id": true
};
var PROXY_HEADER_PATTERN = /^proxy-/;
var SEC_HEADER_PATTERN = /^sec-/;
var ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
var EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
var UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
var MAX_CACHE_SIZE = 50;
var KEY_TYPE_IDENTIFIER = "aws4_request";
var MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

// node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var signingKeyCache = {};
var cacheQueue = [];
var createScope = /* @__PURE__ */ __name((shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`, "createScope");
var getSigningKey = /* @__PURE__ */ __name(async (sha256Constructor, credentials, shortDate, region, service) => {
  const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
  const cacheKey = `${shortDate}:${region}:${service}:${toHex(credsHash)}:${credentials.sessionToken}`;
  if (cacheKey in signingKeyCache) {
    return signingKeyCache[cacheKey];
  }
  cacheQueue.push(cacheKey);
  while (cacheQueue.length > MAX_CACHE_SIZE) {
    delete signingKeyCache[cacheQueue.shift()];
  }
  let key = `AWS4${credentials.secretAccessKey}`;
  for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
    key = await hmac(sha256Constructor, key, signable);
  }
  return signingKeyCache[cacheKey] = key;
}, "getSigningKey");
var hmac = /* @__PURE__ */ __name((ctor, secret, data) => {
  const hash = new ctor(secret);
  hash.update(toUint8Array(data));
  return hash.digest();
}, "hmac");

// node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getCanonicalHeaders = /* @__PURE__ */ __name(({ headers }, unsignableHeaders, signableHeaders) => {
  const canonical = {};
  for (const headerName of Object.keys(headers).sort()) {
    if (headers[headerName] == void 0) {
      continue;
    }
    const canonicalHeaderName = headerName.toLowerCase();
    if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS || unsignableHeaders?.has(canonicalHeaderName) || PROXY_HEADER_PATTERN.test(canonicalHeaderName) || SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
      if (!signableHeaders || signableHeaders && !signableHeaders.has(canonicalHeaderName)) {
        continue;
      }
    }
    canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
  }
  return canonical;
}, "getCanonicalHeaders");

// node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/is-array-buffer/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var isArrayBuffer = /* @__PURE__ */ __name((arg) => typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer || Object.prototype.toString.call(arg) === "[object ArrayBuffer]", "isArrayBuffer");

// node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js
var getPayloadHash = /* @__PURE__ */ __name(async ({ headers, body }, hashConstructor) => {
  for (const headerName of Object.keys(headers)) {
    if (headerName.toLowerCase() === SHA256_HEADER) {
      return headers[headerName];
    }
  }
  if (body == void 0) {
    return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  } else if (typeof body === "string" || ArrayBuffer.isView(body) || isArrayBuffer(body)) {
    const hashCtor = new hashConstructor();
    hashCtor.update(toUint8Array(body));
    return toHex(await hashCtor.digest());
  }
  return UNSIGNED_PAYLOAD;
}, "getPayloadHash");

// node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var HeaderFormatter = class {
  static {
    __name(this, "HeaderFormatter");
  }
  format(headers) {
    const chunks = [];
    for (const headerName of Object.keys(headers)) {
      const bytes = fromUtf8(headerName);
      chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
    }
    const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
    let position = 0;
    for (const chunk of chunks) {
      out.set(chunk, position);
      position += chunk.byteLength;
    }
    return out;
  }
  formatHeaderValue(header) {
    switch (header.type) {
      case "boolean":
        return Uint8Array.from([header.value ? 0 : 1]);
      case "byte":
        return Uint8Array.from([2, header.value]);
      case "short":
        const shortView = new DataView(new ArrayBuffer(3));
        shortView.setUint8(0, 3);
        shortView.setInt16(1, header.value, false);
        return new Uint8Array(shortView.buffer);
      case "integer":
        const intView = new DataView(new ArrayBuffer(5));
        intView.setUint8(0, 4);
        intView.setInt32(1, header.value, false);
        return new Uint8Array(intView.buffer);
      case "long":
        const longBytes = new Uint8Array(9);
        longBytes[0] = 5;
        longBytes.set(header.value.bytes, 1);
        return longBytes;
      case "binary":
        const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
        binView.setUint8(0, 6);
        binView.setUint16(1, header.value.byteLength, false);
        const binBytes = new Uint8Array(binView.buffer);
        binBytes.set(header.value, 3);
        return binBytes;
      case "string":
        const utf8Bytes = fromUtf8(header.value);
        const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
        strView.setUint8(0, 7);
        strView.setUint16(1, utf8Bytes.byteLength, false);
        const strBytes = new Uint8Array(strView.buffer);
        strBytes.set(utf8Bytes, 3);
        return strBytes;
      case "timestamp":
        const tsBytes = new Uint8Array(9);
        tsBytes[0] = 8;
        tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
        return tsBytes;
      case "uuid":
        if (!UUID_PATTERN.test(header.value)) {
          throw new Error(`Invalid UUID received: ${header.value}`);
        }
        const uuidBytes = new Uint8Array(17);
        uuidBytes[0] = 9;
        uuidBytes.set(fromHex(header.value.replace(/\-/g, "")), 1);
        return uuidBytes;
    }
  }
};
var HEADER_VALUE_TYPE;
(function(HEADER_VALUE_TYPE2) {
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolTrue"] = 0] = "boolTrue";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["boolFalse"] = 1] = "boolFalse";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byte"] = 2] = "byte";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["short"] = 3] = "short";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["integer"] = 4] = "integer";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["long"] = 5] = "long";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["byteArray"] = 6] = "byteArray";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["string"] = 7] = "string";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["timestamp"] = 8] = "timestamp";
  HEADER_VALUE_TYPE2[HEADER_VALUE_TYPE2["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
var UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
var Int64 = class _Int64 {
  static {
    __name(this, "Int64");
  }
  constructor(bytes) {
    this.bytes = bytes;
    if (bytes.byteLength !== 8) {
      throw new Error("Int64 buffers must be exactly 8 bytes");
    }
  }
  static fromNumber(number) {
    if (number > 9223372036854776e3 || number < -9223372036854776e3) {
      throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
    }
    const bytes = new Uint8Array(8);
    for (let i3 = 7, remaining = Math.abs(Math.round(number)); i3 > -1 && remaining > 0; i3--, remaining /= 256) {
      bytes[i3] = remaining;
    }
    if (number < 0) {
      negate(bytes);
    }
    return new _Int64(bytes);
  }
  valueOf() {
    const bytes = this.bytes.slice(0);
    const negative = bytes[0] & 128;
    if (negative) {
      negate(bytes);
    }
    return parseInt(toHex(bytes), 16) * (negative ? -1 : 1);
  }
  toString() {
    return String(this.valueOf());
  }
};
function negate(bytes) {
  for (let i3 = 0; i3 < 8; i3++) {
    bytes[i3] ^= 255;
  }
  for (let i3 = 7; i3 > -1; i3--) {
    bytes[i3]++;
    if (bytes[i3] !== 0)
      break;
  }
}
__name(negate, "negate");

// node_modules/@smithy/signature-v4/dist-es/headerUtil.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var hasHeader = /* @__PURE__ */ __name((soughtHeader, headers) => {
  soughtHeader = soughtHeader.toLowerCase();
  for (const headerName of Object.keys(headers)) {
    if (soughtHeader === headerName.toLowerCase()) {
      return true;
    }
  }
  return false;
}, "hasHeader");

// node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var moveHeadersToQuery = /* @__PURE__ */ __name((request, options = {}) => {
  const { headers, query = {} } = HttpRequest.clone(request);
  for (const name of Object.keys(headers)) {
    const lname = name.toLowerCase();
    if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname) || options.hoistableHeaders?.has(lname)) {
      query[name] = headers[name];
      delete headers[name];
    }
  }
  return {
    ...request,
    headers,
    query
  };
}, "moveHeadersToQuery");

// node_modules/@smithy/signature-v4/dist-es/prepareRequest.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var prepareRequest = /* @__PURE__ */ __name((request) => {
  request = HttpRequest.clone(request);
  for (const headerName of Object.keys(request.headers)) {
    if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
      delete request.headers[headerName];
    }
  }
  return request;
}, "prepareRequest");

// node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getCanonicalQuery = /* @__PURE__ */ __name(({ query = {} }) => {
  const keys = [];
  const serialized = {};
  for (const key of Object.keys(query)) {
    if (key.toLowerCase() === SIGNATURE_HEADER) {
      continue;
    }
    const encodedKey = escapeUri(key);
    keys.push(encodedKey);
    const value = query[key];
    if (typeof value === "string") {
      serialized[encodedKey] = `${encodedKey}=${escapeUri(value)}`;
    } else if (Array.isArray(value)) {
      serialized[encodedKey] = value.slice(0).reduce((encoded, value2) => encoded.concat([`${encodedKey}=${escapeUri(value2)}`]), []).sort().join("&");
    }
  }
  return keys.sort().map((key) => serialized[key]).filter((serialized2) => serialized2).join("&");
}, "getCanonicalQuery");

// node_modules/@smithy/signature-v4/dist-es/utilDate.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var iso8601 = /* @__PURE__ */ __name((time3) => toDate(time3).toISOString().replace(/\.\d{3}Z$/, "Z"), "iso8601");
var toDate = /* @__PURE__ */ __name((time3) => {
  if (typeof time3 === "number") {
    return new Date(time3 * 1e3);
  }
  if (typeof time3 === "string") {
    if (Number(time3)) {
      return new Date(Number(time3) * 1e3);
    }
    return new Date(time3);
  }
  return time3;
}, "toDate");

// node_modules/@smithy/signature-v4/dist-es/SignatureV4Base.js
var SignatureV4Base = class {
  static {
    __name(this, "SignatureV4Base");
  }
  constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
    this.service = service;
    this.sha256 = sha256;
    this.uriEscapePath = uriEscapePath;
    this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
    this.regionProvider = normalizeProvider(region);
    this.credentialProvider = normalizeProvider(credentials);
  }
  createCanonicalRequest(request, canonicalHeaders, payloadHash) {
    const sortedHeaders = Object.keys(canonicalHeaders).sort();
    return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
  }
  async createStringToSign(longDate, credentialScope, canonicalRequest, algorithmIdentifier) {
    const hash = new this.sha256();
    hash.update(toUint8Array(canonicalRequest));
    const hashedRequest = await hash.digest();
    return `${algorithmIdentifier}
${longDate}
${credentialScope}
${toHex(hashedRequest)}`;
  }
  getCanonicalPath({ path }) {
    if (this.uriEscapePath) {
      const normalizedPathSegments = [];
      for (const pathSegment of path.split("/")) {
        if (pathSegment?.length === 0)
          continue;
        if (pathSegment === ".")
          continue;
        if (pathSegment === "..") {
          normalizedPathSegments.pop();
        } else {
          normalizedPathSegments.push(pathSegment);
        }
      }
      const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
      const doubleEncoded = escapeUri(normalizedPath);
      return doubleEncoded.replace(/%2F/g, "/");
    }
    return path;
  }
  validateResolvedCredentials(credentials) {
    if (typeof credentials !== "object" || typeof credentials.accessKeyId !== "string" || typeof credentials.secretAccessKey !== "string") {
      throw new Error("Resolved credential object is not valid");
    }
  }
  formatDate(now) {
    const longDate = iso8601(now).replace(/[\-:]/g, "");
    return {
      longDate,
      shortDate: longDate.slice(0, 8)
    };
  }
  getCanonicalHeaderList(headers) {
    return Object.keys(headers).sort().join(";");
  }
};

// node_modules/@smithy/signature-v4/dist-es/SignatureV4.js
var SignatureV4 = class extends SignatureV4Base {
  static {
    __name(this, "SignatureV4");
  }
  constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true }) {
    super({
      applyChecksum,
      credentials,
      region,
      service,
      sha256,
      uriEscapePath
    });
    this.headerFormatter = new HeaderFormatter();
  }
  async presign(originalRequest, options = {}) {
    const { signingDate = /* @__PURE__ */ new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, hoistableHeaders, signingRegion, signingService } = options;
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { longDate, shortDate } = this.formatDate(signingDate);
    if (expiresIn > MAX_PRESIGNED_TTL) {
      return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
    }
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders, hoistableHeaders });
    if (credentials.sessionToken) {
      request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
    }
    request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
    request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
    request.query[AMZ_DATE_QUERY_PARAM] = longDate;
    request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
    const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    request.query[SIGNED_HEADERS_QUERY_PARAM] = this.getCanonicalHeaderList(canonicalHeaders);
    request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
    return request;
  }
  async sign(toSign, options) {
    if (typeof toSign === "string") {
      return this.signString(toSign, options);
    } else if (toSign.headers && toSign.payload) {
      return this.signEvent(toSign, options);
    } else if (toSign.message) {
      return this.signMessage(toSign, options);
    } else {
      return this.signRequest(toSign, options);
    }
  }
  async signEvent({ headers, payload }, { signingDate = /* @__PURE__ */ new Date(), priorSignature, signingRegion, signingService }) {
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate, longDate } = this.formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
    const hash = new this.sha256();
    hash.update(headers);
    const hashedHeaders = toHex(await hash.digest());
    const stringToSign = [
      EVENT_ALGORITHM_IDENTIFIER,
      longDate,
      scope,
      priorSignature,
      hashedHeaders,
      hashedPayload
    ].join("\n");
    return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
  }
  async signMessage(signableMessage, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService }) {
    const promise = this.signEvent({
      headers: this.headerFormatter.format(signableMessage.message.headers),
      payload: signableMessage.message.body
    }, {
      signingDate,
      signingRegion,
      signingService,
      priorSignature: signableMessage.priorSignature
    });
    return promise.then((signature) => {
      return { message: signableMessage.message, signature };
    });
  }
  async signString(stringToSign, { signingDate = /* @__PURE__ */ new Date(), signingRegion, signingService } = {}) {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const { shortDate } = this.formatDate(signingDate);
    const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
  async signRequest(requestToSign, { signingDate = /* @__PURE__ */ new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService } = {}) {
    const credentials = await this.credentialProvider();
    this.validateResolvedCredentials(credentials);
    const region = signingRegion ?? await this.regionProvider();
    const request = prepareRequest(requestToSign);
    const { longDate, shortDate } = this.formatDate(signingDate);
    const scope = createScope(shortDate, region, signingService ?? this.service);
    request.headers[AMZ_DATE_HEADER] = longDate;
    if (credentials.sessionToken) {
      request.headers[TOKEN_HEADER] = credentials.sessionToken;
    }
    const payloadHash = await getPayloadHash(request, this.sha256);
    if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
      request.headers[SHA256_HEADER] = payloadHash;
    }
    const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
    const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
    request.headers[AUTH_HEADER] = `${ALGORITHM_IDENTIFIER} Credential=${credentials.accessKeyId}/${scope}, SignedHeaders=${this.getCanonicalHeaderList(canonicalHeaders)}, Signature=${signature}`;
    return request;
  }
  async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
    const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest, ALGORITHM_IDENTIFIER);
    const hash = new this.sha256(await keyPromise);
    hash.update(toUint8Array(stringToSign));
    return toHex(await hash.digest());
  }
  getSigningKey(credentials, region, shortDate, service) {
    return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
  }
};

// node_modules/@smithy/signature-v4/dist-es/signature-v4a-container.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
var resolveAwsSdkSigV4Config = /* @__PURE__ */ __name((config2) => {
  let inputCredentials = config2.credentials;
  let isUserSupplied = !!config2.credentials;
  let resolvedCredentials = void 0;
  Object.defineProperty(config2, "credentials", {
    set(credentials) {
      if (credentials && credentials !== inputCredentials && credentials !== resolvedCredentials) {
        isUserSupplied = true;
      }
      inputCredentials = credentials;
      const memoizedProvider = normalizeCredentialProvider(config2, {
        credentials: inputCredentials,
        credentialDefaultProvider: config2.credentialDefaultProvider
      });
      const boundProvider = bindCallerConfig(config2, memoizedProvider);
      if (isUserSupplied && !boundProvider.attributed) {
        resolvedCredentials = /* @__PURE__ */ __name(async (options) => boundProvider(options).then((creds) => setCredentialFeature(creds, "CREDENTIALS_CODE", "e")), "resolvedCredentials");
        resolvedCredentials.memoized = boundProvider.memoized;
        resolvedCredentials.configBound = boundProvider.configBound;
        resolvedCredentials.attributed = true;
      } else {
        resolvedCredentials = boundProvider;
      }
    },
    get() {
      return resolvedCredentials;
    },
    enumerable: true,
    configurable: true
  });
  config2.credentials = inputCredentials;
  const { signingEscapePath = true, systemClockOffset = config2.systemClockOffset || 0, sha256 } = config2;
  let signer;
  if (config2.signer) {
    signer = normalizeProvider2(config2.signer);
  } else if (config2.regionInfoProvider) {
    signer = /* @__PURE__ */ __name(() => normalizeProvider2(config2.region)().then(async (region) => [
      await config2.regionInfoProvider(region, {
        useFipsEndpoint: await config2.useFipsEndpoint(),
        useDualstackEndpoint: await config2.useDualstackEndpoint()
      }) || {},
      region
    ]).then(([regionInfo, region]) => {
      const { signingRegion, signingService } = regionInfo;
      config2.signingRegion = config2.signingRegion || signingRegion || region;
      config2.signingName = config2.signingName || signingService || config2.serviceId;
      const params = {
        ...config2,
        credentials: config2.credentials,
        region: config2.signingRegion,
        service: config2.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = config2.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    }), "signer");
  } else {
    signer = /* @__PURE__ */ __name(async (authScheme) => {
      authScheme = Object.assign({}, {
        name: "sigv4",
        signingName: config2.signingName || config2.defaultSigningName,
        signingRegion: await normalizeProvider2(config2.region)(),
        properties: {}
      }, authScheme);
      const signingRegion = authScheme.signingRegion;
      const signingService = authScheme.signingName;
      config2.signingRegion = config2.signingRegion || signingRegion;
      config2.signingName = config2.signingName || signingService || config2.serviceId;
      const params = {
        ...config2,
        credentials: config2.credentials,
        region: config2.signingRegion,
        service: config2.signingName,
        sha256,
        uriEscapePath: signingEscapePath
      };
      const SignerCtor = config2.signerConstructor || SignatureV4;
      return new SignerCtor(params);
    }, "signer");
  }
  const resolvedConfig = Object.assign(config2, {
    systemClockOffset,
    signingEscapePath,
    signer
  });
  return resolvedConfig;
}, "resolveAwsSdkSigV4Config");
function normalizeCredentialProvider(config2, { credentials, credentialDefaultProvider }) {
  let credentialsProvider;
  if (credentials) {
    if (!credentials?.memoized) {
      credentialsProvider = memoizeIdentityProvider(credentials, isIdentityExpired, doesIdentityRequireRefresh);
    } else {
      credentialsProvider = credentials;
    }
  } else {
    if (credentialDefaultProvider) {
      credentialsProvider = normalizeProvider2(credentialDefaultProvider(Object.assign({}, config2, {
        parentClientConfig: config2
      })));
    } else {
      credentialsProvider = /* @__PURE__ */ __name(async () => {
        throw new Error("@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.");
      }, "credentialsProvider");
    }
  }
  credentialsProvider.memoized = true;
  return credentialsProvider;
}
__name(normalizeCredentialProvider, "normalizeCredentialProvider");
function bindCallerConfig(config2, credentialsProvider) {
  if (credentialsProvider.configBound) {
    return credentialsProvider;
  }
  const fn = /* @__PURE__ */ __name(async (options) => credentialsProvider({ ...options, callerClientConfig: config2 }), "fn");
  fn.memoized = credentialsProvider.memoized;
  fn.configBound = true;
  return fn;
}
__name(bindCallerConfig, "bindCallerConfig");

// node_modules/@smithy/smithy-client/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/client.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-stack/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getAllAliases = /* @__PURE__ */ __name((name, aliases) => {
  const _aliases = [];
  if (name) {
    _aliases.push(name);
  }
  if (aliases) {
    for (const alias of aliases) {
      _aliases.push(alias);
    }
  }
  return _aliases;
}, "getAllAliases");
var getMiddlewareNameWithAliases = /* @__PURE__ */ __name((name, aliases) => {
  return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
}, "getMiddlewareNameWithAliases");
var constructStack = /* @__PURE__ */ __name(() => {
  let absoluteEntries = [];
  let relativeEntries = [];
  let identifyOnResolve = false;
  const entriesNameSet = /* @__PURE__ */ new Set();
  const sort = /* @__PURE__ */ __name((entries) => entries.sort((a3, b3) => stepWeights[b3.step] - stepWeights[a3.step] || priorityWeights[b3.priority || "normal"] - priorityWeights[a3.priority || "normal"]), "sort");
  const removeByName = /* @__PURE__ */ __name((toRemove) => {
    let isRemoved = false;
    const filterCb = /* @__PURE__ */ __name((entry) => {
      const aliases = getAllAliases(entry.name, entry.aliases);
      if (aliases.includes(toRemove)) {
        isRemoved = true;
        for (const alias of aliases) {
          entriesNameSet.delete(alias);
        }
        return false;
      }
      return true;
    }, "filterCb");
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  }, "removeByName");
  const removeByReference = /* @__PURE__ */ __name((toRemove) => {
    let isRemoved = false;
    const filterCb = /* @__PURE__ */ __name((entry) => {
      if (entry.middleware === toRemove) {
        isRemoved = true;
        for (const alias of getAllAliases(entry.name, entry.aliases)) {
          entriesNameSet.delete(alias);
        }
        return false;
      }
      return true;
    }, "filterCb");
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  }, "removeByReference");
  const cloneTo = /* @__PURE__ */ __name((toStack) => {
    absoluteEntries.forEach((entry) => {
      toStack.add(entry.middleware, { ...entry });
    });
    relativeEntries.forEach((entry) => {
      toStack.addRelativeTo(entry.middleware, { ...entry });
    });
    toStack.identifyOnResolve?.(stack.identifyOnResolve());
    return toStack;
  }, "cloneTo");
  const expandRelativeMiddlewareList = /* @__PURE__ */ __name((from) => {
    const expandedMiddlewareList = [];
    from.before.forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    expandedMiddlewareList.push(from);
    from.after.reverse().forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddlewareList.push(entry);
      } else {
        expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    return expandedMiddlewareList;
  }, "expandRelativeMiddlewareList");
  const getMiddlewareList = /* @__PURE__ */ __name((debug3 = false) => {
    const normalizedAbsoluteEntries = [];
    const normalizedRelativeEntries = [];
    const normalizedEntriesNameMap = {};
    absoluteEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: []
      };
      for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
        normalizedEntriesNameMap[alias] = normalizedEntry;
      }
      normalizedAbsoluteEntries.push(normalizedEntry);
    });
    relativeEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: []
      };
      for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
        normalizedEntriesNameMap[alias] = normalizedEntry;
      }
      normalizedRelativeEntries.push(normalizedEntry);
    });
    normalizedRelativeEntries.forEach((entry) => {
      if (entry.toMiddleware) {
        const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
        if (toMiddleware === void 0) {
          if (debug3) {
            return;
          }
          throw new Error(`${entry.toMiddleware} is not found when adding ${getMiddlewareNameWithAliases(entry.name, entry.aliases)} middleware ${entry.relation} ${entry.toMiddleware}`);
        }
        if (entry.relation === "after") {
          toMiddleware.after.push(entry);
        }
        if (entry.relation === "before") {
          toMiddleware.before.push(entry);
        }
      }
    });
    const mainChain = sort(normalizedAbsoluteEntries).map(expandRelativeMiddlewareList).reduce((wholeList, expandedMiddlewareList) => {
      wholeList.push(...expandedMiddlewareList);
      return wholeList;
    }, []);
    return mainChain;
  }, "getMiddlewareList");
  const stack = {
    add: /* @__PURE__ */ __name((middleware, options = {}) => {
      const { name, override, aliases: _aliases } = options;
      const entry = {
        step: "initialize",
        priority: "normal",
        middleware,
        ...options
      };
      const aliases = getAllAliases(name, _aliases);
      if (aliases.length > 0) {
        if (aliases.some((alias) => entriesNameSet.has(alias))) {
          if (!override)
            throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
          for (const alias of aliases) {
            const toOverrideIndex = absoluteEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a3) => a3 === alias));
            if (toOverrideIndex === -1) {
              continue;
            }
            const toOverride = absoluteEntries[toOverrideIndex];
            if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
              throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ${toOverride.priority} priority in ${toOverride.step} step cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ${entry.priority} priority in ${entry.step} step.`);
            }
            absoluteEntries.splice(toOverrideIndex, 1);
          }
        }
        for (const alias of aliases) {
          entriesNameSet.add(alias);
        }
      }
      absoluteEntries.push(entry);
    }, "add"),
    addRelativeTo: /* @__PURE__ */ __name((middleware, options) => {
      const { name, override, aliases: _aliases } = options;
      const entry = {
        middleware,
        ...options
      };
      const aliases = getAllAliases(name, _aliases);
      if (aliases.length > 0) {
        if (aliases.some((alias) => entriesNameSet.has(alias))) {
          if (!override)
            throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
          for (const alias of aliases) {
            const toOverrideIndex = relativeEntries.findIndex((entry2) => entry2.name === alias || entry2.aliases?.some((a3) => a3 === alias));
            if (toOverrideIndex === -1) {
              continue;
            }
            const toOverride = relativeEntries[toOverrideIndex];
            if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
              throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} "${entry.toMiddleware}" middleware.`);
            }
            relativeEntries.splice(toOverrideIndex, 1);
          }
        }
        for (const alias of aliases) {
          entriesNameSet.add(alias);
        }
      }
      relativeEntries.push(entry);
    }, "addRelativeTo"),
    clone: /* @__PURE__ */ __name(() => cloneTo(constructStack()), "clone"),
    use: /* @__PURE__ */ __name((plugin) => {
      plugin.applyToStack(stack);
    }, "use"),
    remove: /* @__PURE__ */ __name((toRemove) => {
      if (typeof toRemove === "string")
        return removeByName(toRemove);
      else
        return removeByReference(toRemove);
    }, "remove"),
    removeByTag: /* @__PURE__ */ __name((toRemove) => {
      let isRemoved = false;
      const filterCb = /* @__PURE__ */ __name((entry) => {
        const { tags, name, aliases: _aliases } = entry;
        if (tags && tags.includes(toRemove)) {
          const aliases = getAllAliases(name, _aliases);
          for (const alias of aliases) {
            entriesNameSet.delete(alias);
          }
          isRemoved = true;
          return false;
        }
        return true;
      }, "filterCb");
      absoluteEntries = absoluteEntries.filter(filterCb);
      relativeEntries = relativeEntries.filter(filterCb);
      return isRemoved;
    }, "removeByTag"),
    concat: /* @__PURE__ */ __name((from) => {
      const cloned = cloneTo(constructStack());
      cloned.use(from);
      cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
      return cloned;
    }, "concat"),
    applyToStack: cloneTo,
    identify: /* @__PURE__ */ __name(() => {
      return getMiddlewareList(true).map((mw) => {
        const step = mw.step ?? mw.relation + " " + mw.toMiddleware;
        return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
      });
    }, "identify"),
    identifyOnResolve(toggle) {
      if (typeof toggle === "boolean")
        identifyOnResolve = toggle;
      return identifyOnResolve;
    },
    resolve: /* @__PURE__ */ __name((handler, context2) => {
      for (const middleware of getMiddlewareList().map((entry) => entry.middleware).reverse()) {
        handler = middleware(handler, context2);
      }
      if (identifyOnResolve) {
        console.log(stack.identify());
      }
      return handler;
    }, "resolve")
  };
  return stack;
}, "constructStack");
var stepWeights = {
  initialize: 5,
  serialize: 4,
  build: 3,
  finalizeRequest: 2,
  deserialize: 1
};
var priorityWeights = {
  high: 3,
  normal: 2,
  low: 1
};

// node_modules/@smithy/smithy-client/dist-es/client.js
var Client = class {
  static {
    __name(this, "Client");
  }
  constructor(config2) {
    this.config = config2;
    this.middlewareStack = constructStack();
  }
  send(command, optionsOrCb, cb) {
    const options = typeof optionsOrCb !== "function" ? optionsOrCb : void 0;
    const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
    const useHandlerCache = options === void 0 && this.config.cacheMiddleware === true;
    let handler;
    if (useHandlerCache) {
      if (!this.handlers) {
        this.handlers = /* @__PURE__ */ new WeakMap();
      }
      const handlers = this.handlers;
      if (handlers.has(command.constructor)) {
        handler = handlers.get(command.constructor);
      } else {
        handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        handlers.set(command.constructor, handler);
      }
    } else {
      delete this.handlers;
      handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
    }
    if (callback) {
      handler(command).then((result) => callback(null, result.output), (err) => callback(err)).catch(() => {
      });
    } else {
      return handler(command).then((result) => result.output);
    }
  }
  destroy() {
    this.config?.requestHandler?.destroy?.();
    delete this.handlers;
  }
};

// node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/command.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var Command = class {
  static {
    __name(this, "Command");
  }
  constructor() {
    this.middlewareStack = constructStack();
  }
  static classBuilder() {
    return new ClassBuilder();
  }
  resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor }) {
    for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
      this.middlewareStack.use(mw);
    }
    const stack = clientStack.concat(this.middlewareStack);
    const { logger: logger2 } = configuration;
    const handlerExecutionContext = {
      logger: logger2,
      clientName,
      commandName,
      inputFilterSensitiveLog,
      outputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        commandInstance: this,
        ...smithyContext
      },
      ...additionalContext
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
};
var ClassBuilder = class {
  static {
    __name(this, "ClassBuilder");
  }
  constructor() {
    this._init = () => {
    };
    this._ep = {};
    this._middlewareFn = () => [];
    this._commandName = "";
    this._clientName = "";
    this._additionalContext = {};
    this._smithyContext = {};
    this._inputFilterSensitiveLog = (_3) => _3;
    this._outputFilterSensitiveLog = (_3) => _3;
    this._serializer = null;
    this._deserializer = null;
  }
  init(cb) {
    this._init = cb;
  }
  ep(endpointParameterInstructions) {
    this._ep = endpointParameterInstructions;
    return this;
  }
  m(middlewareSupplier) {
    this._middlewareFn = middlewareSupplier;
    return this;
  }
  s(service, operation, smithyContext = {}) {
    this._smithyContext = {
      service,
      operation,
      ...smithyContext
    };
    return this;
  }
  c(additionalContext = {}) {
    this._additionalContext = additionalContext;
    return this;
  }
  n(clientName, commandName) {
    this._clientName = clientName;
    this._commandName = commandName;
    return this;
  }
  f(inputFilter = (_3) => _3, outputFilter = (_3) => _3) {
    this._inputFilterSensitiveLog = inputFilter;
    this._outputFilterSensitiveLog = outputFilter;
    return this;
  }
  ser(serializer) {
    this._serializer = serializer;
    return this;
  }
  de(deserializer) {
    this._deserializer = deserializer;
    return this;
  }
  build() {
    const closure = this;
    let CommandRef;
    return CommandRef = class extends Command {
      static {
        __name(this, "CommandRef");
      }
      static getEndpointParameterInstructions() {
        return closure._ep;
      }
      constructor(...[input]) {
        super();
        this.serialize = closure._serializer;
        this.deserialize = closure._deserializer;
        this.input = input ?? {};
        closure._init(this);
      }
      resolveMiddleware(stack, configuration, options) {
        return this.resolveMiddlewareWithContext(stack, configuration, options, {
          CommandCtor: CommandRef,
          middlewareFn: closure._middlewareFn,
          clientName: closure._clientName,
          commandName: closure._commandName,
          inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
          outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
          smithyContext: closure._smithyContext,
          additionalContext: closure._additionalContext
        });
      }
    };
  }
};

// node_modules/@smithy/smithy-client/dist-es/constants.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/exceptions.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ServiceException = class _ServiceException extends Error {
  static {
    __name(this, "ServiceException");
  }
  constructor(options) {
    super(options.message);
    Object.setPrototypeOf(this, Object.getPrototypeOf(this).constructor.prototype);
    this.name = options.name;
    this.$fault = options.$fault;
    this.$metadata = options.$metadata;
  }
  static isInstance(value) {
    if (!value)
      return false;
    const candidate = value;
    return _ServiceException.prototype.isPrototypeOf(candidate) || Boolean(candidate.$fault) && Boolean(candidate.$metadata) && (candidate.$fault === "client" || candidate.$fault === "server");
  }
  static [Symbol.hasInstance](instance) {
    if (!instance)
      return false;
    const candidate = instance;
    if (this === _ServiceException) {
      return _ServiceException.isInstance(instance);
    }
    if (_ServiceException.isInstance(instance)) {
      if (candidate.name && this.name) {
        return this.prototype.isPrototypeOf(instance) || candidate.name === this.name;
      }
      return this.prototype.isPrototypeOf(instance);
    }
    return false;
  }
};
var decorateServiceException = /* @__PURE__ */ __name((exception, additions = {}) => {
  Object.entries(additions).filter(([, v3]) => v3 !== void 0).forEach(([k3, v3]) => {
    if (exception[k3] == void 0 || exception[k3] === "") {
      exception[k3] = v3;
    }
  });
  const message = exception.message || exception.Message || "UnknownError";
  exception.message = message;
  delete exception.Message;
  return exception;
}, "decorateServiceException");

// node_modules/@smithy/smithy-client/dist-es/default-error-handler.js
var throwDefaultError = /* @__PURE__ */ __name(({ output, parsedBody, exceptionCtor, errorCode }) => {
  const $metadata = deserializeMetadata(output);
  const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : void 0;
  const response = new exceptionCtor({
    name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
    $fault: "client",
    $metadata
  });
  throw decorateServiceException(response, parsedBody);
}, "throwDefaultError");
var withBaseException = /* @__PURE__ */ __name((ExceptionCtor) => {
  return ({ output, parsedBody, errorCode }) => {
    throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
  };
}, "withBaseException");
var deserializeMetadata = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");

// node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var loadConfigsForDefaultMode = /* @__PURE__ */ __name((mode) => {
  switch (mode) {
    case "standard":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "in-region":
      return {
        retryMode: "standard",
        connectionTimeout: 1100
      };
    case "cross-region":
      return {
        retryMode: "standard",
        connectionTimeout: 3100
      };
    case "mobile":
      return {
        retryMode: "standard",
        connectionTimeout: 3e4
      };
    default:
      return {};
  }
}, "loadConfigsForDefaultMode");

// node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/extensions/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getChecksumConfiguration2 = /* @__PURE__ */ __name((runtimeConfig) => {
  const checksumAlgorithms = [];
  for (const id in AlgorithmId) {
    const algorithmId = AlgorithmId[id];
    if (runtimeConfig[algorithmId] === void 0) {
      continue;
    }
    checksumAlgorithms.push({
      algorithmId: /* @__PURE__ */ __name(() => algorithmId, "algorithmId"),
      checksumConstructor: /* @__PURE__ */ __name(() => runtimeConfig[algorithmId], "checksumConstructor")
    });
  }
  return {
    addChecksumAlgorithm(algo) {
      checksumAlgorithms.push(algo);
    },
    checksumAlgorithms() {
      return checksumAlgorithms;
    }
  };
}, "getChecksumConfiguration");
var resolveChecksumRuntimeConfig2 = /* @__PURE__ */ __name((clientConfig) => {
  const runtimeConfig = {};
  clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
    runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
  });
  return runtimeConfig;
}, "resolveChecksumRuntimeConfig");

// node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getRetryConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  return {
    setRetryStrategy(retryStrategy) {
      runtimeConfig.retryStrategy = retryStrategy;
    },
    retryStrategy() {
      return runtimeConfig.retryStrategy;
    }
  };
}, "getRetryConfiguration");
var resolveRetryRuntimeConfig = /* @__PURE__ */ __name((retryStrategyConfiguration) => {
  const runtimeConfig = {};
  runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
  return runtimeConfig;
}, "resolveRetryRuntimeConfig");

// node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js
var getDefaultExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  return Object.assign(getChecksumConfiguration2(runtimeConfig), getRetryConfiguration(runtimeConfig));
}, "getDefaultExtensionConfiguration");
var resolveDefaultRuntimeConfig = /* @__PURE__ */ __name((config2) => {
  return Object.assign(resolveChecksumRuntimeConfig2(config2), resolveRetryRuntimeConfig(config2));
}, "resolveDefaultRuntimeConfig");

// node_modules/@smithy/smithy-client/dist-es/get-array-if-single-item.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getArrayIfSingleItem = /* @__PURE__ */ __name((mayBeArray) => Array.isArray(mayBeArray) ? mayBeArray : [mayBeArray], "getArrayIfSingleItem");

// node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getValueFromTextNode = /* @__PURE__ */ __name((obj) => {
  const textNodeName = "#text";
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== void 0) {
      obj[key] = obj[key][textNodeName];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      obj[key] = getValueFromTextNode(obj[key]);
    }
  }
  return obj;
}, "getValueFromTextNode");

// node_modules/@smithy/smithy-client/dist-es/is-serializable-header-value.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var NoOpLogger = class {
  static {
    __name(this, "NoOpLogger");
  }
  trace() {
  }
  debug() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
};

// node_modules/@smithy/smithy-client/dist-es/object-mapping.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/resolve-path.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/smithy-client/dist-es/ser-utils.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var serializeDateTime = /* @__PURE__ */ __name((date) => date.toISOString().replace(".000Z", "Z"), "serializeDateTime");

// node_modules/@smithy/smithy-client/dist-es/serde-json.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/serde/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/serde/parse-utils.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var parseBoolean = /* @__PURE__ */ __name((value) => {
  switch (value) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      throw new Error(`Unable to parse boolean value "${value}"`);
  }
}, "parseBoolean");
var expectNumber = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    const parsed = parseFloat(value);
    if (!Number.isNaN(parsed)) {
      if (String(parsed) !== String(value)) {
        logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
      }
      return parsed;
    }
  }
  if (typeof value === "number") {
    return value;
  }
  throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
}, "expectNumber");
var MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
var expectFloat32 = /* @__PURE__ */ __name((value) => {
  const expected = expectNumber(value);
  if (expected !== void 0 && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
    if (Math.abs(expected) > MAX_FLOAT) {
      throw new TypeError(`Expected 32-bit float, got ${value}`);
    }
  }
  return expected;
}, "expectFloat32");
var expectLong = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (Number.isInteger(value) && !Number.isNaN(value)) {
    return value;
  }
  throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
}, "expectLong");
var expectInt32 = /* @__PURE__ */ __name((value) => expectSizedInt(value, 32), "expectInt32");
var expectShort = /* @__PURE__ */ __name((value) => expectSizedInt(value, 16), "expectShort");
var expectByte = /* @__PURE__ */ __name((value) => expectSizedInt(value, 8), "expectByte");
var expectSizedInt = /* @__PURE__ */ __name((value, size) => {
  const expected = expectLong(value);
  if (expected !== void 0 && castInt(expected, size) !== expected) {
    throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
  }
  return expected;
}, "expectSizedInt");
var castInt = /* @__PURE__ */ __name((value, size) => {
  switch (size) {
    case 32:
      return Int32Array.of(value)[0];
    case 16:
      return Int16Array.of(value)[0];
    case 8:
      return Int8Array.of(value)[0];
  }
}, "castInt");
var expectNonNull = /* @__PURE__ */ __name((value, location) => {
  if (value === null || value === void 0) {
    if (location) {
      throw new TypeError(`Expected a non-null value for ${location}`);
    }
    throw new TypeError("Expected a non-null value");
  }
  return value;
}, "expectNonNull");
var expectString = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value === "string") {
    return value;
  }
  if (["boolean", "number", "bigint"].includes(typeof value)) {
    logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
    return String(value);
  }
  throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
}, "expectString");
var strictParseDouble = /* @__PURE__ */ __name((value) => {
  if (typeof value == "string") {
    return expectNumber(parseNumber(value));
  }
  return expectNumber(value);
}, "strictParseDouble");
var strictParseFloat = strictParseDouble;
var strictParseFloat32 = /* @__PURE__ */ __name((value) => {
  if (typeof value == "string") {
    return expectFloat32(parseNumber(value));
  }
  return expectFloat32(value);
}, "strictParseFloat32");
var NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
var parseNumber = /* @__PURE__ */ __name((value) => {
  const matches = value.match(NUMBER_REGEX);
  if (matches === null || matches[0].length !== value.length) {
    throw new TypeError(`Expected real number, got implicit NaN`);
  }
  return parseFloat(value);
}, "parseNumber");
var strictParseInt32 = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectInt32(parseNumber(value));
  }
  return expectInt32(value);
}, "strictParseInt32");
var strictParseShort = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectShort(parseNumber(value));
  }
  return expectShort(value);
}, "strictParseShort");
var strictParseByte = /* @__PURE__ */ __name((value) => {
  if (typeof value === "string") {
    return expectByte(parseNumber(value));
  }
  return expectByte(value);
}, "strictParseByte");
var stackTraceWarning = /* @__PURE__ */ __name((message) => {
  return String(new TypeError(message).stack || message).split("\n").slice(0, 5).filter((s3) => !s3.includes("stackTraceWarning")).join("\n");
}, "stackTraceWarning");
var logger = {
  warn: console.warn
};

// node_modules/@smithy/core/dist-es/submodules/serde/date-utils.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
var RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
var parseRfc3339DateTimeWithOffset = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return void 0;
  }
  if (typeof value !== "string") {
    throw new TypeError("RFC-3339 date-times must be expressed as strings");
  }
  const match = RFC3339_WITH_OFFSET.exec(value);
  if (!match) {
    throw new TypeError("Invalid RFC-3339 date-time value");
  }
  const [_3, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
  const year = strictParseShort(stripLeadingZeroes(yearStr));
  const month = parseDateValue(monthStr, "month", 1, 12);
  const day = parseDateValue(dayStr, "day", 1, 31);
  const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
  if (offsetStr.toUpperCase() != "Z") {
    date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
  }
  return date;
}, "parseRfc3339DateTimeWithOffset");
var IMF_FIXDATE = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
var RFC_850_DATE = new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/);
var ASC_TIME = new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/);
var buildDate = /* @__PURE__ */ __name((year, month, day, time3) => {
  const adjustedMonth = month - 1;
  validateDayOfMonth(year, adjustedMonth, day);
  return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time3.hours, "hour", 0, 23), parseDateValue(time3.minutes, "minute", 0, 59), parseDateValue(time3.seconds, "seconds", 0, 60), parseMilliseconds(time3.fractionalMilliseconds)));
}, "buildDate");
var FIFTY_YEARS_IN_MILLIS = 50 * 365 * 24 * 60 * 60 * 1e3;
var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var validateDayOfMonth = /* @__PURE__ */ __name((year, month, day) => {
  let maxDays = DAYS_IN_MONTH[month];
  if (month === 1 && isLeapYear(year)) {
    maxDays = 29;
  }
  if (day > maxDays) {
    throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
  }
}, "validateDayOfMonth");
var isLeapYear = /* @__PURE__ */ __name((year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}, "isLeapYear");
var parseDateValue = /* @__PURE__ */ __name((value, type, lower, upper) => {
  const dateVal = strictParseByte(stripLeadingZeroes(value));
  if (dateVal < lower || dateVal > upper) {
    throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
  }
  return dateVal;
}, "parseDateValue");
var parseMilliseconds = /* @__PURE__ */ __name((value) => {
  if (value === null || value === void 0) {
    return 0;
  }
  return strictParseFloat32("0." + value) * 1e3;
}, "parseMilliseconds");
var parseOffsetToMilliseconds = /* @__PURE__ */ __name((value) => {
  const directionStr = value[0];
  let direction = 1;
  if (directionStr == "+") {
    direction = 1;
  } else if (directionStr == "-") {
    direction = -1;
  } else {
    throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
  }
  const hour = Number(value.substring(1, 3));
  const minute = Number(value.substring(4, 6));
  return direction * (hour * 60 + minute) * 60 * 1e3;
}, "parseOffsetToMilliseconds");
var stripLeadingZeroes = /* @__PURE__ */ __name((value) => {
  let idx = 0;
  while (idx < value.length - 1 && value.charAt(idx) === "0") {
    idx++;
  }
  if (idx === 0) {
    return value;
  }
  return value.slice(idx);
}, "stripLeadingZeroes");

// node_modules/@smithy/core/dist-es/submodules/serde/quote-header.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/serde/split-header.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/serde/value/NumericValue.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/core/dist-es/submodules/serde/lazy-json.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var LazyJsonString = /* @__PURE__ */ __name(function LazyJsonString2(val2) {
  const str = Object.assign(new String(val2), {
    deserializeJSON() {
      return JSON.parse(String(val2));
    },
    toString() {
      return String(val2);
    },
    toJSON() {
      return String(val2);
    }
  });
  return str;
}, "LazyJsonString");
LazyJsonString.from = (object) => {
  if (object && typeof object === "object" && (object instanceof LazyJsonString || "deserializeJSON" in object)) {
    return object;
  } else if (typeof object === "string" || Object.getPrototypeOf(object) === String.prototype) {
    return LazyJsonString(String(object));
  }
  return LazyJsonString(JSON.stringify(object));
};
LazyJsonString.fromObject = LazyJsonString.from;

// node_modules/@smithy/core/dist-es/submodules/serde/split-every.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/common.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var collectBodyString = /* @__PURE__ */ __name((streamBody, context2) => collectBody(streamBody, context2).then((body) => context2.utf8Encoder(body)), "collectBodyString");

// node_modules/@aws-sdk/core/dist-es/submodules/protocols/xml/parseXmlBody.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_fast_xml_parser = __toESM(require_fxp());
var parseXmlBody = /* @__PURE__ */ __name((streamBody, context2) => collectBodyString(streamBody, context2).then((encoded) => {
  if (encoded.length) {
    const parser = new import_fast_xml_parser.XMLParser({
      attributeNamePrefix: "",
      htmlEntities: true,
      ignoreAttributes: false,
      ignoreDeclaration: true,
      parseTagValue: false,
      trimValues: false,
      tagValueProcessor: /* @__PURE__ */ __name((_3, val2) => val2.trim() === "" && val2.includes("\n") ? "" : void 0, "tagValueProcessor")
    });
    parser.addEntity("#xD", "\r");
    parser.addEntity("#10", "\n");
    let parsedObj;
    try {
      parsedObj = parser.parse(encoded, true);
    } catch (e3) {
      if (e3 && typeof e3 === "object") {
        Object.defineProperty(e3, "$responseBodyText", {
          value: encoded
        });
      }
      throw e3;
    }
    const textNodeName = "#text";
    const key = Object.keys(parsedObj)[0];
    const parsedObjToReturn = parsedObj[key];
    if (parsedObjToReturn[textNodeName]) {
      parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
      delete parsedObjToReturn[textNodeName];
    }
    return getValueFromTextNode(parsedObjToReturn);
  }
  return {};
}), "parseXmlBody");
var parseXmlErrorBody = /* @__PURE__ */ __name(async (errorBody, context2) => {
  const value = await parseXmlBody(errorBody, context2);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
}, "parseXmlErrorBody");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/check-features.js
var ACCOUNT_ID_ENDPOINT_REGEX = /\d{12}\.ddb/;
async function checkFeatures(context2, config2, args) {
  const request = args.request;
  if (request?.headers?.["smithy-protocol"] === "rpc-v2-cbor") {
    setFeature2(context2, "PROTOCOL_RPC_V2_CBOR", "M");
  }
  if (typeof config2.retryStrategy === "function") {
    const retryStrategy = await config2.retryStrategy();
    if (typeof retryStrategy.acquireInitialRetryToken === "function") {
      if (retryStrategy.constructor?.name?.includes("Adaptive")) {
        setFeature2(context2, "RETRY_MODE_ADAPTIVE", "F");
      } else {
        setFeature2(context2, "RETRY_MODE_STANDARD", "E");
      }
    } else {
      setFeature2(context2, "RETRY_MODE_LEGACY", "D");
    }
  }
  if (typeof config2.accountIdEndpointMode === "function") {
    const endpointV2 = context2.endpointV2;
    if (String(endpointV2?.url?.hostname).match(ACCOUNT_ID_ENDPOINT_REGEX)) {
      setFeature2(context2, "ACCOUNT_ID_ENDPOINT", "O");
    }
    switch (await config2.accountIdEndpointMode?.()) {
      case "disabled":
        setFeature2(context2, "ACCOUNT_ID_MODE_DISABLED", "Q");
        break;
      case "preferred":
        setFeature2(context2, "ACCOUNT_ID_MODE_PREFERRED", "P");
        break;
      case "required":
        setFeature2(context2, "ACCOUNT_ID_MODE_REQUIRED", "R");
        break;
    }
  }
  const identity = context2.__smithy_context?.selectedHttpAuthScheme?.identity;
  if (identity?.$source) {
    const credentials = identity;
    if (credentials.accountId) {
      setFeature2(context2, "RESOLVED_ACCOUNT_ID", "T");
    }
    for (const [key, value] of Object.entries(credentials.$source ?? {})) {
      setFeature2(context2, key, value);
    }
  }
}
__name(checkFeatures, "checkFeatures");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var USER_AGENT = "user-agent";
var X_AMZ_USER_AGENT = "x-amz-user-agent";
var SPACE = " ";
var UA_NAME_SEPARATOR = "/";
var UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
var UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
var UA_ESCAPE_CHAR = "-";

// node_modules/@aws-sdk/middleware-user-agent/dist-es/encode-features.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var BYTE_LIMIT = 1024;
function encodeFeatures(features2) {
  let buffer = "";
  for (const key in features2) {
    const val2 = features2[key];
    if (buffer.length + val2.length + 1 <= BYTE_LIMIT) {
      if (buffer.length) {
        buffer += "," + val2;
      } else {
        buffer += val2;
      }
      continue;
    }
    break;
  }
  return buffer;
}
__name(encodeFeatures, "encodeFeatures");

// node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js
var userAgentMiddleware = /* @__PURE__ */ __name((options) => (next, context2) => async (args) => {
  const { request } = args;
  if (!HttpRequest.isInstance(request)) {
    return next(args);
  }
  const { headers } = request;
  const userAgent = context2?.userAgent?.map(escapeUserAgent) || [];
  const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
  await checkFeatures(context2, options, args);
  const awsContext = context2;
  defaultUserAgent.push(`m/${encodeFeatures(Object.assign({}, context2.__smithy_context?.features, awsContext.__aws_sdk_context?.features))}`);
  const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
  const appId = await options.userAgentAppId();
  if (appId) {
    defaultUserAgent.push(escapeUserAgent([`app/${appId}`]));
  }
  const prefix = getUserAgentPrefix();
  const sdkUserAgentValue = (prefix ? [prefix] : []).concat([...defaultUserAgent, ...userAgent, ...customUserAgent]).join(SPACE);
  const normalUAValue = [
    ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
    ...customUserAgent
  ].join(SPACE);
  if (options.runtime !== "browser") {
    if (normalUAValue) {
      headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT] ? `${headers[USER_AGENT]} ${normalUAValue}` : normalUAValue;
    }
    headers[USER_AGENT] = sdkUserAgentValue;
  } else {
    headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
  }
  return next({
    ...args,
    request
  });
}, "userAgentMiddleware");
var escapeUserAgent = /* @__PURE__ */ __name((userAgentPair) => {
  const name = userAgentPair[0].split(UA_NAME_SEPARATOR).map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR)).join(UA_NAME_SEPARATOR);
  const version2 = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
  const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
  const prefix = name.substring(0, prefixSeparatorIndex);
  let uaName = name.substring(prefixSeparatorIndex + 1);
  if (prefix === "api") {
    uaName = uaName.toLowerCase();
  }
  return [prefix, uaName, version2].filter((item) => item && item.length > 0).reduce((acc, item, index) => {
    switch (index) {
      case 0:
        return item;
      case 1:
        return `${acc}/${item}`;
      default:
        return `${acc}#${item}`;
    }
  }, "");
}, "escapeUserAgent");
var getUserAgentMiddlewareOptions = {
  name: "getUserAgentMiddleware",
  step: "build",
  priority: "low",
  tags: ["SET_USER_AGENT", "USER_AGENT"],
  override: true
};
var getUserAgentPlugin = /* @__PURE__ */ __name((config2) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(userAgentMiddleware(config2), getUserAgentMiddlewareOptions);
  }, "applyToStack")
}), "getUserAgentPlugin");

// node_modules/@smithy/config-resolver/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-config-provider/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-config-provider/dist-es/numberSelector.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-config-provider/dist-es/types.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SelectorType;
(function(SelectorType2) {
  SelectorType2["ENV"] = "env";
  SelectorType2["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js
var DEFAULT_USE_DUALSTACK_ENDPOINT = false;

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_USE_FIPS_ENDPOINT = false;

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/endpointsConfig/utils/getEndpointFromRegion.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var isFipsRegion = /* @__PURE__ */ __name((region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips")), "isFipsRegion");

// node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js
var getRealRegion = /* @__PURE__ */ __name((region) => isFipsRegion(region) ? ["fips-aws-global", "aws-fips"].includes(region) ? "us-east-1" : region.replace(/fips-(dkr-|prod-)?|-fips/, "") : region, "getRealRegion");

// node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js
var resolveRegionConfig = /* @__PURE__ */ __name((input) => {
  const { region, useFipsEndpoint } = input;
  if (!region) {
    throw new Error("Region is missing");
  }
  return Object.assign(input, {
    region: /* @__PURE__ */ __name(async () => {
      if (typeof region === "string") {
        return getRealRegion(region);
      }
      const providedRegion = await region();
      return getRealRegion(providedRegion);
    }, "region"),
    useFipsEndpoint: /* @__PURE__ */ __name(async () => {
      const providedRegion = typeof region === "string" ? region : await region();
      if (isFipsRegion(providedRegion)) {
        return true;
      }
      return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
    }, "useFipsEndpoint")
  });
}, "resolveRegionConfig");

// node_modules/@smithy/config-resolver/dist-es/regionInfo/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/PartitionHash.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/RegionHash.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getRegionInfo.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getHostnameFromVariants.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedHostname.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedPartition.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/config-resolver/dist-es/regionInfo/getResolvedSigningRegion.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-content-length/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
  return (next) => async (args) => {
    const request = args.request;
    if (HttpRequest.isInstance(request)) {
      const { body, headers } = request;
      if (body && Object.keys(headers).map((str) => str.toLowerCase()).indexOf(CONTENT_LENGTH_HEADER) === -1) {
        try {
          const length = bodyLengthChecker(body);
          request.headers = {
            ...request.headers,
            [CONTENT_LENGTH_HEADER]: String(length)
          };
        } catch (error3) {
        }
      }
    }
    return next({
      ...args,
      request
    });
  };
}
__name(contentLengthMiddleware, "contentLengthMiddleware");
var contentLengthMiddlewareOptions = {
  step: "build",
  tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
  name: "contentLengthMiddleware",
  override: true
};
var getContentLengthPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
  }, "applyToStack")
}), "getContentLengthPlugin");

// node_modules/@smithy/middleware-endpoint/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var resolveParamsForS3 = /* @__PURE__ */ __name(async (endpointParams) => {
  const bucket = endpointParams?.Bucket || "";
  if (typeof endpointParams.Bucket === "string") {
    endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
  }
  if (isArnBucketName(bucket)) {
    if (endpointParams.ForcePathStyle === true) {
      throw new Error("Path-style addressing cannot be used with ARN buckets");
    }
  } else if (!isDnsCompatibleBucketName(bucket) || bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:") || bucket.toLowerCase() !== bucket || bucket.length < 3) {
    endpointParams.ForcePathStyle = true;
  }
  if (endpointParams.DisableMultiRegionAccessPoints) {
    endpointParams.disableMultiRegionAccessPoints = true;
    endpointParams.DisableMRAP = true;
  }
  return endpointParams;
}, "resolveParamsForS3");
var DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
var IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
var DOTS_PATTERN = /\.\./;
var isDnsCompatibleBucketName = /* @__PURE__ */ __name((bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName), "isDnsCompatibleBucketName");
var isArnBucketName = /* @__PURE__ */ __name((bucketName) => {
  const [arn, partition2, service, , , bucket] = bucketName.split(":");
  const isArn = arn === "arn" && bucketName.split(":").length >= 6;
  const isValidArn = Boolean(isArn && partition2 && service && bucket);
  if (isArn && !isValidArn) {
    throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
  }
  return isValidArn;
}, "isArnBucketName");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var createConfigValueProvider = /* @__PURE__ */ __name((configKey, canonicalEndpointParamKey, config2) => {
  const configProvider = /* @__PURE__ */ __name(async () => {
    const configValue = config2[configKey] ?? config2[canonicalEndpointParamKey];
    if (typeof configValue === "function") {
      return configValue();
    }
    return configValue;
  }, "configProvider");
  if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
    return async () => {
      const credentials = typeof config2.credentials === "function" ? await config2.credentials() : config2.credentials;
      const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
      return configValue;
    };
  }
  if (configKey === "accountId" || canonicalEndpointParamKey === "AccountId") {
    return async () => {
      const credentials = typeof config2.credentials === "function" ? await config2.credentials() : config2.credentials;
      const configValue = credentials?.accountId ?? credentials?.AccountId;
      return configValue;
    };
  }
  if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
    return async () => {
      const endpoint = await configProvider();
      if (endpoint && typeof endpoint === "object") {
        if ("url" in endpoint) {
          return endpoint.url.href;
        }
        if ("hostname" in endpoint) {
          const { protocol, hostname, port, path } = endpoint;
          return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
        }
      }
      return endpoint;
    };
  }
  return configProvider;
}, "createConfigValueProvider");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getEndpointFromConfig = /* @__PURE__ */ __name(async (serviceId) => void 0, "getEndpointFromConfig");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/url-parser/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/querystring-parser/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function parseQueryString(querystring) {
  const query = {};
  querystring = querystring.replace(/^\?/, "");
  if (querystring) {
    for (const pair of querystring.split("&")) {
      let [key, value = null] = pair.split("=");
      key = decodeURIComponent(key);
      if (value) {
        value = decodeURIComponent(value);
      }
      if (!(key in query)) {
        query[key] = value;
      } else if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    }
  }
  return query;
}
__name(parseQueryString, "parseQueryString");

// node_modules/@smithy/url-parser/dist-es/index.js
var parseUrl = /* @__PURE__ */ __name((url) => {
  if (typeof url === "string") {
    return parseUrl(new URL(url));
  }
  const { hostname, pathname, port, protocol, search } = url;
  let query;
  if (search) {
    query = parseQueryString(search);
  }
  return {
    hostname,
    port: port ? parseInt(port) : void 0,
    protocol,
    path: pathname,
    query
  };
}, "parseUrl");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js
var toEndpointV1 = /* @__PURE__ */ __name((endpoint) => {
  if (typeof endpoint === "object") {
    if ("url" in endpoint) {
      return parseUrl(endpoint.url);
    }
    return endpoint;
  }
  return parseUrl(endpoint);
}, "toEndpointV1");

// node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js
var getEndpointFromInstructions = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig, context2) => {
  if (!clientConfig.endpoint) {
    let endpointFromConfig;
    if (clientConfig.serviceConfiguredEndpoint) {
      endpointFromConfig = await clientConfig.serviceConfiguredEndpoint();
    } else {
      endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId);
    }
    if (endpointFromConfig) {
      clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
    }
  }
  const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
  if (typeof clientConfig.endpointProvider !== "function") {
    throw new Error("config.endpointProvider is not set.");
  }
  const endpoint = clientConfig.endpointProvider(endpointParams, context2);
  return endpoint;
}, "getEndpointFromInstructions");
var resolveParams = /* @__PURE__ */ __name(async (commandInput, instructionsSupplier, clientConfig) => {
  const endpointParams = {};
  const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
  for (const [name, instruction] of Object.entries(instructions)) {
    switch (instruction.type) {
      case "staticContextParams":
        endpointParams[name] = instruction.value;
        break;
      case "contextParams":
        endpointParams[name] = commandInput[instruction.name];
        break;
      case "clientContextParams":
      case "builtInParams":
        endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
        break;
      case "operationContextParams":
        endpointParams[name] = instruction.get(commandInput);
        break;
      default:
        throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
    }
  }
  if (Object.keys(instructions).length === 0) {
    Object.assign(endpointParams, clientConfig);
  }
  if (String(clientConfig.serviceId).toLowerCase() === "s3") {
    await resolveParamsForS3(endpointParams);
  }
  return endpointParams;
}, "resolveParams");

// node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var endpointMiddleware = /* @__PURE__ */ __name(({ config: config2, instructions }) => {
  return (next, context2) => async (args) => {
    if (config2.endpoint) {
      setFeature(context2, "ENDPOINT_OVERRIDE", "N");
    }
    const endpoint = await getEndpointFromInstructions(args.input, {
      getEndpointParameterInstructions() {
        return instructions;
      }
    }, { ...config2 }, context2);
    context2.endpointV2 = endpoint;
    context2.authSchemes = endpoint.properties?.authSchemes;
    const authScheme = context2.authSchemes?.[0];
    if (authScheme) {
      context2["signing_region"] = authScheme.signingRegion;
      context2["signing_service"] = authScheme.signingName;
      const smithyContext = getSmithyContext(context2);
      const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
      if (httpAuthOption) {
        httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
          signing_region: authScheme.signingRegion,
          signingRegion: authScheme.signingRegion,
          signing_service: authScheme.signingName,
          signingName: authScheme.signingName,
          signingRegionSet: authScheme.signingRegionSet
        }, authScheme.properties);
      }
    }
    return next({
      ...args
    });
  };
}, "endpointMiddleware");

// node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var endpointMiddlewareOptions = {
  step: "serialize",
  tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
  name: "endpointV2Middleware",
  override: true,
  relation: "before",
  toMiddleware: serializerMiddlewareOption.name
};
var getEndpointPlugin = /* @__PURE__ */ __name((config2, instructions) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.addRelativeTo(endpointMiddleware({
      config: config2,
      instructions
    }), endpointMiddlewareOptions);
  }, "applyToStack")
}), "getEndpointPlugin");

// node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var resolveEndpointConfig = /* @__PURE__ */ __name((input) => {
  const tls = input.tls ?? true;
  const { endpoint, useDualstackEndpoint, useFipsEndpoint } = input;
  const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await normalizeProvider(endpoint)()) : void 0;
  const isCustomEndpoint = !!endpoint;
  const resolvedConfig = Object.assign(input, {
    endpoint: customEndpointProvider,
    tls,
    isCustomEndpoint,
    useDualstackEndpoint: normalizeProvider(useDualstackEndpoint ?? false),
    useFipsEndpoint: normalizeProvider(useFipsEndpoint ?? false)
  });
  let configuredEndpointPromise = void 0;
  resolvedConfig.serviceConfiguredEndpoint = async () => {
    if (input.serviceId && !configuredEndpointPromise) {
      configuredEndpointPromise = getEndpointFromConfig(input.serviceId);
    }
    return configuredEndpointPromise;
  };
  return resolvedConfig;
}, "resolveEndpointConfig");

// node_modules/@smithy/middleware-endpoint/dist-es/types.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-retry/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-retry/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-retry/dist-es/config.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var RETRY_MODES;
(function(RETRY_MODES2) {
  RETRY_MODES2["STANDARD"] = "standard";
  RETRY_MODES2["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
var DEFAULT_MAX_ATTEMPTS = 3;
var DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

// node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/service-error-classification/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/service-error-classification/dist-es/constants.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var THROTTLING_ERROR_CODES = [
  "BandwidthLimitExceeded",
  "EC2ThrottledException",
  "LimitExceededException",
  "PriorRequestNotComplete",
  "ProvisionedThroughputExceededException",
  "RequestLimitExceeded",
  "RequestThrottled",
  "RequestThrottledException",
  "SlowDown",
  "ThrottledException",
  "Throttling",
  "ThrottlingException",
  "TooManyRequestsException",
  "TransactionInProgressException"
];
var TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
var TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
var NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];

// node_modules/@smithy/service-error-classification/dist-es/index.js
var isClockSkewCorrectedError = /* @__PURE__ */ __name((error3) => error3.$metadata?.clockSkewCorrected, "isClockSkewCorrectedError");
var isBrowserNetworkError = /* @__PURE__ */ __name((error3) => {
  const errorMessages = /* @__PURE__ */ new Set([
    "Failed to fetch",
    "NetworkError when attempting to fetch resource",
    "The Internet connection appears to be offline",
    "Load failed",
    "Network request failed"
  ]);
  const isValid = error3 && error3 instanceof TypeError;
  if (!isValid) {
    return false;
  }
  return errorMessages.has(error3.message);
}, "isBrowserNetworkError");
var isThrottlingError = /* @__PURE__ */ __name((error3) => error3.$metadata?.httpStatusCode === 429 || THROTTLING_ERROR_CODES.includes(error3.name) || error3.$retryable?.throttling == true, "isThrottlingError");
var isTransientError = /* @__PURE__ */ __name((error3, depth = 0) => isClockSkewCorrectedError(error3) || TRANSIENT_ERROR_CODES.includes(error3.name) || NODEJS_TIMEOUT_ERROR_CODES.includes(error3?.code || "") || TRANSIENT_ERROR_STATUS_CODES.includes(error3.$metadata?.httpStatusCode || 0) || isBrowserNetworkError(error3) || error3.cause !== void 0 && depth <= 10 && isTransientError(error3.cause, depth + 1), "isTransientError");
var isServerError = /* @__PURE__ */ __name((error3) => {
  if (error3.$metadata?.httpStatusCode !== void 0) {
    const statusCode = error3.$metadata.httpStatusCode;
    if (500 <= statusCode && statusCode <= 599 && !isTransientError(error3)) {
      return true;
    }
    return false;
  }
  return false;
}, "isServerError");

// node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js
var DefaultRateLimiter = class _DefaultRateLimiter {
  static {
    __name(this, "DefaultRateLimiter");
  }
  constructor(options) {
    this.currentCapacity = 0;
    this.enabled = false;
    this.lastMaxRate = 0;
    this.measuredTxRate = 0;
    this.requestCount = 0;
    this.lastTimestamp = 0;
    this.timeWindow = 0;
    this.beta = options?.beta ?? 0.7;
    this.minCapacity = options?.minCapacity ?? 1;
    this.minFillRate = options?.minFillRate ?? 0.5;
    this.scaleConstant = options?.scaleConstant ?? 0.4;
    this.smooth = options?.smooth ?? 0.8;
    const currentTimeInSeconds = this.getCurrentTimeInSeconds();
    this.lastThrottleTime = currentTimeInSeconds;
    this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
    this.fillRate = this.minFillRate;
    this.maxCapacity = this.minCapacity;
  }
  getCurrentTimeInSeconds() {
    return Date.now() / 1e3;
  }
  async getSendToken() {
    return this.acquireTokenBucket(1);
  }
  async acquireTokenBucket(amount) {
    if (!this.enabled) {
      return;
    }
    this.refillTokenBucket();
    if (amount > this.currentCapacity) {
      const delay = (amount - this.currentCapacity) / this.fillRate * 1e3;
      await new Promise((resolve) => _DefaultRateLimiter.setTimeoutFn(resolve, delay));
    }
    this.currentCapacity = this.currentCapacity - amount;
  }
  refillTokenBucket() {
    const timestamp = this.getCurrentTimeInSeconds();
    if (!this.lastTimestamp) {
      this.lastTimestamp = timestamp;
      return;
    }
    const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
    this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
    this.lastTimestamp = timestamp;
  }
  updateClientSendingRate(response) {
    let calculatedRate;
    this.updateMeasuredRate();
    if (isThrottlingError(response)) {
      const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
      this.lastMaxRate = rateToUse;
      this.calculateTimeWindow();
      this.lastThrottleTime = this.getCurrentTimeInSeconds();
      calculatedRate = this.cubicThrottle(rateToUse);
      this.enableTokenBucket();
    } else {
      this.calculateTimeWindow();
      calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
    }
    const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
    this.updateTokenBucketRate(newRate);
  }
  calculateTimeWindow() {
    this.timeWindow = this.getPrecise(Math.pow(this.lastMaxRate * (1 - this.beta) / this.scaleConstant, 1 / 3));
  }
  cubicThrottle(rateToUse) {
    return this.getPrecise(rateToUse * this.beta);
  }
  cubicSuccess(timestamp) {
    return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
  }
  enableTokenBucket() {
    this.enabled = true;
  }
  updateTokenBucketRate(newRate) {
    this.refillTokenBucket();
    this.fillRate = Math.max(newRate, this.minFillRate);
    this.maxCapacity = Math.max(newRate, this.minCapacity);
    this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
  }
  updateMeasuredRate() {
    const t3 = this.getCurrentTimeInSeconds();
    const timeBucket = Math.floor(t3 * 2) / 2;
    this.requestCount++;
    if (timeBucket > this.lastTxRateBucket) {
      const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
      this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
      this.requestCount = 0;
      this.lastTxRateBucket = timeBucket;
    }
  }
  getPrecise(num) {
    return parseFloat(num.toFixed(8));
  }
};
DefaultRateLimiter.setTimeoutFn = setTimeout;

// node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-retry/dist-es/constants.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_RETRY_DELAY_BASE = 100;
var MAXIMUM_RETRY_DELAY = 20 * 1e3;
var THROTTLING_RETRY_DELAY_BASE = 500;
var INITIAL_RETRY_TOKENS = 500;
var RETRY_COST = 5;
var TIMEOUT_RETRY_COST = 10;
var NO_RETRY_INCREMENT = 1;
var INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
var REQUEST_HEADER = "amz-sdk-request";

// node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getDefaultRetryBackoffStrategy = /* @__PURE__ */ __name(() => {
  let delayBase = DEFAULT_RETRY_DELAY_BASE;
  const computeNextBackoffDelay = /* @__PURE__ */ __name((attempts) => {
    return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
  }, "computeNextBackoffDelay");
  const setDelayBase = /* @__PURE__ */ __name((delay) => {
    delayBase = delay;
  }, "setDelayBase");
  return {
    computeNextBackoffDelay,
    setDelayBase
  };
}, "getDefaultRetryBackoffStrategy");

// node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var createDefaultRetryToken = /* @__PURE__ */ __name(({ retryDelay, retryCount, retryCost }) => {
  const getRetryCount = /* @__PURE__ */ __name(() => retryCount, "getRetryCount");
  const getRetryDelay = /* @__PURE__ */ __name(() => Math.min(MAXIMUM_RETRY_DELAY, retryDelay), "getRetryDelay");
  const getRetryCost = /* @__PURE__ */ __name(() => retryCost, "getRetryCost");
  return {
    getRetryCount,
    getRetryDelay,
    getRetryCost
  };
}, "createDefaultRetryToken");

// node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js
var StandardRetryStrategy = class {
  static {
    __name(this, "StandardRetryStrategy");
  }
  constructor(maxAttempts) {
    this.maxAttempts = maxAttempts;
    this.mode = RETRY_MODES.STANDARD;
    this.capacity = INITIAL_RETRY_TOKENS;
    this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
    this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
  }
  async acquireInitialRetryToken(retryTokenScope) {
    return createDefaultRetryToken({
      retryDelay: DEFAULT_RETRY_DELAY_BASE,
      retryCount: 0
    });
  }
  async refreshRetryTokenForRetry(token, errorInfo) {
    const maxAttempts = await this.getMaxAttempts();
    if (this.shouldRetry(token, errorInfo, maxAttempts)) {
      const errorType = errorInfo.errorType;
      this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
      const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
      const retryDelay = errorInfo.retryAfterHint ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType) : delayFromErrorType;
      const capacityCost = this.getCapacityCost(errorType);
      this.capacity -= capacityCost;
      return createDefaultRetryToken({
        retryDelay,
        retryCount: token.getRetryCount() + 1,
        retryCost: capacityCost
      });
    }
    throw new Error("No retry token available");
  }
  recordSuccess(token) {
    this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
  }
  getCapacity() {
    return this.capacity;
  }
  async getMaxAttempts() {
    try {
      return await this.maxAttemptsProvider();
    } catch (error3) {
      console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
      return DEFAULT_MAX_ATTEMPTS;
    }
  }
  shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
    const attempts = tokenToRenew.getRetryCount() + 1;
    return attempts < maxAttempts && this.capacity >= this.getCapacityCost(errorInfo.errorType) && this.isRetryableError(errorInfo.errorType);
  }
  getCapacityCost(errorType) {
    return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
  }
  isRetryableError(errorType) {
    return errorType === "THROTTLING" || errorType === "TRANSIENT";
  }
};

// node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js
var AdaptiveRetryStrategy = class {
  static {
    __name(this, "AdaptiveRetryStrategy");
  }
  constructor(maxAttemptsProvider, options) {
    this.maxAttemptsProvider = maxAttemptsProvider;
    this.mode = RETRY_MODES.ADAPTIVE;
    const { rateLimiter } = options ?? {};
    this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
    this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
  }
  async acquireInitialRetryToken(retryTokenScope) {
    await this.rateLimiter.getSendToken();
    return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
  }
  async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
    this.rateLimiter.updateClientSendingRate(errorInfo);
    return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
  }
  recordSuccess(token) {
    this.rateLimiter.updateClientSendingRate({});
    this.standardRetryStrategy.recordSuccess(token);
  }
};

// node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-retry/dist-es/types.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/uuid/dist/esm-browser/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/uuid/dist/esm-browser/rng.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
__name(rng, "rng");

// node_modules/uuid/dist/esm-browser/stringify.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var byteToHex = [];
for (let i3 = 0; i3 < 256; ++i3) {
  byteToHex.push((i3 + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
__name(unsafeStringify, "unsafeStringify");

// node_modules/uuid/dist/esm-browser/v4.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/uuid/dist/esm-browser/native.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var native_default = {
  randomUUID
};

// node_modules/uuid/dist/esm-browser/v4.js
function v4(options, buf, offset) {
  if (native_default.randomUUID && !buf && !options) {
    return native_default.randomUUID();
  }
  options = options || {};
  const rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    offset = offset || 0;
    for (let i3 = 0; i3 < 16; ++i3) {
      buf[offset + i3] = rnds[i3];
    }
    return buf;
  }
  return unsafeStringify(rnds);
}
__name(v4, "v4");
var v4_default = v4;

// node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-retry/dist-es/delayDecider.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-retry/dist-es/retryDecider.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-retry/dist-es/util.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var asSdkError = /* @__PURE__ */ __name((error3) => {
  if (error3 instanceof Error)
    return error3;
  if (error3 instanceof Object)
    return Object.assign(new Error(), error3);
  if (typeof error3 === "string")
    return new Error(error3);
  return new Error(`AWS SDK error wrapper for ${error3}`);
}, "asSdkError");

// node_modules/@smithy/middleware-retry/dist-es/configurations.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var resolveRetryConfig = /* @__PURE__ */ __name((input) => {
  const { retryStrategy, retryMode: _retryMode, maxAttempts: _maxAttempts } = input;
  const maxAttempts = normalizeProvider(_maxAttempts ?? DEFAULT_MAX_ATTEMPTS);
  return Object.assign(input, {
    maxAttempts,
    retryStrategy: /* @__PURE__ */ __name(async () => {
      if (retryStrategy) {
        return retryStrategy;
      }
      const retryMode = await normalizeProvider(_retryMode)();
      if (retryMode === RETRY_MODES.ADAPTIVE) {
        return new AdaptiveRetryStrategy(maxAttempts);
      }
      return new StandardRetryStrategy(maxAttempts);
    }, "retryStrategy")
  });
}, "resolveRetryConfig");

// node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var isStreamingPayload = /* @__PURE__ */ __name((request) => request?.body instanceof ReadableStream, "isStreamingPayload");

// node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js
var retryMiddleware = /* @__PURE__ */ __name((options) => (next, context2) => async (args) => {
  let retryStrategy = await options.retryStrategy();
  const maxAttempts = await options.maxAttempts();
  if (isRetryStrategyV2(retryStrategy)) {
    retryStrategy = retryStrategy;
    let retryToken = await retryStrategy.acquireInitialRetryToken(context2["partition_id"]);
    let lastError = new Error();
    let attempts = 0;
    let totalRetryDelay = 0;
    const { request } = args;
    const isRequest = HttpRequest.isInstance(request);
    if (isRequest) {
      request.headers[INVOCATION_ID_HEADER] = v4_default();
    }
    while (true) {
      try {
        if (isRequest) {
          request.headers[REQUEST_HEADER] = `attempt=${attempts + 1}; max=${maxAttempts}`;
        }
        const { response, output } = await next(args);
        retryStrategy.recordSuccess(retryToken);
        output.$metadata.attempts = attempts + 1;
        output.$metadata.totalRetryDelay = totalRetryDelay;
        return { response, output };
      } catch (e3) {
        const retryErrorInfo = getRetryErrorInfo(e3);
        lastError = asSdkError(e3);
        if (isRequest && isStreamingPayload(request)) {
          (context2.logger instanceof NoOpLogger ? console : context2.logger)?.warn("An error was encountered in a non-retryable streaming request.");
          throw lastError;
        }
        try {
          retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
        } catch (refreshError) {
          if (!lastError.$metadata) {
            lastError.$metadata = {};
          }
          lastError.$metadata.attempts = attempts + 1;
          lastError.$metadata.totalRetryDelay = totalRetryDelay;
          throw lastError;
        }
        attempts = retryToken.getRetryCount();
        const delay = retryToken.getRetryDelay();
        totalRetryDelay += delay;
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  } else {
    retryStrategy = retryStrategy;
    if (retryStrategy?.mode)
      context2.userAgent = [...context2.userAgent || [], ["cfg/retry-mode", retryStrategy.mode]];
    return retryStrategy.retry(next, args);
  }
}, "retryMiddleware");
var isRetryStrategyV2 = /* @__PURE__ */ __name((retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" && typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" && typeof retryStrategy.recordSuccess !== "undefined", "isRetryStrategyV2");
var getRetryErrorInfo = /* @__PURE__ */ __name((error3) => {
  const errorInfo = {
    error: error3,
    errorType: getRetryErrorType(error3)
  };
  const retryAfterHint = getRetryAfterHint(error3.$response);
  if (retryAfterHint) {
    errorInfo.retryAfterHint = retryAfterHint;
  }
  return errorInfo;
}, "getRetryErrorInfo");
var getRetryErrorType = /* @__PURE__ */ __name((error3) => {
  if (isThrottlingError(error3))
    return "THROTTLING";
  if (isTransientError(error3))
    return "TRANSIENT";
  if (isServerError(error3))
    return "SERVER_ERROR";
  return "CLIENT_ERROR";
}, "getRetryErrorType");
var retryMiddlewareOptions = {
  name: "retryMiddleware",
  tags: ["RETRY"],
  step: "finalizeRequest",
  priority: "high",
  override: true
};
var getRetryPlugin = /* @__PURE__ */ __name((options) => ({
  applyToStack: /* @__PURE__ */ __name((clientStack) => {
    clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
  }, "applyToStack")
}), "getRetryPlugin");
var getRetryAfterHint = /* @__PURE__ */ __name((response) => {
  if (!HttpResponse.isInstance(response))
    return;
  const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
  if (!retryAfterHeaderName)
    return;
  const retryAfter = response.headers[retryAfterHeaderName];
  const retryAfterSeconds = Number(retryAfter);
  if (!Number.isNaN(retryAfterSeconds))
    return new Date(retryAfterSeconds * 1e3);
  const retryAfterDate = new Date(retryAfter);
  return retryAfterDate;
}, "getRetryAfterHint");

// node_modules/@aws-sdk/client-ec2/dist-es/auth/httpAuthSchemeProvider.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var defaultEC2HttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config2, context2, input) => {
  return {
    operation: getSmithyContext(context2).operation,
    region: await normalizeProvider(config2.region)() || (() => {
      throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  };
}, "defaultEC2HttpAuthSchemeParametersProvider");
function createAwsAuthSigv4HttpAuthOption(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "ec2",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config2, context2) => ({
      signingProperties: {
        config: config2,
        context: context2
      }
    }), "propertiesExtractor")
  };
}
__name(createAwsAuthSigv4HttpAuthOption, "createAwsAuthSigv4HttpAuthOption");
var defaultEC2HttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
  const options = [];
  switch (authParameters.operation) {
    default: {
      options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
    }
  }
  return options;
}, "defaultEC2HttpAuthSchemeProvider");
var resolveHttpAuthSchemeConfig = /* @__PURE__ */ __name((config2) => {
  const config_0 = resolveAwsSdkSigV4Config(config2);
  return Object.assign(config_0, {
    authSchemePreference: normalizeProvider(config2.authSchemePreference ?? [])
  });
}, "resolveHttpAuthSchemeConfig");

// node_modules/@aws-sdk/client-ec2/dist-es/endpoint/EndpointParameters.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var resolveClientEndpointParameters = /* @__PURE__ */ __name((options) => {
  return Object.assign(options, {
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "ec2"
  });
}, "resolveClientEndpointParameters");
var commonParams = {
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
};

// node_modules/@aws-sdk/client-ec2/dist-es/runtimeConfig.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-ec2/package.json
var package_default = {
  name: "@aws-sdk/client-ec2",
  description: "AWS SDK for JavaScript Ec2 Client for Node.js, Browser and React Native",
  version: "3.819.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "node ../../scripts/compilation/inline client-ec2",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo ec2"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/core": "3.816.0",
    "@aws-sdk/credential-provider-node": "3.817.0",
    "@aws-sdk/middleware-host-header": "3.804.0",
    "@aws-sdk/middleware-logger": "3.804.0",
    "@aws-sdk/middleware-recursion-detection": "3.804.0",
    "@aws-sdk/middleware-sdk-ec2": "3.810.0",
    "@aws-sdk/middleware-user-agent": "3.816.0",
    "@aws-sdk/region-config-resolver": "3.808.0",
    "@aws-sdk/types": "3.804.0",
    "@aws-sdk/util-endpoints": "3.808.0",
    "@aws-sdk/util-user-agent-browser": "3.804.0",
    "@aws-sdk/util-user-agent-node": "3.816.0",
    "@smithy/config-resolver": "^4.1.2",
    "@smithy/core": "^3.3.3",
    "@smithy/fetch-http-handler": "^5.0.2",
    "@smithy/hash-node": "^4.0.2",
    "@smithy/invalid-dependency": "^4.0.2",
    "@smithy/middleware-content-length": "^4.0.2",
    "@smithy/middleware-endpoint": "^4.1.6",
    "@smithy/middleware-retry": "^4.1.7",
    "@smithy/middleware-serde": "^4.0.5",
    "@smithy/middleware-stack": "^4.0.2",
    "@smithy/node-config-provider": "^4.1.1",
    "@smithy/node-http-handler": "^4.0.4",
    "@smithy/protocol-http": "^5.1.0",
    "@smithy/smithy-client": "^4.2.6",
    "@smithy/types": "^4.2.0",
    "@smithy/url-parser": "^4.0.2",
    "@smithy/util-base64": "^4.0.0",
    "@smithy/util-body-length-browser": "^4.0.0",
    "@smithy/util-body-length-node": "^4.0.0",
    "@smithy/util-defaults-mode-browser": "^4.0.14",
    "@smithy/util-defaults-mode-node": "^4.0.14",
    "@smithy/util-endpoints": "^3.0.4",
    "@smithy/util-middleware": "^4.0.2",
    "@smithy/util-retry": "^4.0.3",
    "@smithy/util-utf8": "^4.0.0",
    "@smithy/util-waiter": "^4.0.3",
    "@types/uuid": "^9.0.1",
    tslib: "^2.6.2",
    uuid: "^9.0.1"
  },
  devDependencies: {
    "@tsconfig/node18": "18.2.4",
    "@types/node": "^18.19.69",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typescript: "~5.8.3"
  },
  engines: {
    node: ">=18.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-ec2",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-ec2"
  }
};

// node_modules/@aws-crypto/sha256-browser/build/module/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/util/build/module/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/util/build/module/convertToBuffer.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/fromUtf8.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var fromUtf82 = /* @__PURE__ */ __name((input) => new TextEncoder().encode(input), "fromUtf8");

// node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/toUint8Array.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/util/node_modules/@smithy/util-utf8/dist-es/toUtf8.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/util/build/module/convertToBuffer.js
var fromUtf83 = typeof Buffer !== "undefined" && Buffer.from ? function(input) {
  return Buffer.from(input, "utf8");
} : fromUtf82;
function convertToBuffer(data) {
  if (data instanceof Uint8Array)
    return data;
  if (typeof data === "string") {
    return fromUtf83(data);
  }
  if (ArrayBuffer.isView(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
  }
  return new Uint8Array(data);
}
__name(convertToBuffer, "convertToBuffer");

// node_modules/@aws-crypto/util/build/module/isEmptyData.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function isEmptyData(data) {
  if (typeof data === "string") {
    return data.length === 0;
  }
  return data.byteLength === 0;
}
__name(isEmptyData, "isEmptyData");

// node_modules/@aws-crypto/util/build/module/numToUint8.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/util/build/module/uint32ArrayFrom.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/sha256-browser/build/module/constants.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var SHA_256_HASH = { name: "SHA-256" };
var SHA_256_HMAC_ALGO = {
  name: "HMAC",
  hash: SHA_256_HASH
};
var EMPTY_DATA_SHA_256 = new Uint8Array([
  227,
  176,
  196,
  66,
  152,
  252,
  28,
  20,
  154,
  251,
  244,
  200,
  153,
  111,
  185,
  36,
  39,
  174,
  65,
  228,
  100,
  155,
  147,
  76,
  164,
  149,
  153,
  27,
  120,
  82,
  184,
  85
]);

// node_modules/@aws-sdk/util-locate-window/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var fallbackWindow = {};
function locateWindow() {
  if (typeof window !== "undefined") {
    return window;
  } else if (typeof self !== "undefined") {
    return self;
  }
  return fallbackWindow;
}
__name(locateWindow, "locateWindow");

// node_modules/@aws-crypto/sha256-browser/build/module/webCryptoSha256.js
var Sha256 = (
  /** @class */
  function() {
    function Sha2564(secret) {
      this.toHash = new Uint8Array(0);
      this.secret = secret;
      this.reset();
    }
    __name(Sha2564, "Sha256");
    Sha2564.prototype.update = function(data) {
      if (isEmptyData(data)) {
        return;
      }
      var update = convertToBuffer(data);
      var typedArray = new Uint8Array(this.toHash.byteLength + update.byteLength);
      typedArray.set(this.toHash, 0);
      typedArray.set(update, this.toHash.byteLength);
      this.toHash = typedArray;
    };
    Sha2564.prototype.digest = function() {
      var _this = this;
      if (this.key) {
        return this.key.then(function(key) {
          return locateWindow().crypto.subtle.sign(SHA_256_HMAC_ALGO, key, _this.toHash).then(function(data) {
            return new Uint8Array(data);
          });
        });
      }
      if (isEmptyData(this.toHash)) {
        return Promise.resolve(EMPTY_DATA_SHA_256);
      }
      return Promise.resolve().then(function() {
        return locateWindow().crypto.subtle.digest(SHA_256_HASH, _this.toHash);
      }).then(function(data) {
        return Promise.resolve(new Uint8Array(data));
      });
    };
    Sha2564.prototype.reset = function() {
      var _this = this;
      this.toHash = new Uint8Array(0);
      if (this.secret && this.secret !== void 0) {
        this.key = new Promise(function(resolve, reject) {
          locateWindow().crypto.subtle.importKey("raw", convertToBuffer(_this.secret), SHA_256_HMAC_ALGO, false, ["sign"]).then(resolve, reject);
        });
        this.key.catch(function() {
        });
      }
    };
    return Sha2564;
  }()
);

// node_modules/@aws-crypto/sha256-js/build/module/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/tslib/tslib.es6.mjs
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e3) {
        reject(e3);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e3) {
        reject(e3);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
__name(__awaiter, "__awaiter");
function __generator(thisArg, body) {
  var _3 = { label: 0, sent: /* @__PURE__ */ __name(function() {
    if (t3[0] & 1) throw t3[1];
    return t3[1];
  }, "sent"), trys: [], ops: [] }, f3, y, t3, g3 = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g3.next = verb(0), g3["throw"] = verb(1), g3["return"] = verb(2), typeof Symbol === "function" && (g3[Symbol.iterator] = function() {
    return this;
  }), g3;
  function verb(n3) {
    return function(v3) {
      return step([n3, v3]);
    };
  }
  __name(verb, "verb");
  function step(op) {
    if (f3) throw new TypeError("Generator is already executing.");
    while (g3 && (g3 = 0, op[0] && (_3 = 0)), _3) try {
      if (f3 = 1, y && (t3 = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t3 = y["return"]) && t3.call(y), 0) : y.next) && !(t3 = t3.call(y, op[1])).done) return t3;
      if (y = 0, t3) op = [op[0] & 2, t3.value];
      switch (op[0]) {
        case 0:
        case 1:
          t3 = op;
          break;
        case 4:
          _3.label++;
          return { value: op[1], done: false };
        case 5:
          _3.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _3.ops.pop();
          _3.trys.pop();
          continue;
        default:
          if (!(t3 = _3.trys, t3 = t3.length > 0 && t3[t3.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _3 = 0;
            continue;
          }
          if (op[0] === 3 && (!t3 || op[1] > t3[0] && op[1] < t3[3])) {
            _3.label = op[1];
            break;
          }
          if (op[0] === 6 && _3.label < t3[1]) {
            _3.label = t3[1];
            t3 = op;
            break;
          }
          if (t3 && _3.label < t3[2]) {
            _3.label = t3[2];
            _3.ops.push(op);
            break;
          }
          if (t3[2]) _3.ops.pop();
          _3.trys.pop();
          continue;
      }
      op = body.call(thisArg, _3);
    } catch (e3) {
      op = [6, e3];
      y = 0;
    } finally {
      f3 = t3 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
  __name(step, "step");
}
__name(__generator, "__generator");

// node_modules/@aws-crypto/sha256-js/build/module/constants.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var BLOCK_SIZE = 64;
var DIGEST_LENGTH = 32;
var KEY = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
var INIT = [
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
];
var MAX_HASHABLE_LENGTH = Math.pow(2, 53) - 1;

// node_modules/@aws-crypto/sha256-js/build/module/RawSha256.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var RawSha256 = (
  /** @class */
  function() {
    function RawSha2562() {
      this.state = Int32Array.from(INIT);
      this.temp = new Int32Array(64);
      this.buffer = new Uint8Array(64);
      this.bufferLength = 0;
      this.bytesHashed = 0;
      this.finished = false;
    }
    __name(RawSha2562, "RawSha256");
    RawSha2562.prototype.update = function(data) {
      if (this.finished) {
        throw new Error("Attempted to update an already finished hash.");
      }
      var position = 0;
      var byteLength = data.byteLength;
      this.bytesHashed += byteLength;
      if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
        throw new Error("Cannot hash more than 2^53 - 1 bits");
      }
      while (byteLength > 0) {
        this.buffer[this.bufferLength++] = data[position++];
        byteLength--;
        if (this.bufferLength === BLOCK_SIZE) {
          this.hashBuffer();
          this.bufferLength = 0;
        }
      }
    };
    RawSha2562.prototype.digest = function() {
      if (!this.finished) {
        var bitsHashed = this.bytesHashed * 8;
        var bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
        var undecoratedLength = this.bufferLength;
        bufferView.setUint8(this.bufferLength++, 128);
        if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
          for (var i3 = this.bufferLength; i3 < BLOCK_SIZE; i3++) {
            bufferView.setUint8(i3, 0);
          }
          this.hashBuffer();
          this.bufferLength = 0;
        }
        for (var i3 = this.bufferLength; i3 < BLOCK_SIZE - 8; i3++) {
          bufferView.setUint8(i3, 0);
        }
        bufferView.setUint32(BLOCK_SIZE - 8, Math.floor(bitsHashed / 4294967296), true);
        bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);
        this.hashBuffer();
        this.finished = true;
      }
      var out = new Uint8Array(DIGEST_LENGTH);
      for (var i3 = 0; i3 < 8; i3++) {
        out[i3 * 4] = this.state[i3] >>> 24 & 255;
        out[i3 * 4 + 1] = this.state[i3] >>> 16 & 255;
        out[i3 * 4 + 2] = this.state[i3] >>> 8 & 255;
        out[i3 * 4 + 3] = this.state[i3] >>> 0 & 255;
      }
      return out;
    };
    RawSha2562.prototype.hashBuffer = function() {
      var _a = this, buffer = _a.buffer, state = _a.state;
      var state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
      for (var i3 = 0; i3 < BLOCK_SIZE; i3++) {
        if (i3 < 16) {
          this.temp[i3] = (buffer[i3 * 4] & 255) << 24 | (buffer[i3 * 4 + 1] & 255) << 16 | (buffer[i3 * 4 + 2] & 255) << 8 | buffer[i3 * 4 + 3] & 255;
        } else {
          var u3 = this.temp[i3 - 2];
          var t1_1 = (u3 >>> 17 | u3 << 15) ^ (u3 >>> 19 | u3 << 13) ^ u3 >>> 10;
          u3 = this.temp[i3 - 15];
          var t2_1 = (u3 >>> 7 | u3 << 25) ^ (u3 >>> 18 | u3 << 14) ^ u3 >>> 3;
          this.temp[i3] = (t1_1 + this.temp[i3 - 7] | 0) + (t2_1 + this.temp[i3 - 16] | 0);
        }
        var t1 = (((state4 >>> 6 | state4 << 26) ^ (state4 >>> 11 | state4 << 21) ^ (state4 >>> 25 | state4 << 7)) + (state4 & state5 ^ ~state4 & state6) | 0) + (state7 + (KEY[i3] + this.temp[i3] | 0) | 0) | 0;
        var t22 = ((state0 >>> 2 | state0 << 30) ^ (state0 >>> 13 | state0 << 19) ^ (state0 >>> 22 | state0 << 10)) + (state0 & state1 ^ state0 & state2 ^ state1 & state2) | 0;
        state7 = state6;
        state6 = state5;
        state5 = state4;
        state4 = state3 + t1 | 0;
        state3 = state2;
        state2 = state1;
        state1 = state0;
        state0 = t1 + t22 | 0;
      }
      state[0] += state0;
      state[1] += state1;
      state[2] += state2;
      state[3] += state3;
      state[4] += state4;
      state[5] += state5;
      state[6] += state6;
      state[7] += state7;
    };
    return RawSha2562;
  }()
);

// node_modules/@aws-crypto/sha256-js/build/module/jsSha256.js
var Sha2562 = (
  /** @class */
  function() {
    function Sha2564(secret) {
      this.secret = secret;
      this.hash = new RawSha256();
      this.reset();
    }
    __name(Sha2564, "Sha256");
    Sha2564.prototype.update = function(toHash) {
      if (isEmptyData(toHash) || this.error) {
        return;
      }
      try {
        this.hash.update(convertToBuffer(toHash));
      } catch (e3) {
        this.error = e3;
      }
    };
    Sha2564.prototype.digestSync = function() {
      if (this.error) {
        throw this.error;
      }
      if (this.outer) {
        if (!this.outer.finished) {
          this.outer.update(this.hash.digest());
        }
        return this.outer.digest();
      }
      return this.hash.digest();
    };
    Sha2564.prototype.digest = function() {
      return __awaiter(this, void 0, void 0, function() {
        return __generator(this, function(_a) {
          return [2, this.digestSync()];
        });
      });
    };
    Sha2564.prototype.reset = function() {
      this.hash = new RawSha256();
      if (this.secret) {
        this.outer = new RawSha256();
        var inner = bufferFromSecret(this.secret);
        var outer = new Uint8Array(BLOCK_SIZE);
        outer.set(inner);
        for (var i3 = 0; i3 < BLOCK_SIZE; i3++) {
          inner[i3] ^= 54;
          outer[i3] ^= 92;
        }
        this.hash.update(inner);
        this.outer.update(outer);
        for (var i3 = 0; i3 < inner.byteLength; i3++) {
          inner[i3] = 0;
        }
      }
    };
    return Sha2564;
  }()
);
function bufferFromSecret(secret) {
  var input = convertToBuffer(secret);
  if (input.byteLength > BLOCK_SIZE) {
    var bufferHash = new RawSha256();
    bufferHash.update(input);
    input = bufferHash.digest();
  }
  var buffer = new Uint8Array(BLOCK_SIZE);
  buffer.set(input);
  return buffer;
}
__name(bufferFromSecret, "bufferFromSecret");

// node_modules/@aws-crypto/supports-web-crypto/build/module/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-crypto/supports-web-crypto/build/module/supportsWebCrypto.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var subtleCryptoMethods = [
  "decrypt",
  "digest",
  "encrypt",
  "exportKey",
  "generateKey",
  "importKey",
  "sign",
  "verify"
];
function supportsWebCrypto(window2) {
  if (supportsSecureRandom(window2) && typeof window2.crypto.subtle === "object") {
    var subtle = window2.crypto.subtle;
    return supportsSubtleCrypto(subtle);
  }
  return false;
}
__name(supportsWebCrypto, "supportsWebCrypto");
function supportsSecureRandom(window2) {
  if (typeof window2 === "object" && typeof window2.crypto === "object") {
    var getRandomValues2 = window2.crypto.getRandomValues;
    return typeof getRandomValues2 === "function";
  }
  return false;
}
__name(supportsSecureRandom, "supportsSecureRandom");
function supportsSubtleCrypto(subtle) {
  return subtle && subtleCryptoMethods.every(function(methodName) {
    return typeof subtle[methodName] === "function";
  });
}
__name(supportsSubtleCrypto, "supportsSubtleCrypto");

// node_modules/@aws-crypto/sha256-browser/build/module/crossPlatformSha256.js
var Sha2563 = (
  /** @class */
  function() {
    function Sha2564(secret) {
      if (supportsWebCrypto(locateWindow())) {
        this.hash = new Sha256(secret);
      } else {
        this.hash = new Sha2562(secret);
      }
    }
    __name(Sha2564, "Sha256");
    Sha2564.prototype.update = function(data, encoding) {
      this.hash.update(convertToBuffer(data));
    };
    Sha2564.prototype.digest = function() {
      return this.hash.digest();
    };
    Sha2564.prototype.reset = function() {
      this.hash.reset();
    };
    return Sha2564;
  }()
);

// node_modules/@aws-sdk/util-user-agent-browser/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_bowser = __toESM(require_es5());
var createDefaultUserAgentProvider = /* @__PURE__ */ __name(({ serviceId, clientVersion }) => async (config2) => {
  const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent ? import_bowser.default.parse(window.navigator.userAgent) : void 0;
  const sections = [
    ["aws-sdk-js", clientVersion],
    ["ua", "2.1"],
    [`os/${parsedUA?.os?.name || "other"}`, parsedUA?.os?.version],
    ["lang/js"],
    ["md/browser", `${parsedUA?.browser?.name ?? "unknown"}_${parsedUA?.browser?.version ?? "unknown"}`]
  ];
  if (serviceId) {
    sections.push([`api/${serviceId}`, clientVersion]);
  }
  const appId = await config2?.userAgentAppId?.();
  if (appId) {
    sections.push([`app/${appId}`]);
  }
  return sections;
}, "createDefaultUserAgentProvider");

// node_modules/@smithy/invalid-dependency/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/invalid-dependency/dist-es/invalidFunction.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/invalid-dependency/dist-es/invalidProvider.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var invalidProvider = /* @__PURE__ */ __name((message) => () => Promise.reject(message), "invalidProvider");

// node_modules/@smithy/util-body-length-browser/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-body-length-browser/dist-es/calculateBodyLength.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var TEXT_ENCODER = typeof TextEncoder == "function" ? new TextEncoder() : null;
var calculateBodyLength = /* @__PURE__ */ __name((body) => {
  if (typeof body === "string") {
    if (TEXT_ENCODER) {
      return TEXT_ENCODER.encode(body).byteLength;
    }
    let len = body.length;
    for (let i3 = len - 1; i3 >= 0; i3--) {
      const code = body.charCodeAt(i3);
      if (code > 127 && code <= 2047)
        len++;
      else if (code > 2047 && code <= 65535)
        len += 2;
      if (code >= 56320 && code <= 57343)
        i3--;
    }
    return len;
  } else if (typeof body.byteLength === "number") {
    return body.byteLength;
  } else if (typeof body.size === "number") {
    return body.size;
  }
  throw new Error(`Body Length computation failed for ${body}`);
}, "calculateBodyLength");

// node_modules/@aws-sdk/client-ec2/dist-es/runtimeConfig.shared.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-ec2/dist-es/endpoint/endpointResolver.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-ec2/dist-es/endpoint/ruleset.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var u = "required";
var v = "fn";
var w = "argv";
var x = "ref";
var a = true;
var b = "isSet";
var c = "booleanEquals";
var d = "error";
var e = "endpoint";
var f = "tree";
var g = "PartitionResult";
var h = "getAttr";
var i = { [u]: false, "type": "String" };
var j = { [u]: true, "default": false, "type": "Boolean" };
var k = { [x]: "Endpoint" };
var l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] };
var m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] };
var n = {};
var o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] };
var p = { [x]: g };
var q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] };
var r = [l];
var s = [m];
var t = [{ [x]: "Region" }];
var _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://ec2-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://ec2.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://ec2-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://ec2.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://ec2.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
var ruleSet = _data;

// node_modules/@aws-sdk/client-ec2/dist-es/endpoint/endpointResolver.js
var cache = new EndpointCache({
  size: 50,
  params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
});
var defaultEndpointResolver = /* @__PURE__ */ __name((endpointParams, context2 = {}) => {
  return cache.get(endpointParams, () => resolveEndpoint(ruleSet, {
    endpointParams,
    logger: context2.logger
  }));
}, "defaultEndpointResolver");
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/client-ec2/dist-es/runtimeConfig.shared.js
var getRuntimeConfig = /* @__PURE__ */ __name((config2) => {
  return {
    apiVersion: "2016-11-15",
    base64Decoder: config2?.base64Decoder ?? fromBase64,
    base64Encoder: config2?.base64Encoder ?? toBase64,
    disableHostPrefix: config2?.disableHostPrefix ?? false,
    endpointProvider: config2?.endpointProvider ?? defaultEndpointResolver,
    extensions: config2?.extensions ?? [],
    httpAuthSchemeProvider: config2?.httpAuthSchemeProvider ?? defaultEC2HttpAuthSchemeProvider,
    httpAuthSchemes: config2?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4"), "identityProvider"),
        signer: new AwsSdkSigV4Signer()
      }
    ],
    logger: config2?.logger ?? new NoOpLogger(),
    serviceId: config2?.serviceId ?? "EC2",
    urlParser: config2?.urlParser ?? parseUrl,
    utf8Decoder: config2?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config2?.utf8Encoder ?? toUtf8
  };
}, "getRuntimeConfig");

// node_modules/@smithy/util-defaults-mode-browser/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var import_bowser2 = __toESM(require_es5());

// node_modules/@smithy/util-defaults-mode-browser/dist-es/constants.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];

// node_modules/@smithy/util-defaults-mode-browser/dist-es/resolveDefaultsModeConfig.js
var resolveDefaultsModeConfig = /* @__PURE__ */ __name(({ defaultsMode } = {}) => memoize(async () => {
  const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
  switch (mode?.toLowerCase()) {
    case "auto":
      return Promise.resolve(isMobileBrowser() ? "mobile" : "standard");
    case "mobile":
    case "in-region":
    case "cross-region":
    case "standard":
    case "legacy":
      return Promise.resolve(mode?.toLocaleLowerCase());
    case void 0:
      return Promise.resolve("legacy");
    default:
      throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
  }
}), "resolveDefaultsModeConfig");
var isMobileBrowser = /* @__PURE__ */ __name(() => {
  const parsedUA = typeof window !== "undefined" && window?.navigator?.userAgent ? import_bowser2.default.parse(window.navigator.userAgent) : void 0;
  const platform2 = parsedUA?.platform?.type;
  return platform2 === "tablet" || platform2 === "mobile";
}, "isMobileBrowser");

// node_modules/@aws-sdk/client-ec2/dist-es/runtimeConfig.browser.js
var getRuntimeConfig2 = /* @__PURE__ */ __name((config2) => {
  const defaultsMode = resolveDefaultsModeConfig(config2);
  const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
  const clientSharedValues = getRuntimeConfig(config2);
  return {
    ...clientSharedValues,
    ...config2,
    runtime: "browser",
    defaultsMode,
    bodyLengthChecker: config2?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config2?.credentialDefaultProvider ?? ((_3) => () => Promise.reject(new Error("Credential is missing"))),
    defaultUserAgentProvider: config2?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default.version }),
    maxAttempts: config2?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    region: config2?.region ?? invalidProvider("Region is missing"),
    requestHandler: FetchHttpHandler.create(config2?.requestHandler ?? defaultConfigProvider),
    retryMode: config2?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    sha256: config2?.sha256 ?? Sha2563,
    streamCollector: config2?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config2?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
    useFipsEndpoint: config2?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-ec2/dist-es/runtimeExtensions.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/region-config-resolver/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getAwsRegionExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  return {
    setRegion(region) {
      runtimeConfig.region = region;
    },
    region() {
      return runtimeConfig.region;
    }
  };
}, "getAwsRegionExtensionConfiguration");
var resolveAwsRegionExtensionConfiguration = /* @__PURE__ */ __name((awsRegionExtensionConfiguration) => {
  return {
    region: awsRegionExtensionConfiguration.region()
  };
}, "resolveAwsRegionExtensionConfiguration");

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/resolveRegionConfig.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/getRealRegion.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/isFipsRegion.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-ec2/dist-es/auth/httpAuthExtensionConfiguration.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getHttpAuthExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
  let _credentials = runtimeConfig.credentials;
  return {
    setHttpAuthScheme(httpAuthScheme) {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes() {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider() {
      return _httpAuthSchemeProvider;
    },
    setCredentials(credentials) {
      _credentials = credentials;
    },
    credentials() {
      return _credentials;
    }
  };
}, "getHttpAuthExtensionConfiguration");
var resolveHttpAuthRuntimeConfig = /* @__PURE__ */ __name((config2) => {
  return {
    httpAuthSchemes: config2.httpAuthSchemes(),
    httpAuthSchemeProvider: config2.httpAuthSchemeProvider(),
    credentials: config2.credentials()
  };
}, "resolveHttpAuthRuntimeConfig");

// node_modules/@aws-sdk/client-ec2/dist-es/runtimeExtensions.js
var resolveRuntimeExtensions = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
  const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration(runtimeConfig));
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig(extensionConfiguration));
}, "resolveRuntimeExtensions");

// node_modules/@aws-sdk/client-ec2/dist-es/EC2Client.js
var EC2Client = class extends Client {
  static {
    __name(this, "EC2Client");
  }
  config;
  constructor(...[configuration]) {
    const _config_0 = getRuntimeConfig2(configuration || {});
    super(_config_0);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
      httpAuthSchemeParametersProvider: defaultEC2HttpAuthSchemeParametersProvider,
      identityProviderConfigProvider: /* @__PURE__ */ __name(async (config2) => new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config2.credentials
      }), "identityProviderConfigProvider")
    }));
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};

// node_modules/@aws-sdk/client-ec2/dist-es/protocols/Aws_ec2.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-ec2/dist-es/models/EC2ServiceException.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var EC2ServiceException = class _EC2ServiceException extends ServiceException {
  static {
    __name(this, "EC2ServiceException");
  }
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _EC2ServiceException.prototype);
  }
};

// node_modules/@aws-sdk/client-ec2/dist-es/protocols/Aws_ec2.js
var se_DescribeInstancesCommand = /* @__PURE__ */ __name(async (input, context2) => {
  const headers = SHARED_HEADERS;
  let body;
  body = buildFormUrlencodedString({
    ...se_DescribeInstancesRequest(input, context2),
    [_A]: _DIesc,
    [_V]: _
  });
  return buildHttpRpcRequest(context2, headers, "/", void 0, body);
}, "se_DescribeInstancesCommand");
var de_DescribeInstancesCommand = /* @__PURE__ */ __name(async (output, context2) => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context2);
  }
  const data = await parseXmlBody(output.body, context2);
  let contents = {};
  contents = de_DescribeInstancesResult(data, context2);
  const response = {
    $metadata: deserializeMetadata2(output),
    ...contents
  };
  return response;
}, "de_DescribeInstancesCommand");
var de_CommandError = /* @__PURE__ */ __name(async (output, context2) => {
  const parsedOutput = {
    ...output,
    body: await parseXmlErrorBody(output.body, context2)
  };
  const errorCode = loadEc2ErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError2({
    output,
    parsedBody: parsedBody.Errors.Error,
    errorCode
  });
}, "de_CommandError");
var se_DescribeInstancesRequest = /* @__PURE__ */ __name((input, context2) => {
  const entries = {};
  if (input[_IIns] != null) {
    const memberEntries = se_InstanceIdStringList(input[_IIns], context2);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InstanceId.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input[_DRr] != null) {
    entries[_DRr] = input[_DRr];
  }
  if (input[_Fi] != null) {
    const memberEntries = se_FilterList(input[_Fi], context2);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Filter.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  return entries;
}, "se_DescribeInstancesRequest");
var se_Filter = /* @__PURE__ */ __name((input, context2) => {
  const entries = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_Val] != null) {
    const memberEntries = se_ValueStringList(input[_Val], context2);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Value.${key.substring(key.indexOf(".") + 1)}`;
      entries[loc] = value;
    });
  }
  return entries;
}, "se_Filter");
var se_FilterList = /* @__PURE__ */ __name((input, context2) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Filter(entry, context2);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`Filter.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
}, "se_FilterList");
var se_InstanceIdStringList = /* @__PURE__ */ __name((input, context2) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`InstanceId.${counter}`] = entry;
    counter++;
  }
  return entries;
}, "se_InstanceIdStringList");
var se_ValueStringList = /* @__PURE__ */ __name((input, context2) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`Item.${counter}`] = entry;
    counter++;
  }
  return entries;
}, "se_ValueStringList");
var de_CapacityReservationSpecificationResponse = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_cRP] != null) {
    contents[_CRP] = expectString(output[_cRP]);
  }
  if (output[_cRT] != null) {
    contents[_CRTa] = de_CapacityReservationTargetResponse(output[_cRT], context2);
  }
  return contents;
}, "de_CapacityReservationSpecificationResponse");
var de_CapacityReservationTargetResponse = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_cRI] != null) {
    contents[_CRI] = expectString(output[_cRI]);
  }
  if (output[_cRRGA] != null) {
    contents[_CRRGA] = expectString(output[_cRRGA]);
  }
  return contents;
}, "de_CapacityReservationTargetResponse");
var de_ConnectionTrackingSpecificationResponse = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_tET] != null) {
    contents[_TET] = strictParseInt32(output[_tET]);
  }
  if (output[_uST] != null) {
    contents[_UST] = strictParseInt32(output[_uST]);
  }
  if (output[_uTd] != null) {
    contents[_UT] = strictParseInt32(output[_uTd]);
  }
  return contents;
}, "de_ConnectionTrackingSpecificationResponse");
var de_CpuOptions = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_cCo] != null) {
    contents[_CC] = strictParseInt32(output[_cCo]);
  }
  if (output[_tPC] != null) {
    contents[_TPC] = strictParseInt32(output[_tPC]);
  }
  if (output[_aSS] != null) {
    contents[_ASS] = expectString(output[_aSS]);
  }
  return contents;
}, "de_CpuOptions");
var de_DescribeInstancesResult = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_nTe] != null) {
    contents[_NT] = expectString(output[_nTe]);
  }
  if (output.reservationSet === "") {
    contents[_Rese] = [];
  } else if (output[_rSes] != null && output[_rSes][_i] != null) {
    contents[_Rese] = de_ReservationList(getArrayIfSingleItem(output[_rSes][_i]), context2);
  }
  return contents;
}, "de_DescribeInstancesResult");
var de_EbsInstanceBlockDevice = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_aTt] != null) {
    contents[_ATtt] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_aTt]));
  }
  if (output[_dOT] != null) {
    contents[_DOT] = parseBoolean(output[_dOT]);
  }
  if (output[_sta] != null) {
    contents[_Statu] = expectString(output[_sta]);
  }
  if (output[_vIo] != null) {
    contents[_VIo] = expectString(output[_vIo]);
  }
  if (output[_aRs] != null) {
    contents[_ARs] = expectString(output[_aRs]);
  }
  if (output[_vOI] != null) {
    contents[_VOI] = expectString(output[_vOI]);
  }
  if (output[_op] != null) {
    contents[_O] = de_OperatorResponse(output[_op], context2);
  }
  return contents;
}, "de_EbsInstanceBlockDevice");
var de_ElasticGpuAssociation = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_eGI] != null) {
    contents[_EGIl] = expectString(output[_eGI]);
  }
  if (output[_eGAI] != null) {
    contents[_EGAI] = expectString(output[_eGAI]);
  }
  if (output[_eGAS] != null) {
    contents[_EGAS] = expectString(output[_eGAS]);
  }
  if (output[_eGAT] != null) {
    contents[_EGAT] = expectString(output[_eGAT]);
  }
  return contents;
}, "de_ElasticGpuAssociation");
var de_ElasticGpuAssociationList = /* @__PURE__ */ __name((output, context2) => {
  return (output || []).filter((e3) => e3 != null).map((entry) => {
    return de_ElasticGpuAssociation(entry, context2);
  });
}, "de_ElasticGpuAssociationList");
var de_ElasticInferenceAcceleratorAssociation = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_eIAA] != null) {
    contents[_EIAA] = expectString(output[_eIAA]);
  }
  if (output[_eIAAI] != null) {
    contents[_EIAAI] = expectString(output[_eIAAI]);
  }
  if (output[_eIAAS] != null) {
    contents[_EIAAS] = expectString(output[_eIAAS]);
  }
  if (output[_eIAAT] != null) {
    contents[_EIAAT] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_eIAAT]));
  }
  return contents;
}, "de_ElasticInferenceAcceleratorAssociation");
var de_ElasticInferenceAcceleratorAssociationList = /* @__PURE__ */ __name((output, context2) => {
  return (output || []).filter((e3) => e3 != null).map((entry) => {
    return de_ElasticInferenceAcceleratorAssociation(entry, context2);
  });
}, "de_ElasticInferenceAcceleratorAssociationList");
var de_EnclaveOptions = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_en] != null) {
    contents[_En] = parseBoolean(output[_en]);
  }
  return contents;
}, "de_EnclaveOptions");
var de_GroupIdentifier = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_gIr] != null) {
    contents[_GIr] = expectString(output[_gIr]);
  }
  if (output[_gN] != null) {
    contents[_GN] = expectString(output[_gN]);
  }
  return contents;
}, "de_GroupIdentifier");
var de_GroupIdentifierList = /* @__PURE__ */ __name((output, context2) => {
  return (output || []).filter((e3) => e3 != null).map((entry) => {
    return de_GroupIdentifier(entry, context2);
  });
}, "de_GroupIdentifierList");
var de_HibernationOptions = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_conf] != null) {
    contents[_Conf] = parseBoolean(output[_conf]);
  }
  return contents;
}, "de_HibernationOptions");
var de_IamInstanceProfile = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_ar] != null) {
    contents[_Ar] = expectString(output[_ar]);
  }
  if (output[_id] != null) {
    contents[_Id] = expectString(output[_id]);
  }
  return contents;
}, "de_IamInstanceProfile");
var de_Instance = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_arc] != null) {
    contents[_Arc] = expectString(output[_arc]);
  }
  if (output.blockDeviceMapping === "") {
    contents[_BDM] = [];
  } else if (output[_bDM] != null && output[_bDM][_i] != null) {
    contents[_BDM] = de_InstanceBlockDeviceMappingList(getArrayIfSingleItem(output[_bDM][_i]), context2);
  }
  if (output[_cT] != null) {
    contents[_CTl] = expectString(output[_cT]);
  }
  if (output[_eO] != null) {
    contents[_EO] = parseBoolean(output[_eO]);
  }
  if (output[_eSna] != null) {
    contents[_ESn] = parseBoolean(output[_eSna]);
  }
  if (output[_h] != null) {
    contents[_H] = expectString(output[_h]);
  }
  if (output[_iIP] != null) {
    contents[_IIP] = de_IamInstanceProfile(output[_iIP], context2);
  }
  if (output[_iLn] != null) {
    contents[_ILn] = expectString(output[_iLn]);
  }
  if (output.elasticGpuAssociationSet === "") {
    contents[_EGA] = [];
  } else if (output[_eGASl] != null && output[_eGASl][_i] != null) {
    contents[_EGA] = de_ElasticGpuAssociationList(getArrayIfSingleItem(output[_eGASl][_i]), context2);
  }
  if (output.elasticInferenceAcceleratorAssociationSet === "") {
    contents[_EIAAl] = [];
  } else if (output[_eIAASl] != null && output[_eIAASl][_i] != null) {
    contents[_EIAAl] = de_ElasticInferenceAcceleratorAssociationList(getArrayIfSingleItem(output[_eIAASl][_i]), context2);
  }
  if (output.networkInterfaceSet === "") {
    contents[_NI] = [];
  } else if (output[_nIS] != null && output[_nIS][_i] != null) {
    contents[_NI] = de_InstanceNetworkInterfaceList(getArrayIfSingleItem(output[_nIS][_i]), context2);
  }
  if (output[_oA] != null) {
    contents[_OA] = expectString(output[_oA]);
  }
  if (output[_rDN] != null) {
    contents[_RDN] = expectString(output[_rDN]);
  }
  if (output[_rDT] != null) {
    contents[_RDT] = expectString(output[_rDT]);
  }
  if (output.groupSet === "") {
    contents[_SG] = [];
  } else if (output[_gS] != null && output[_gS][_i] != null) {
    contents[_SG] = de_GroupIdentifierList(getArrayIfSingleItem(output[_gS][_i]), context2);
  }
  if (output[_sDC] != null) {
    contents[_SDC] = parseBoolean(output[_sDC]);
  }
  if (output[_sIRI] != null) {
    contents[_SIRIp] = expectString(output[_sIRI]);
  }
  if (output[_sNSr] != null) {
    contents[_SNS] = expectString(output[_sNSr]);
  }
  if (output[_sRt] != null) {
    contents[_SRt] = de_StateReason(output[_sRt], context2);
  }
  if (output.tagSet === "") {
    contents[_Ta] = [];
  } else if (output[_tS] != null && output[_tS][_i] != null) {
    contents[_Ta] = de_TagList(getArrayIfSingleItem(output[_tS][_i]), context2);
  }
  if (output[_vTi] != null) {
    contents[_VTir] = expectString(output[_vTi]);
  }
  if (output[_cO] != null) {
    contents[_COp] = de_CpuOptions(output[_cO], context2);
  }
  if (output[_cRI] != null) {
    contents[_CRI] = expectString(output[_cRI]);
  }
  if (output[_cRSa] != null) {
    contents[_CRSa] = de_CapacityReservationSpecificationResponse(output[_cRSa], context2);
  }
  if (output[_hO] != null) {
    contents[_HO] = de_HibernationOptions(output[_hO], context2);
  }
  if (output.licenseSet === "") {
    contents[_Lic] = [];
  } else if (output[_lSi] != null && output[_lSi][_i] != null) {
    contents[_Lic] = de_LicenseList(getArrayIfSingleItem(output[_lSi][_i]), context2);
  }
  if (output[_mO] != null) {
    contents[_MO] = de_InstanceMetadataOptionsResponse(output[_mO], context2);
  }
  if (output[_eOn] != null) {
    contents[_EOn] = de_EnclaveOptions(output[_eOn], context2);
  }
  if (output[_bM] != null) {
    contents[_BM] = expectString(output[_bM]);
  }
  if (output[_pDl] != null) {
    contents[_PDl] = expectString(output[_pDl]);
  }
  if (output[_uO] != null) {
    contents[_UO] = expectString(output[_uO]);
  }
  if (output[_uOUT] != null) {
    contents[_UOUT] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_uOUT]));
  }
  if (output[_pDNO] != null) {
    contents[_PDNO] = de_PrivateDnsNameOptionsResponse(output[_pDNO], context2);
  }
  if (output[_iApv] != null) {
    contents[_IApv] = expectString(output[_iApv]);
  }
  if (output[_tSp] != null) {
    contents[_TSp] = expectString(output[_tSp]);
  }
  if (output[_mOa] != null) {
    contents[_MOa] = de_InstanceMaintenanceOptions(output[_mOa], context2);
  }
  if (output[_cIBM] != null) {
    contents[_CIBM] = expectString(output[_cIBM]);
  }
  if (output[_nPO] != null) {
    contents[_NPO] = de_InstanceNetworkPerformanceOptions(output[_nPO], context2);
  }
  if (output[_op] != null) {
    contents[_O] = de_OperatorResponse(output[_op], context2);
  }
  if (output[_iI] != null) {
    contents[_IIn] = expectString(output[_iI]);
  }
  if (output[_iIma] != null) {
    contents[_IIma] = expectString(output[_iIma]);
  }
  if (output[_iSnst] != null) {
    contents[_Stat] = de_InstanceState(output[_iSnst], context2);
  }
  if (output[_pDN] != null) {
    contents[_PDN] = expectString(output[_pDN]);
  }
  if (output[_dNn] != null) {
    contents[_PDNu] = expectString(output[_dNn]);
  }
  if (output[_rea] != null) {
    contents[_STRt] = expectString(output[_rea]);
  }
  if (output[_kN] != null) {
    contents[_KN] = expectString(output[_kN]);
  }
  if (output[_aLI] != null) {
    contents[_ALI] = strictParseInt32(output[_aLI]);
  }
  if (output.productCodes === "") {
    contents[_PCr] = [];
  } else if (output[_pC] != null && output[_pC][_i] != null) {
    contents[_PCr] = de_ProductCodeList(getArrayIfSingleItem(output[_pC][_i]), context2);
  }
  if (output[_iT] != null) {
    contents[_IT] = expectString(output[_iT]);
  }
  if (output[_lTau] != null) {
    contents[_LTaun] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_lTau]));
  }
  if (output[_pla] != null) {
    contents[_Pl] = de_Placement(output[_pla], context2);
  }
  if (output[_kI] != null) {
    contents[_KI] = expectString(output[_kI]);
  }
  if (output[_rIa] != null) {
    contents[_RIa] = expectString(output[_rIa]);
  }
  if (output[_pl] != null) {
    contents[_Pla] = expectString(output[_pl]);
  }
  if (output[_mo] != null) {
    contents[_Mon] = de_Monitoring(output[_mo], context2);
  }
  if (output[_sIu] != null) {
    contents[_SIub] = expectString(output[_sIu]);
  }
  if (output[_vI] != null) {
    contents[_VI] = expectString(output[_vI]);
  }
  if (output[_pIAr] != null) {
    contents[_PIAr] = expectString(output[_pIAr]);
  }
  if (output[_iAp] != null) {
    contents[_PIAu] = expectString(output[_iAp]);
  }
  return contents;
}, "de_Instance");
var de_InstanceAttachmentEnaSrdSpecification = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_eSE] != null) {
    contents[_ESE] = parseBoolean(output[_eSE]);
  }
  if (output[_eSUS] != null) {
    contents[_ESUS] = de_InstanceAttachmentEnaSrdUdpSpecification(output[_eSUS], context2);
  }
  return contents;
}, "de_InstanceAttachmentEnaSrdSpecification");
var de_InstanceAttachmentEnaSrdUdpSpecification = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_eSUE] != null) {
    contents[_ESUE] = parseBoolean(output[_eSUE]);
  }
  return contents;
}, "de_InstanceAttachmentEnaSrdUdpSpecification");
var de_InstanceBlockDeviceMapping = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_dN] != null) {
    contents[_DN] = expectString(output[_dN]);
  }
  if (output[_eb] != null) {
    contents[_E] = de_EbsInstanceBlockDevice(output[_eb], context2);
  }
  return contents;
}, "de_InstanceBlockDeviceMapping");
var de_InstanceBlockDeviceMappingList = /* @__PURE__ */ __name((output, context2) => {
  return (output || []).filter((e3) => e3 != null).map((entry) => {
    return de_InstanceBlockDeviceMapping(entry, context2);
  });
}, "de_InstanceBlockDeviceMappingList");
var de_InstanceIpv4Prefix = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_iPpv] != null) {
    contents[_IPpvr] = expectString(output[_iPpv]);
  }
  return contents;
}, "de_InstanceIpv4Prefix");
var de_InstanceIpv4PrefixList = /* @__PURE__ */ __name((output, context2) => {
  return (output || []).filter((e3) => e3 != null).map((entry) => {
    return de_InstanceIpv4Prefix(entry, context2);
  });
}, "de_InstanceIpv4PrefixList");
var de_InstanceIpv6Address = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_iApv] != null) {
    contents[_IApv] = expectString(output[_iApv]);
  }
  if (output[_iPI] != null) {
    contents[_IPIs] = parseBoolean(output[_iPI]);
  }
  return contents;
}, "de_InstanceIpv6Address");
var de_InstanceIpv6AddressList = /* @__PURE__ */ __name((output, context2) => {
  return (output || []).filter((e3) => e3 != null).map((entry) => {
    return de_InstanceIpv6Address(entry, context2);
  });
}, "de_InstanceIpv6AddressList");
var de_InstanceIpv6Prefix = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_iPpvr] != null) {
    contents[_IPpvre] = expectString(output[_iPpvr]);
  }
  return contents;
}, "de_InstanceIpv6Prefix");
var de_InstanceIpv6PrefixList = /* @__PURE__ */ __name((output, context2) => {
  return (output || []).filter((e3) => e3 != null).map((entry) => {
    return de_InstanceIpv6Prefix(entry, context2);
  });
}, "de_InstanceIpv6PrefixList");
var de_InstanceList = /* @__PURE__ */ __name((output, context2) => {
  return (output || []).filter((e3) => e3 != null).map((entry) => {
    return de_Instance(entry, context2);
  });
}, "de_InstanceList");
var de_InstanceMaintenanceOptions = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_aRu] != null) {
    contents[_ARu] = expectString(output[_aRu]);
  }
  if (output[_rM] != null) {
    contents[_RMe] = expectString(output[_rM]);
  }
  return contents;
}, "de_InstanceMaintenanceOptions");
var de_InstanceMetadataOptionsResponse = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_st] != null) {
    contents[_Stat] = expectString(output[_st]);
  }
  if (output[_hT] != null) {
    contents[_HT] = expectString(output[_hT]);
  }
  if (output[_hPRHL] != null) {
    contents[_HPRHL] = strictParseInt32(output[_hPRHL]);
  }
  if (output[_hE] != null) {
    contents[_HE] = expectString(output[_hE]);
  }
  if (output[_hPI] != null) {
    contents[_HPI] = expectString(output[_hPI]);
  }
  if (output[_iMT] != null) {
    contents[_IMT] = expectString(output[_iMT]);
  }
  return contents;
}, "de_InstanceMetadataOptionsResponse");
var de_InstanceNetworkInterface = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_ass] != null) {
    contents[_Asso] = de_InstanceNetworkInterfaceAssociation(output[_ass], context2);
  }
  if (output[_at] != null) {
    contents[_Att] = de_InstanceNetworkInterfaceAttachment(output[_at], context2);
  }
  if (output[_de] != null) {
    contents[_De] = expectString(output[_de]);
  }
  if (output.groupSet === "") {
    contents[_G] = [];
  } else if (output[_gS] != null && output[_gS][_i] != null) {
    contents[_G] = de_GroupIdentifierList(getArrayIfSingleItem(output[_gS][_i]), context2);
  }
  if (output.ipv6AddressesSet === "") {
    contents[_IA] = [];
  } else if (output[_iASp] != null && output[_iASp][_i] != null) {
    contents[_IA] = de_InstanceIpv6AddressList(getArrayIfSingleItem(output[_iASp][_i]), context2);
  }
  if (output[_mAa] != null) {
    contents[_MAa] = expectString(output[_mAa]);
  }
  if (output[_nII] != null) {
    contents[_NII] = expectString(output[_nII]);
  }
  if (output[_oI] != null) {
    contents[_OIwn] = expectString(output[_oI]);
  }
  if (output[_pDN] != null) {
    contents[_PDN] = expectString(output[_pDN]);
  }
  if (output[_pIAr] != null) {
    contents[_PIAr] = expectString(output[_pIAr]);
  }
  if (output.privateIpAddressesSet === "") {
    contents[_PIA] = [];
  } else if (output[_pIAS] != null && output[_pIAS][_i] != null) {
    contents[_PIA] = de_InstancePrivateIpAddressList(getArrayIfSingleItem(output[_pIAS][_i]), context2);
  }
  if (output[_sDC] != null) {
    contents[_SDC] = parseBoolean(output[_sDC]);
  }
  if (output[_sta] != null) {
    contents[_Statu] = expectString(output[_sta]);
  }
  if (output[_sIu] != null) {
    contents[_SIub] = expectString(output[_sIu]);
  }
  if (output[_vI] != null) {
    contents[_VI] = expectString(output[_vI]);
  }
  if (output[_iTnt] != null) {
    contents[_ITn] = expectString(output[_iTnt]);
  }
  if (output.ipv4PrefixSet === "") {
    contents[_IPp] = [];
  } else if (output[_iPSpv] != null && output[_iPSpv][_i] != null) {
    contents[_IPp] = de_InstanceIpv4PrefixList(getArrayIfSingleItem(output[_iPSpv][_i]), context2);
  }
  if (output.ipv6PrefixSet === "") {
    contents[_IP] = [];
  } else if (output[_iPSpvr] != null && output[_iPSpvr][_i] != null) {
    contents[_IP] = de_InstanceIpv6PrefixList(getArrayIfSingleItem(output[_iPSpvr][_i]), context2);
  }
  if (output[_cTC] != null) {
    contents[_CTC] = de_ConnectionTrackingSpecificationResponse(output[_cTC], context2);
  }
  if (output[_op] != null) {
    contents[_O] = de_OperatorResponse(output[_op], context2);
  }
  return contents;
}, "de_InstanceNetworkInterface");
var de_InstanceNetworkInterfaceAssociation = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_cI] != null) {
    contents[_CIa] = expectString(output[_cI]);
  }
  if (output[_cOI] != null) {
    contents[_COI] = expectString(output[_cOI]);
  }
  if (output[_iOIp] != null) {
    contents[_IOI] = expectString(output[_iOIp]);
  }
  if (output[_pDNu] != null) {
    contents[_PDNu] = expectString(output[_pDNu]);
  }
  if (output[_pI] != null) {
    contents[_PI] = expectString(output[_pI]);
  }
  return contents;
}, "de_InstanceNetworkInterfaceAssociation");
var de_InstanceNetworkInterfaceAttachment = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_aTt] != null) {
    contents[_ATtt] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_aTt]));
  }
  if (output[_aIt] != null) {
    contents[_AIt] = expectString(output[_aIt]);
  }
  if (output[_dOT] != null) {
    contents[_DOT] = parseBoolean(output[_dOT]);
  }
  if (output[_dIe] != null) {
    contents[_DIev] = strictParseInt32(output[_dIe]);
  }
  if (output[_sta] != null) {
    contents[_Statu] = expectString(output[_sta]);
  }
  if (output[_nCI] != null) {
    contents[_NCI] = strictParseInt32(output[_nCI]);
  }
  if (output[_eSS] != null) {
    contents[_ESS] = de_InstanceAttachmentEnaSrdSpecification(output[_eSS], context2);
  }
  if (output[_eQC] != null) {
    contents[_EQC] = strictParseInt32(output[_eQC]);
  }
  return contents;
}, "de_InstanceNetworkInterfaceAttachment");
var de_InstanceNetworkInterfaceList = /* @__PURE__ */ __name((output, context2) => {
  return (output || []).filter((e3) => e3 != null).map((entry) => {
    return de_InstanceNetworkInterface(entry, context2);
  });
}, "de_InstanceNetworkInterfaceList");
var de_InstanceNetworkPerformanceOptions = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_bW] != null) {
    contents[_BW] = expectString(output[_bW]);
  }
  return contents;
}, "de_InstanceNetworkPerformanceOptions");
var de_InstancePrivateIpAddress = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_ass] != null) {
    contents[_Asso] = de_InstanceNetworkInterfaceAssociation(output[_ass], context2);
  }
  if (output[_prim] != null) {
    contents[_Prim] = parseBoolean(output[_prim]);
  }
  if (output[_pDN] != null) {
    contents[_PDN] = expectString(output[_pDN]);
  }
  if (output[_pIAr] != null) {
    contents[_PIAr] = expectString(output[_pIAr]);
  }
  return contents;
}, "de_InstancePrivateIpAddress");
var de_InstancePrivateIpAddressList = /* @__PURE__ */ __name((output, context2) => {
  return (output || []).filter((e3) => e3 != null).map((entry) => {
    return de_InstancePrivateIpAddress(entry, context2);
  });
}, "de_InstancePrivateIpAddressList");
var de_InstanceState = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_co] != null) {
    contents[_Cod] = strictParseInt32(output[_co]);
  }
  if (output[_n] != null) {
    contents[_N] = expectString(output[_n]);
  }
  return contents;
}, "de_InstanceState");
var de_LicenseConfiguration = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_lCA] != null) {
    contents[_LCA] = expectString(output[_lCA]);
  }
  return contents;
}, "de_LicenseConfiguration");
var de_LicenseList = /* @__PURE__ */ __name((output, context2) => {
  return (output || []).filter((e3) => e3 != null).map((entry) => {
    return de_LicenseConfiguration(entry, context2);
  });
}, "de_LicenseList");
var de_Monitoring = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_st] != null) {
    contents[_Stat] = expectString(output[_st]);
  }
  return contents;
}, "de_Monitoring");
var de_OperatorResponse = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_mana] != null) {
    contents[_Mana] = parseBoolean(output[_mana]);
  }
  if (output[_p] != null) {
    contents[_Prin] = expectString(output[_p]);
  }
  return contents;
}, "de_OperatorResponse");
var de_Placement = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_af] != null) {
    contents[_Af] = expectString(output[_af]);
  }
  if (output[_gN] != null) {
    contents[_GN] = expectString(output[_gN]);
  }
  if (output[_pN] != null) {
    contents[_PN] = strictParseInt32(output[_pN]);
  }
  if (output[_hI] != null) {
    contents[_HIo] = expectString(output[_hI]);
  }
  if (output[_t] != null) {
    contents[_Te] = expectString(output[_t]);
  }
  if (output[_sDp] != null) {
    contents[_SDp] = expectString(output[_sDp]);
  }
  if (output[_hRGA] != null) {
    contents[_HRGA] = expectString(output[_hRGA]);
  }
  if (output[_gIr] != null) {
    contents[_GIr] = expectString(output[_gIr]);
  }
  if (output[_aZ] != null) {
    contents[_AZ] = expectString(output[_aZ]);
  }
  return contents;
}, "de_Placement");
var de_PrivateDnsNameOptionsResponse = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_hTo] != null) {
    contents[_HTo] = expectString(output[_hTo]);
  }
  if (output[_eRNDAR] != null) {
    contents[_ERNDAR] = parseBoolean(output[_eRNDAR]);
  }
  if (output[_eRNDAAAAR] != null) {
    contents[_ERNDAAAAR] = parseBoolean(output[_eRNDAAAAR]);
  }
  return contents;
}, "de_PrivateDnsNameOptionsResponse");
var de_ProductCode = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_pCr] != null) {
    contents[_PCIr] = expectString(output[_pCr]);
  }
  if (output[_ty] != null) {
    contents[_PCT] = expectString(output[_ty]);
  }
  return contents;
}, "de_ProductCode");
var de_ProductCodeList = /* @__PURE__ */ __name((output, context2) => {
  return (output || []).filter((e3) => e3 != null).map((entry) => {
    return de_ProductCode(entry, context2);
  });
}, "de_ProductCodeList");
var de_Reservation = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_rIese] != null) {
    contents[_RIeser] = expectString(output[_rIese]);
  }
  if (output[_oI] != null) {
    contents[_OIwn] = expectString(output[_oI]);
  }
  if (output[_rIeq] != null) {
    contents[_RIeq] = expectString(output[_rIeq]);
  }
  if (output.groupSet === "") {
    contents[_G] = [];
  } else if (output[_gS] != null && output[_gS][_i] != null) {
    contents[_G] = de_GroupIdentifierList(getArrayIfSingleItem(output[_gS][_i]), context2);
  }
  if (output.instancesSet === "") {
    contents[_In] = [];
  } else if (output[_iSn] != null && output[_iSn][_i] != null) {
    contents[_In] = de_InstanceList(getArrayIfSingleItem(output[_iSn][_i]), context2);
  }
  return contents;
}, "de_Reservation");
var de_ReservationList = /* @__PURE__ */ __name((output, context2) => {
  return (output || []).filter((e3) => e3 != null).map((entry) => {
    return de_Reservation(entry, context2);
  });
}, "de_ReservationList");
var de_StateReason = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_co] != null) {
    contents[_Cod] = expectString(output[_co]);
  }
  if (output[_me] != null) {
    contents[_Me] = expectString(output[_me]);
  }
  return contents;
}, "de_StateReason");
var de_Tag = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_k] != null) {
    contents[_Ke] = expectString(output[_k]);
  }
  if (output[_v] != null) {
    contents[_Va] = expectString(output[_v]);
  }
  return contents;
}, "de_Tag");
var de_TagList = /* @__PURE__ */ __name((output, context2) => {
  return (output || []).filter((e3) => e3 != null).map((entry) => {
    return de_Tag(entry, context2);
  });
}, "de_TagList");
var deserializeMetadata2 = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var throwDefaultError2 = withBaseException(EC2ServiceException);
var buildHttpRpcRequest = /* @__PURE__ */ __name(async (context2, headers, path, resolvedHostname, body) => {
  const { hostname, protocol = "https", port, path: basePath } = await context2.endpoint();
  const contents = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers
  };
  if (resolvedHostname !== void 0) {
    contents.hostname = resolvedHostname;
  }
  if (body !== void 0) {
    contents.body = body;
  }
  return new HttpRequest(contents);
}, "buildHttpRpcRequest");
var SHARED_HEADERS = {
  "content-type": "application/x-www-form-urlencoded"
};
var _ = "2016-11-15";
var _A = "Action";
var _AIt = "AttachmentId";
var _ALI = "AmiLaunchIndex";
var _ARs = "AssociatedResource";
var _ARu = "AutoRecovery";
var _ASS = "AmdSevSnp";
var _ATtt = "AttachTime";
var _AZ = "AvailabilityZone";
var _Af = "Affinity";
var _Ar = "Arn";
var _Arc = "Architecture";
var _Asso = "Association";
var _Att = "Attachment";
var _BDM = "BlockDeviceMappings";
var _BM = "BootMode";
var _BW = "BandwidthWeighting";
var _CC = "CoreCount";
var _CIBM = "CurrentInstanceBootMode";
var _CIa = "CarrierIp";
var _COI = "CustomerOwnedIp";
var _COp = "CpuOptions";
var _CRI = "CapacityReservationId";
var _CRP = "CapacityReservationPreference";
var _CRRGA = "CapacityReservationResourceGroupArn";
var _CRSa = "CapacityReservationSpecification";
var _CRTa = "CapacityReservationTarget";
var _CTC = "ConnectionTrackingConfiguration";
var _CTl = "ClientToken";
var _Cod = "Code";
var _Conf = "Configured";
var _DIesc = "DescribeInstances";
var _DIev = "DeviceIndex";
var _DN = "DeviceName";
var _DOT = "DeleteOnTermination";
var _DRr = "DryRun";
var _De = "Description";
var _E = "Ebs";
var _EGA = "ElasticGpuAssociations";
var _EGAI = "ElasticGpuAssociationId";
var _EGAS = "ElasticGpuAssociationState";
var _EGAT = "ElasticGpuAssociationTime";
var _EGIl = "ElasticGpuId";
var _EIAA = "ElasticInferenceAcceleratorArn";
var _EIAAI = "ElasticInferenceAcceleratorAssociationId";
var _EIAAS = "ElasticInferenceAcceleratorAssociationState";
var _EIAAT = "ElasticInferenceAcceleratorAssociationTime";
var _EIAAl = "ElasticInferenceAcceleratorAssociations";
var _EO = "EbsOptimized";
var _EOn = "EnclaveOptions";
var _EQC = "EnaQueueCount";
var _ERNDAAAAR = "EnableResourceNameDnsAAAARecord";
var _ERNDAR = "EnableResourceNameDnsARecord";
var _ESE = "EnaSrdEnabled";
var _ESS = "EnaSrdSpecification";
var _ESUE = "EnaSrdUdpEnabled";
var _ESUS = "EnaSrdUdpSpecification";
var _ESn = "EnaSupport";
var _En = "Enabled";
var _Fi = "Filters";
var _G = "Groups";
var _GIr = "GroupId";
var _GN = "GroupName";
var _H = "Hypervisor";
var _HE = "HttpEndpoint";
var _HIo = "HostId";
var _HO = "HibernationOptions";
var _HPI = "HttpProtocolIpv6";
var _HPRHL = "HttpPutResponseHopLimit";
var _HRGA = "HostResourceGroupArn";
var _HT = "HttpTokens";
var _HTo = "HostnameType";
var _IA = "Ipv6Addresses";
var _IApv = "Ipv6Address";
var _IIP = "IamInstanceProfile";
var _IIma = "ImageId";
var _IIn = "InstanceId";
var _IIns = "InstanceIds";
var _ILn = "InstanceLifecycle";
var _IMT = "InstanceMetadataTags";
var _IOI = "IpOwnerId";
var _IP = "Ipv6Prefixes";
var _IPIs = "IsPrimaryIpv6";
var _IPp = "Ipv4Prefixes";
var _IPpvr = "Ipv4Prefix";
var _IPpvre = "Ipv6Prefix";
var _IT = "InstanceType";
var _ITn = "InterfaceType";
var _Id = "Id";
var _In = "Instances";
var _KI = "KernelId";
var _KN = "KeyName";
var _Ke = "Key";
var _LCA = "LicenseConfigurationArn";
var _LTaun = "LaunchTime";
var _Lic = "Licenses";
var _MAa = "MacAddress";
var _MO = "MetadataOptions";
var _MOa = "MaintenanceOptions";
var _MR = "MaxResults";
var _Mana = "Managed";
var _Me = "Message";
var _Mon = "Monitoring";
var _N = "Name";
var _NCI = "NetworkCardIndex";
var _NI = "NetworkInterfaces";
var _NII = "NetworkInterfaceId";
var _NPO = "NetworkPerformanceOptions";
var _NT = "NextToken";
var _O = "Operator";
var _OA = "OutpostArn";
var _OIwn = "OwnerId";
var _PCIr = "ProductCodeId";
var _PCT = "ProductCodeType";
var _PCr = "ProductCodes";
var _PDN = "PrivateDnsName";
var _PDNO = "PrivateDnsNameOptions";
var _PDNu = "PublicDnsName";
var _PDl = "PlatformDetails";
var _PI = "PublicIp";
var _PIA = "PrivateIpAddresses";
var _PIAr = "PrivateIpAddress";
var _PIAu = "PublicIpAddress";
var _PN = "PartitionNumber";
var _Pl = "Placement";
var _Pla = "Platform";
var _Prim = "Primary";
var _Prin = "Principal";
var _RDN = "RootDeviceName";
var _RDT = "RootDeviceType";
var _RIa = "RamdiskId";
var _RIeq = "RequesterId";
var _RIeser = "ReservationId";
var _RMe = "RebootMigration";
var _Rese = "Reservations";
var _SDC = "SourceDestCheck";
var _SDp = "SpreadDomain";
var _SG = "SecurityGroups";
var _SIRIp = "SpotInstanceRequestId";
var _SIub = "SubnetId";
var _SNS = "SriovNetSupport";
var _SRt = "StateReason";
var _STRt = "StateTransitionReason";
var _Stat = "State";
var _Statu = "Status";
var _TET = "TcpEstablishedTimeout";
var _TPC = "ThreadsPerCore";
var _TSp = "TpmSupport";
var _Ta = "Tags";
var _Te = "Tenancy";
var _UO = "UsageOperation";
var _UOUT = "UsageOperationUpdateTime";
var _UST = "UdpStreamTimeout";
var _UT = "UdpTimeout";
var _V = "Version";
var _VI = "VpcId";
var _VIo = "VolumeId";
var _VOI = "VolumeOwnerId";
var _VTir = "VirtualizationType";
var _Va = "Value";
var _Val = "Values";
var _aIt = "attachmentId";
var _aLI = "amiLaunchIndex";
var _aRs = "associatedResource";
var _aRu = "autoRecovery";
var _aSS = "amdSevSnp";
var _aTt = "attachTime";
var _aZ = "availabilityZone";
var _af = "affinity";
var _ar = "arn";
var _arc = "architecture";
var _ass = "association";
var _at = "attachment";
var _bDM = "blockDeviceMapping";
var _bM = "bootMode";
var _bW = "bandwidthWeighting";
var _cCo = "coreCount";
var _cI = "carrierIp";
var _cIBM = "currentInstanceBootMode";
var _cO = "cpuOptions";
var _cOI = "customerOwnedIp";
var _cRI = "capacityReservationId";
var _cRP = "capacityReservationPreference";
var _cRRGA = "capacityReservationResourceGroupArn";
var _cRSa = "capacityReservationSpecification";
var _cRT = "capacityReservationTarget";
var _cT = "clientToken";
var _cTC = "connectionTrackingConfiguration";
var _co = "code";
var _conf = "configured";
var _dIe = "deviceIndex";
var _dN = "deviceName";
var _dNn = "dnsName";
var _dOT = "deleteOnTermination";
var _de = "description";
var _eGAI = "elasticGpuAssociationId";
var _eGAS = "elasticGpuAssociationState";
var _eGASl = "elasticGpuAssociationSet";
var _eGAT = "elasticGpuAssociationTime";
var _eGI = "elasticGpuId";
var _eIAA = "elasticInferenceAcceleratorArn";
var _eIAAI = "elasticInferenceAcceleratorAssociationId";
var _eIAAS = "elasticInferenceAcceleratorAssociationState";
var _eIAASl = "elasticInferenceAcceleratorAssociationSet";
var _eIAAT = "elasticInferenceAcceleratorAssociationTime";
var _eO = "ebsOptimized";
var _eOn = "enclaveOptions";
var _eQC = "enaQueueCount";
var _eRNDAAAAR = "enableResourceNameDnsAAAARecord";
var _eRNDAR = "enableResourceNameDnsARecord";
var _eSE = "enaSrdEnabled";
var _eSS = "enaSrdSpecification";
var _eSUE = "enaSrdUdpEnabled";
var _eSUS = "enaSrdUdpSpecification";
var _eSna = "enaSupport";
var _eb = "ebs";
var _en = "enabled";
var _gIr = "groupId";
var _gN = "groupName";
var _gS = "groupSet";
var _h = "hypervisor";
var _hE = "httpEndpoint";
var _hI = "hostId";
var _hO = "hibernationOptions";
var _hPI = "httpProtocolIpv6";
var _hPRHL = "httpPutResponseHopLimit";
var _hRGA = "hostResourceGroupArn";
var _hT = "httpTokens";
var _hTo = "hostnameType";
var _i = "item";
var _iASp = "ipv6AddressesSet";
var _iAp = "ipAddress";
var _iApv = "ipv6Address";
var _iI = "instanceId";
var _iIP = "iamInstanceProfile";
var _iIma = "imageId";
var _iLn = "instanceLifecycle";
var _iMT = "instanceMetadataTags";
var _iOIp = "ipOwnerId";
var _iPI = "isPrimaryIpv6";
var _iPSpv = "ipv4PrefixSet";
var _iPSpvr = "ipv6PrefixSet";
var _iPpv = "ipv4Prefix";
var _iPpvr = "ipv6Prefix";
var _iSn = "instancesSet";
var _iSnst = "instanceState";
var _iT = "instanceType";
var _iTnt = "interfaceType";
var _id = "id";
var _k = "key";
var _kI = "kernelId";
var _kN = "keyName";
var _lCA = "licenseConfigurationArn";
var _lSi = "licenseSet";
var _lTau = "launchTime";
var _mAa = "macAddress";
var _mO = "metadataOptions";
var _mOa = "maintenanceOptions";
var _mana = "managed";
var _me = "message";
var _mo = "monitoring";
var _n = "name";
var _nCI = "networkCardIndex";
var _nII = "networkInterfaceId";
var _nIS = "networkInterfaceSet";
var _nPO = "networkPerformanceOptions";
var _nTe = "nextToken";
var _oA = "outpostArn";
var _oI = "ownerId";
var _op = "operator";
var _p = "principal";
var _pC = "productCodes";
var _pCr = "productCode";
var _pDN = "privateDnsName";
var _pDNO = "privateDnsNameOptions";
var _pDNu = "publicDnsName";
var _pDl = "platformDetails";
var _pI = "publicIp";
var _pIAS = "privateIpAddressesSet";
var _pIAr = "privateIpAddress";
var _pN = "partitionNumber";
var _pl = "platform";
var _pla = "placement";
var _prim = "primary";
var _rDN = "rootDeviceName";
var _rDT = "rootDeviceType";
var _rIa = "ramdiskId";
var _rIeq = "requesterId";
var _rIese = "reservationId";
var _rM = "rebootMigration";
var _rSes = "reservationSet";
var _rea = "reason";
var _sDC = "sourceDestCheck";
var _sDp = "spreadDomain";
var _sIRI = "spotInstanceRequestId";
var _sIu = "subnetId";
var _sNSr = "sriovNetSupport";
var _sRt = "stateReason";
var _st = "state";
var _sta = "status";
var _t = "tenancy";
var _tET = "tcpEstablishedTimeout";
var _tPC = "threadsPerCore";
var _tS = "tagSet";
var _tSp = "tpmSupport";
var _ty = "type";
var _uO = "usageOperation";
var _uOUT = "usageOperationUpdateTime";
var _uST = "udpStreamTimeout";
var _uTd = "udpTimeout";
var _v = "value";
var _vI = "vpcId";
var _vIo = "volumeId";
var _vOI = "volumeOwnerId";
var _vTi = "virtualizationType";
var buildFormUrlencodedString = /* @__PURE__ */ __name((formEntries) => Object.entries(formEntries).map(([key, value]) => extendedEncodeURIComponent(key) + "=" + extendedEncodeURIComponent(value)).join("&"), "buildFormUrlencodedString");
var loadEc2ErrorCode = /* @__PURE__ */ __name((output, data) => {
  if (data.Errors.Error?.Code !== void 0) {
    return data.Errors.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
}, "loadEc2ErrorCode");

// node_modules/@aws-sdk/client-ec2/dist-es/commands/DescribeInstancesCommand.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DescribeInstancesCommand = class extends Command.classBuilder().ep(commonParams).m(function(Command2, cs, config2, o3) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("AmazonEC2", "DescribeInstances", {}).n("EC2Client", "DescribeInstancesCommand").f(void 0, void 0).ser(se_DescribeInstancesCommand).de(de_DescribeInstancesCommand).build() {
  static {
    __name(this, "DescribeInstancesCommand");
  }
};

// node_modules/@aws-sdk/client-cloudwatch/dist-es/CloudWatchClient.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-compression/dist-es/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-compression/dist-es/NODE_DISABLE_REQUEST_COMPRESSION_CONFIG_OPTIONS.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_DISABLE_REQUEST_COMPRESSION = false;

// node_modules/@smithy/middleware-compression/dist-es/NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES_CONFIG_OPTIONS.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DEFAULT_NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES = 10240;

// node_modules/@smithy/middleware-compression/dist-es/compressionMiddleware.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-compression/dist-es/compressStream.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-compression/dist-es/compressString.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-compression/dist-es/constants.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var CompressionAlgorithm;
(function(CompressionAlgorithm2) {
  CompressionAlgorithm2["GZIP"] = "gzip";
})(CompressionAlgorithm || (CompressionAlgorithm = {}));
var CLIENT_SUPPORTED_ALGORITHMS = [CompressionAlgorithm.GZIP];

// node_modules/@smithy/middleware-compression/dist-es/isStreaming.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-compression/dist-es/configurations.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-compression/dist-es/getCompressionPlugin.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@smithy/middleware-compression/dist-es/resolveCompressionConfig.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var resolveCompressionConfig = /* @__PURE__ */ __name((input) => {
  const { disableRequestCompression, requestMinCompressionSizeBytes: _requestMinCompressionSizeBytes } = input;
  return Object.assign(input, {
    disableRequestCompression: normalizeProvider(disableRequestCompression),
    requestMinCompressionSizeBytes: /* @__PURE__ */ __name(async () => {
      const requestMinCompressionSizeBytes = await normalizeProvider(_requestMinCompressionSizeBytes)();
      if (requestMinCompressionSizeBytes < 0 || requestMinCompressionSizeBytes > 10485760) {
        throw new RangeError(`The value for requestMinCompressionSizeBytes must be between 0 and 10485760 inclusive. The provided value ${requestMinCompressionSizeBytes} is outside this range."`);
      }
      return requestMinCompressionSizeBytes;
    }, "requestMinCompressionSizeBytes")
  });
}, "resolveCompressionConfig");

// node_modules/@aws-sdk/client-cloudwatch/dist-es/auth/httpAuthSchemeProvider.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var defaultCloudWatchHttpAuthSchemeParametersProvider = /* @__PURE__ */ __name(async (config2, context2, input) => {
  return {
    operation: getSmithyContext(context2).operation,
    region: await normalizeProvider(config2.region)() || (() => {
      throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
    })()
  };
}, "defaultCloudWatchHttpAuthSchemeParametersProvider");
function createAwsAuthSigv4HttpAuthOption2(authParameters) {
  return {
    schemeId: "aws.auth#sigv4",
    signingProperties: {
      name: "monitoring",
      region: authParameters.region
    },
    propertiesExtractor: /* @__PURE__ */ __name((config2, context2) => ({
      signingProperties: {
        config: config2,
        context: context2
      }
    }), "propertiesExtractor")
  };
}
__name(createAwsAuthSigv4HttpAuthOption2, "createAwsAuthSigv4HttpAuthOption");
var defaultCloudWatchHttpAuthSchemeProvider = /* @__PURE__ */ __name((authParameters) => {
  const options = [];
  switch (authParameters.operation) {
    default: {
      options.push(createAwsAuthSigv4HttpAuthOption2(authParameters));
    }
  }
  return options;
}, "defaultCloudWatchHttpAuthSchemeProvider");
var resolveHttpAuthSchemeConfig2 = /* @__PURE__ */ __name((config2) => {
  const config_0 = resolveAwsSdkSigV4Config(config2);
  return Object.assign(config_0, {
    authSchemePreference: normalizeProvider(config2.authSchemePreference ?? [])
  });
}, "resolveHttpAuthSchemeConfig");

// node_modules/@aws-sdk/client-cloudwatch/dist-es/endpoint/EndpointParameters.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var resolveClientEndpointParameters2 = /* @__PURE__ */ __name((options) => {
  return Object.assign(options, {
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "monitoring"
  });
}, "resolveClientEndpointParameters");
var commonParams2 = {
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
};

// node_modules/@aws-sdk/client-cloudwatch/dist-es/runtimeConfig.browser.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-cloudwatch/package.json
var package_default2 = {
  name: "@aws-sdk/client-cloudwatch",
  description: "AWS SDK for JavaScript Cloudwatch Client for Node.js, Browser and React Native",
  version: "3.817.0",
  scripts: {
    build: "concurrently 'yarn:build:cjs' 'yarn:build:es' 'yarn:build:types'",
    "build:cjs": "node ../../scripts/compilation/inline client-cloudwatch",
    "build:es": "tsc -p tsconfig.es.json",
    "build:include:deps": "lerna run --scope $npm_package_name --include-dependencies build",
    "build:types": "tsc -p tsconfig.types.json",
    "build:types:downlevel": "downlevel-dts dist-types dist-types/ts3.4",
    clean: "rimraf ./dist-* && rimraf *.tsbuildinfo",
    "extract:docs": "api-extractor run --local",
    "generate:client": "node ../../scripts/generate-clients/single-service --solo cloudwatch"
  },
  main: "./dist-cjs/index.js",
  types: "./dist-types/index.d.ts",
  module: "./dist-es/index.js",
  sideEffects: false,
  dependencies: {
    "@aws-crypto/sha256-browser": "5.2.0",
    "@aws-crypto/sha256-js": "5.2.0",
    "@aws-sdk/core": "3.816.0",
    "@aws-sdk/credential-provider-node": "3.817.0",
    "@aws-sdk/middleware-host-header": "3.804.0",
    "@aws-sdk/middleware-logger": "3.804.0",
    "@aws-sdk/middleware-recursion-detection": "3.804.0",
    "@aws-sdk/middleware-user-agent": "3.816.0",
    "@aws-sdk/region-config-resolver": "3.808.0",
    "@aws-sdk/types": "3.804.0",
    "@aws-sdk/util-endpoints": "3.808.0",
    "@aws-sdk/util-user-agent-browser": "3.804.0",
    "@aws-sdk/util-user-agent-node": "3.816.0",
    "@smithy/config-resolver": "^4.1.2",
    "@smithy/core": "^3.3.3",
    "@smithy/fetch-http-handler": "^5.0.2",
    "@smithy/hash-node": "^4.0.2",
    "@smithy/invalid-dependency": "^4.0.2",
    "@smithy/middleware-compression": "^4.1.6",
    "@smithy/middleware-content-length": "^4.0.2",
    "@smithy/middleware-endpoint": "^4.1.6",
    "@smithy/middleware-retry": "^4.1.7",
    "@smithy/middleware-serde": "^4.0.5",
    "@smithy/middleware-stack": "^4.0.2",
    "@smithy/node-config-provider": "^4.1.1",
    "@smithy/node-http-handler": "^4.0.4",
    "@smithy/protocol-http": "^5.1.0",
    "@smithy/smithy-client": "^4.2.6",
    "@smithy/types": "^4.2.0",
    "@smithy/url-parser": "^4.0.2",
    "@smithy/util-base64": "^4.0.0",
    "@smithy/util-body-length-browser": "^4.0.0",
    "@smithy/util-body-length-node": "^4.0.0",
    "@smithy/util-defaults-mode-browser": "^4.0.14",
    "@smithy/util-defaults-mode-node": "^4.0.14",
    "@smithy/util-endpoints": "^3.0.4",
    "@smithy/util-middleware": "^4.0.2",
    "@smithy/util-retry": "^4.0.3",
    "@smithy/util-utf8": "^4.0.0",
    "@smithy/util-waiter": "^4.0.3",
    tslib: "^2.6.2"
  },
  devDependencies: {
    "@tsconfig/node18": "18.2.4",
    "@types/node": "^18.19.69",
    concurrently: "7.0.0",
    "downlevel-dts": "0.10.1",
    rimraf: "3.0.2",
    typescript: "~5.8.3"
  },
  engines: {
    node: ">=18.0.0"
  },
  typesVersions: {
    "<4.0": {
      "dist-types/*": [
        "dist-types/ts3.4/*"
      ]
    }
  },
  files: [
    "dist-*/**"
  ],
  author: {
    name: "AWS SDK for JavaScript Team",
    url: "https://aws.amazon.com/javascript/"
  },
  license: "Apache-2.0",
  browser: {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.browser"
  },
  "react-native": {
    "./dist-es/runtimeConfig": "./dist-es/runtimeConfig.native"
  },
  homepage: "https://github.com/aws/aws-sdk-js-v3/tree/main/clients/client-cloudwatch",
  repository: {
    type: "git",
    url: "https://github.com/aws/aws-sdk-js-v3.git",
    directory: "clients/client-cloudwatch"
  }
};

// node_modules/@aws-sdk/client-cloudwatch/dist-es/runtimeConfig.shared.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-cloudwatch/dist-es/endpoint/endpointResolver.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-cloudwatch/dist-es/endpoint/ruleset.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var u2 = "required";
var v2 = "fn";
var w2 = "argv";
var x2 = "ref";
var a2 = true;
var b2 = "isSet";
var c2 = "booleanEquals";
var d2 = "error";
var e2 = "endpoint";
var f2 = "tree";
var g2 = "PartitionResult";
var h2 = "getAttr";
var i2 = { [u2]: false, "type": "String" };
var j2 = { [u2]: true, "default": false, "type": "Boolean" };
var k2 = { [x2]: "Endpoint" };
var l2 = { [v2]: c2, [w2]: [{ [x2]: "UseFIPS" }, true] };
var m2 = { [v2]: c2, [w2]: [{ [x2]: "UseDualStack" }, true] };
var n2 = {};
var o2 = { [v2]: h2, [w2]: [{ [x2]: g2 }, "supportsFIPS"] };
var p2 = { [x2]: g2 };
var q2 = { [v2]: c2, [w2]: [true, { [v2]: h2, [w2]: [p2, "supportsDualStack"] }] };
var r2 = [l2];
var s2 = [m2];
var t2 = [{ [x2]: "Region" }];
var _data2 = { version: "1.0", parameters: { Region: i2, UseDualStack: j2, UseFIPS: j2, Endpoint: i2 }, rules: [{ conditions: [{ [v2]: b2, [w2]: [k2] }], rules: [{ conditions: r2, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d2 }, { conditions: s2, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d2 }, { endpoint: { url: k2, properties: n2, headers: n2 }, type: e2 }], type: f2 }, { conditions: [{ [v2]: b2, [w2]: t2 }], rules: [{ conditions: [{ [v2]: "aws.partition", [w2]: t2, assign: g2 }], rules: [{ conditions: [l2, m2], rules: [{ conditions: [{ [v2]: c2, [w2]: [a2, o2] }, q2], rules: [{ endpoint: { url: "https://monitoring-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n2, headers: n2 }, type: e2 }], type: f2 }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d2 }], type: f2 }, { conditions: r2, rules: [{ conditions: [{ [v2]: c2, [w2]: [o2, a2] }], rules: [{ conditions: [{ [v2]: "stringEquals", [w2]: [{ [v2]: h2, [w2]: [p2, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://monitoring.{Region}.amazonaws.com", properties: n2, headers: n2 }, type: e2 }, { endpoint: { url: "https://monitoring-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n2, headers: n2 }, type: e2 }], type: f2 }, { error: "FIPS is enabled but this partition does not support FIPS", type: d2 }], type: f2 }, { conditions: s2, rules: [{ conditions: [q2], rules: [{ endpoint: { url: "https://monitoring.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n2, headers: n2 }, type: e2 }], type: f2 }, { error: "DualStack is enabled but this partition does not support DualStack", type: d2 }], type: f2 }, { endpoint: { url: "https://monitoring.{Region}.{PartitionResult#dnsSuffix}", properties: n2, headers: n2 }, type: e2 }], type: f2 }], type: f2 }, { error: "Invalid Configuration: Missing Region", type: d2 }] };
var ruleSet2 = _data2;

// node_modules/@aws-sdk/client-cloudwatch/dist-es/endpoint/endpointResolver.js
var cache2 = new EndpointCache({
  size: 50,
  params: ["Endpoint", "Region", "UseDualStack", "UseFIPS"]
});
var defaultEndpointResolver2 = /* @__PURE__ */ __name((endpointParams, context2 = {}) => {
  return cache2.get(endpointParams, () => resolveEndpoint(ruleSet2, {
    endpointParams,
    logger: context2.logger
  }));
}, "defaultEndpointResolver");
customEndpointFunctions.aws = awsEndpointFunctions;

// node_modules/@aws-sdk/client-cloudwatch/dist-es/runtimeConfig.shared.js
var getRuntimeConfig3 = /* @__PURE__ */ __name((config2) => {
  return {
    apiVersion: "2010-08-01",
    base64Decoder: config2?.base64Decoder ?? fromBase64,
    base64Encoder: config2?.base64Encoder ?? toBase64,
    disableHostPrefix: config2?.disableHostPrefix ?? false,
    endpointProvider: config2?.endpointProvider ?? defaultEndpointResolver2,
    extensions: config2?.extensions ?? [],
    httpAuthSchemeProvider: config2?.httpAuthSchemeProvider ?? defaultCloudWatchHttpAuthSchemeProvider,
    httpAuthSchemes: config2?.httpAuthSchemes ?? [
      {
        schemeId: "aws.auth#sigv4",
        identityProvider: /* @__PURE__ */ __name((ipc) => ipc.getIdentityProvider("aws.auth#sigv4"), "identityProvider"),
        signer: new AwsSdkSigV4Signer()
      }
    ],
    logger: config2?.logger ?? new NoOpLogger(),
    serviceId: config2?.serviceId ?? "CloudWatch",
    urlParser: config2?.urlParser ?? parseUrl,
    utf8Decoder: config2?.utf8Decoder ?? fromUtf8,
    utf8Encoder: config2?.utf8Encoder ?? toUtf8
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-cloudwatch/dist-es/runtimeConfig.browser.js
var getRuntimeConfig4 = /* @__PURE__ */ __name((config2) => {
  const defaultsMode = resolveDefaultsModeConfig(config2);
  const defaultConfigProvider = /* @__PURE__ */ __name(() => defaultsMode().then(loadConfigsForDefaultMode), "defaultConfigProvider");
  const clientSharedValues = getRuntimeConfig3(config2);
  return {
    ...clientSharedValues,
    ...config2,
    runtime: "browser",
    defaultsMode,
    bodyLengthChecker: config2?.bodyLengthChecker ?? calculateBodyLength,
    credentialDefaultProvider: config2?.credentialDefaultProvider ?? ((_3) => () => Promise.reject(new Error("Credential is missing"))),
    defaultUserAgentProvider: config2?.defaultUserAgentProvider ?? createDefaultUserAgentProvider({ serviceId: clientSharedValues.serviceId, clientVersion: package_default2.version }),
    disableRequestCompression: config2?.disableRequestCompression ?? DEFAULT_DISABLE_REQUEST_COMPRESSION,
    maxAttempts: config2?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
    region: config2?.region ?? invalidProvider("Region is missing"),
    requestHandler: FetchHttpHandler.create(config2?.requestHandler ?? defaultConfigProvider),
    requestMinCompressionSizeBytes: config2?.requestMinCompressionSizeBytes ?? DEFAULT_NODE_REQUEST_MIN_COMPRESSION_SIZE_BYTES,
    retryMode: config2?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
    sha256: config2?.sha256 ?? Sha2563,
    streamCollector: config2?.streamCollector ?? streamCollector,
    useDualstackEndpoint: config2?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
    useFipsEndpoint: config2?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT))
  };
}, "getRuntimeConfig");

// node_modules/@aws-sdk/client-cloudwatch/dist-es/runtimeExtensions.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-cloudwatch/dist-es/auth/httpAuthExtensionConfiguration.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var getHttpAuthExtensionConfiguration2 = /* @__PURE__ */ __name((runtimeConfig) => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
  let _credentials = runtimeConfig.credentials;
  return {
    setHttpAuthScheme(httpAuthScheme) {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes() {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider() {
      return _httpAuthSchemeProvider;
    },
    setCredentials(credentials) {
      _credentials = credentials;
    },
    credentials() {
      return _credentials;
    }
  };
}, "getHttpAuthExtensionConfiguration");
var resolveHttpAuthRuntimeConfig2 = /* @__PURE__ */ __name((config2) => {
  return {
    httpAuthSchemes: config2.httpAuthSchemes(),
    httpAuthSchemeProvider: config2.httpAuthSchemeProvider(),
    credentials: config2.credentials()
  };
}, "resolveHttpAuthRuntimeConfig");

// node_modules/@aws-sdk/client-cloudwatch/dist-es/runtimeExtensions.js
var resolveRuntimeExtensions2 = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
  const extensionConfiguration = Object.assign(getAwsRegionExtensionConfiguration(runtimeConfig), getDefaultExtensionConfiguration(runtimeConfig), getHttpHandlerExtensionConfiguration(runtimeConfig), getHttpAuthExtensionConfiguration2(runtimeConfig));
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return Object.assign(runtimeConfig, resolveAwsRegionExtensionConfiguration(extensionConfiguration), resolveDefaultRuntimeConfig(extensionConfiguration), resolveHttpHandlerRuntimeConfig(extensionConfiguration), resolveHttpAuthRuntimeConfig2(extensionConfiguration));
}, "resolveRuntimeExtensions");

// node_modules/@aws-sdk/client-cloudwatch/dist-es/CloudWatchClient.js
var CloudWatchClient = class extends Client {
  static {
    __name(this, "CloudWatchClient");
  }
  config;
  constructor(...[configuration]) {
    const _config_0 = getRuntimeConfig4(configuration || {});
    super(_config_0);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters2(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig2(_config_6);
    const _config_8 = resolveCompressionConfig(_config_7);
    const _config_9 = resolveRuntimeExtensions2(_config_8, configuration?.extensions || []);
    this.config = _config_9;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
      httpAuthSchemeParametersProvider: defaultCloudWatchHttpAuthSchemeParametersProvider,
      identityProviderConfigProvider: /* @__PURE__ */ __name(async (config2) => new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config2.credentials
      }), "identityProviderConfigProvider")
    }));
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
  }
  destroy() {
    super.destroy();
  }
};

// node_modules/@aws-sdk/client-cloudwatch/dist-es/protocols/Aws_query.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// node_modules/@aws-sdk/client-cloudwatch/dist-es/models/CloudWatchServiceException.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var CloudWatchServiceException = class _CloudWatchServiceException extends ServiceException {
  static {
    __name(this, "CloudWatchServiceException");
  }
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _CloudWatchServiceException.prototype);
  }
};

// node_modules/@aws-sdk/client-cloudwatch/dist-es/models/models_0.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var ConcurrentModificationException = class _ConcurrentModificationException extends CloudWatchServiceException {
  static {
    __name(this, "ConcurrentModificationException");
  }
  name = "ConcurrentModificationException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ConcurrentModificationException.prototype);
    this.Message = opts.Message;
  }
};
var ConflictException = class _ConflictException extends CloudWatchServiceException {
  static {
    __name(this, "ConflictException");
  }
  name = "ConflictException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ConflictException.prototype);
    this.Message = opts.Message;
  }
};
var DashboardInvalidInputError = class _DashboardInvalidInputError extends CloudWatchServiceException {
  static {
    __name(this, "DashboardInvalidInputError");
  }
  name = "DashboardInvalidInputError";
  $fault = "client";
  dashboardValidationMessages;
  constructor(opts) {
    super({
      name: "DashboardInvalidInputError",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _DashboardInvalidInputError.prototype);
    this.dashboardValidationMessages = opts.dashboardValidationMessages;
  }
};
var ResourceNotFound = class _ResourceNotFound extends CloudWatchServiceException {
  static {
    __name(this, "ResourceNotFound");
  }
  name = "ResourceNotFound";
  $fault = "client";
  constructor(opts) {
    super({
      name: "ResourceNotFound",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ResourceNotFound.prototype);
  }
};
var InternalServiceFault = class _InternalServiceFault extends CloudWatchServiceException {
  static {
    __name(this, "InternalServiceFault");
  }
  name = "InternalServiceFault";
  $fault = "server";
  Message;
  constructor(opts) {
    super({
      name: "InternalServiceFault",
      $fault: "server",
      ...opts
    });
    Object.setPrototypeOf(this, _InternalServiceFault.prototype);
    this.Message = opts.Message;
  }
};
var InvalidParameterCombinationException = class _InvalidParameterCombinationException extends CloudWatchServiceException {
  static {
    __name(this, "InvalidParameterCombinationException");
  }
  name = "InvalidParameterCombinationException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidParameterCombinationException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidParameterCombinationException.prototype);
  }
};
var InvalidParameterValueException = class _InvalidParameterValueException extends CloudWatchServiceException {
  static {
    __name(this, "InvalidParameterValueException");
  }
  name = "InvalidParameterValueException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidParameterValueException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidParameterValueException.prototype);
  }
};
var MissingRequiredParameterException = class _MissingRequiredParameterException extends CloudWatchServiceException {
  static {
    __name(this, "MissingRequiredParameterException");
  }
  name = "MissingRequiredParameterException";
  $fault = "client";
  constructor(opts) {
    super({
      name: "MissingRequiredParameterException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _MissingRequiredParameterException.prototype);
  }
};
var ResourceNotFoundException = class _ResourceNotFoundException extends CloudWatchServiceException {
  static {
    __name(this, "ResourceNotFoundException");
  }
  name = "ResourceNotFoundException";
  $fault = "client";
  ResourceType;
  ResourceId;
  Message;
  constructor(opts) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
    this.ResourceType = opts.ResourceType;
    this.ResourceId = opts.ResourceId;
    this.Message = opts.Message;
  }
};
var InvalidNextToken = class _InvalidNextToken extends CloudWatchServiceException {
  static {
    __name(this, "InvalidNextToken");
  }
  name = "InvalidNextToken";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidNextToken",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidNextToken.prototype);
  }
};
var LimitExceededException = class _LimitExceededException extends CloudWatchServiceException {
  static {
    __name(this, "LimitExceededException");
  }
  name = "LimitExceededException";
  $fault = "client";
  Message;
  constructor(opts) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _LimitExceededException.prototype);
    this.Message = opts.Message;
  }
};
var LimitExceededFault = class _LimitExceededFault extends CloudWatchServiceException {
  static {
    __name(this, "LimitExceededFault");
  }
  name = "LimitExceededFault";
  $fault = "client";
  constructor(opts) {
    super({
      name: "LimitExceededFault",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _LimitExceededFault.prototype);
  }
};
var InvalidFormatFault = class _InvalidFormatFault extends CloudWatchServiceException {
  static {
    __name(this, "InvalidFormatFault");
  }
  name = "InvalidFormatFault";
  $fault = "client";
  constructor(opts) {
    super({
      name: "InvalidFormatFault",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _InvalidFormatFault.prototype);
  }
};

// node_modules/@aws-sdk/client-cloudwatch/dist-es/protocols/Aws_query.js
var se_GetMetricStatisticsCommand = /* @__PURE__ */ __name(async (input, context2) => {
  const headers = SHARED_HEADERS2;
  let body;
  body = buildFormUrlencodedString2({
    ...se_GetMetricStatisticsInput(input, context2),
    [_A2]: _GMS,
    [_V2]: _2
  });
  return buildHttpRpcRequest2(context2, headers, "/", void 0, body);
}, "se_GetMetricStatisticsCommand");
var de_GetMetricStatisticsCommand = /* @__PURE__ */ __name(async (output, context2) => {
  if (output.statusCode >= 300) {
    return de_CommandError2(output, context2);
  }
  const data = await parseXmlBody(output.body, context2);
  let contents = {};
  contents = de_GetMetricStatisticsOutput(data.GetMetricStatisticsResult, context2);
  const response = {
    $metadata: deserializeMetadata3(output),
    ...contents
  };
  return response;
}, "de_GetMetricStatisticsCommand");
var de_CommandError2 = /* @__PURE__ */ __name(async (output, context2) => {
  const parsedOutput = {
    ...output,
    body: await parseXmlErrorBody(output.body, context2)
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.cloudwatch#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context2);
    case "InternalServiceError":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context2);
    case "InvalidParameterCombination":
    case "com.amazonaws.cloudwatch#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context2);
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context2);
    case "MissingParameter":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context2);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context2);
    case "ConflictException":
    case "com.amazonaws.cloudwatch#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context2);
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context2);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context2);
    case "LimitExceeded":
    case "com.amazonaws.cloudwatch#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context2);
    case "InvalidParameterInput":
    case "com.amazonaws.cloudwatch#DashboardInvalidInputError":
      throw await de_DashboardInvalidInputErrorRes(parsedOutput, context2);
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatch#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context2);
    case "InvalidFormat":
    case "com.amazonaws.cloudwatch#InvalidFormatFault":
      throw await de_InvalidFormatFaultRes(parsedOutput, context2);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError3({
        output,
        parsedBody: parsedBody.Error,
        errorCode
      });
  }
}, "de_CommandError");
var de_ConcurrentModificationExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = de_ConcurrentModificationException(body.Error, context2);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ConcurrentModificationExceptionRes");
var de_ConflictExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = de_ConflictException(body.Error, context2);
  const exception = new ConflictException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ConflictExceptionRes");
var de_DashboardInvalidInputErrorRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = de_DashboardInvalidInputError(body.Error, context2);
  const exception = new DashboardInvalidInputError({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_DashboardInvalidInputErrorRes");
var de_InternalServiceFaultRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = de_InternalServiceFault(body.Error, context2);
  const exception = new InternalServiceFault({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InternalServiceFaultRes");
var de_InvalidFormatFaultRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidFormatFault(body.Error, context2);
  const exception = new InvalidFormatFault({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InvalidFormatFaultRes");
var de_InvalidNextTokenRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidNextToken(body.Error, context2);
  const exception = new InvalidNextToken({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InvalidNextTokenRes");
var de_InvalidParameterCombinationExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidParameterCombinationException(body.Error, context2);
  const exception = new InvalidParameterCombinationException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InvalidParameterCombinationExceptionRes");
var de_InvalidParameterValueExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = de_InvalidParameterValueException(body.Error, context2);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_InvalidParameterValueExceptionRes");
var de_LimitExceededExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = de_LimitExceededException(body.Error, context2);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_LimitExceededExceptionRes");
var de_LimitExceededFaultRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = de_LimitExceededFault(body.Error, context2);
  const exception = new LimitExceededFault({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_LimitExceededFaultRes");
var de_MissingRequiredParameterExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = de_MissingRequiredParameterException(body.Error, context2);
  const exception = new MissingRequiredParameterException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_MissingRequiredParameterExceptionRes");
var de_ResourceNotFoundRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = de_ResourceNotFound(body.Error, context2);
  const exception = new ResourceNotFound({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ResourceNotFoundRes");
var de_ResourceNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context2) => {
  const body = parsedOutput.body;
  const deserialized = de_ResourceNotFoundException(body.Error, context2);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata3(parsedOutput),
    ...deserialized
  });
  return decorateServiceException(exception, body);
}, "de_ResourceNotFoundExceptionRes");
var se_Dimension = /* @__PURE__ */ __name((input, context2) => {
  const entries = {};
  if (input[_Na] != null) {
    entries[_Na] = input[_Na];
  }
  if (input[_Va2] != null) {
    entries[_Va2] = input[_Va2];
  }
  return entries;
}, "se_Dimension");
var se_Dimensions = /* @__PURE__ */ __name((input, context2) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Dimension(entry, context2);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
}, "se_Dimensions");
var se_ExtendedStatistics = /* @__PURE__ */ __name((input, context2) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
}, "se_ExtendedStatistics");
var se_GetMetricStatisticsInput = /* @__PURE__ */ __name((input, context2) => {
  const entries = {};
  if (input[_N2] != null) {
    entries[_N2] = input[_N2];
  }
  if (input[_MN] != null) {
    entries[_MN] = input[_MN];
  }
  if (input[_D] != null) {
    const memberEntries = se_Dimensions(input[_D], context2);
    if (input[_D]?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ST] != null) {
    entries[_ST] = serializeDateTime(input[_ST]);
  }
  if (input[_ET] != null) {
    entries[_ET] = serializeDateTime(input[_ET]);
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_Sta] != null) {
    const memberEntries = se_Statistics(input[_Sta], context2);
    if (input[_Sta]?.length === 0) {
      entries.Statistics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Statistics.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ESx] != null) {
    const memberEntries = se_ExtendedStatistics(input[_ESx], context2);
    if (input[_ESx]?.length === 0) {
      entries.ExtendedStatistics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExtendedStatistics.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_U] != null) {
    entries[_U] = input[_U];
  }
  return entries;
}, "se_GetMetricStatisticsInput");
var se_Statistics = /* @__PURE__ */ __name((input, context2) => {
  const entries = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
}, "se_Statistics");
var de_ConcurrentModificationException = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_Mes] != null) {
    contents[_Mes] = expectString(output[_Mes]);
  }
  return contents;
}, "de_ConcurrentModificationException");
var de_ConflictException = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_Mes] != null) {
    contents[_Mes] = expectString(output[_Mes]);
  }
  return contents;
}, "de_ConflictException");
var de_DashboardInvalidInputError = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_me2] != null) {
    contents[_me2] = expectString(output[_me2]);
  }
  if (output.dashboardValidationMessages === "") {
    contents[_dVM] = [];
  } else if (output[_dVM] != null && output[_dVM][_m] != null) {
    contents[_dVM] = de_DashboardValidationMessages(getArrayIfSingleItem(output[_dVM][_m]), context2);
  }
  return contents;
}, "de_DashboardInvalidInputError");
var de_DashboardValidationMessage = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_DP] != null) {
    contents[_DP] = expectString(output[_DP]);
  }
  if (output[_Mes] != null) {
    contents[_Mes] = expectString(output[_Mes]);
  }
  return contents;
}, "de_DashboardValidationMessage");
var de_DashboardValidationMessages = /* @__PURE__ */ __name((output, context2) => {
  return (output || []).filter((e3) => e3 != null).map((entry) => {
    return de_DashboardValidationMessage(entry, context2);
  });
}, "de_DashboardValidationMessages");
var de_Datapoint = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_Ti] != null) {
    contents[_Ti] = expectNonNull(parseRfc3339DateTimeWithOffset(output[_Ti]));
  }
  if (output[_SCa] != null) {
    contents[_SCa] = strictParseFloat(output[_SCa]);
  }
  if (output[_Av] != null) {
    contents[_Av] = strictParseFloat(output[_Av]);
  }
  if (output[_Su] != null) {
    contents[_Su] = strictParseFloat(output[_Su]);
  }
  if (output[_Mi] != null) {
    contents[_Mi] = strictParseFloat(output[_Mi]);
  }
  if (output[_Ma] != null) {
    contents[_Ma] = strictParseFloat(output[_Ma]);
  }
  if (output[_U] != null) {
    contents[_U] = expectString(output[_U]);
  }
  if (output.ExtendedStatistics === "") {
    contents[_ESx] = {};
  } else if (output[_ESx] != null && output[_ESx][_e] != null) {
    contents[_ESx] = de_DatapointValueMap(getArrayIfSingleItem(output[_ESx][_e]), context2);
  }
  return contents;
}, "de_Datapoint");
var de_Datapoints = /* @__PURE__ */ __name((output, context2) => {
  return (output || []).filter((e3) => e3 != null).map((entry) => {
    return de_Datapoint(entry, context2);
  });
}, "de_Datapoints");
var de_DatapointValueMap = /* @__PURE__ */ __name((output, context2) => {
  return output.reduce((acc, pair) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = strictParseFloat(pair["value"]);
    return acc;
  }, {});
}, "de_DatapointValueMap");
var de_GetMetricStatisticsOutput = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_L] != null) {
    contents[_L] = expectString(output[_L]);
  }
  if (output.Datapoints === "") {
    contents[_Da] = [];
  } else if (output[_Da] != null && output[_Da][_m] != null) {
    contents[_Da] = de_Datapoints(getArrayIfSingleItem(output[_Da][_m]), context2);
  }
  return contents;
}, "de_GetMetricStatisticsOutput");
var de_InternalServiceFault = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_Mes] != null) {
    contents[_Mes] = expectString(output[_Mes]);
  }
  return contents;
}, "de_InternalServiceFault");
var de_InvalidFormatFault = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_me2] != null) {
    contents[_me2] = expectString(output[_me2]);
  }
  return contents;
}, "de_InvalidFormatFault");
var de_InvalidNextToken = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_me2] != null) {
    contents[_me2] = expectString(output[_me2]);
  }
  return contents;
}, "de_InvalidNextToken");
var de_InvalidParameterCombinationException = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_me2] != null) {
    contents[_me2] = expectString(output[_me2]);
  }
  return contents;
}, "de_InvalidParameterCombinationException");
var de_InvalidParameterValueException = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_me2] != null) {
    contents[_me2] = expectString(output[_me2]);
  }
  return contents;
}, "de_InvalidParameterValueException");
var de_LimitExceededException = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_Mes] != null) {
    contents[_Mes] = expectString(output[_Mes]);
  }
  return contents;
}, "de_LimitExceededException");
var de_LimitExceededFault = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_me2] != null) {
    contents[_me2] = expectString(output[_me2]);
  }
  return contents;
}, "de_LimitExceededFault");
var de_MissingRequiredParameterException = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_me2] != null) {
    contents[_me2] = expectString(output[_me2]);
  }
  return contents;
}, "de_MissingRequiredParameterException");
var de_ResourceNotFound = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_me2] != null) {
    contents[_me2] = expectString(output[_me2]);
  }
  return contents;
}, "de_ResourceNotFound");
var de_ResourceNotFoundException = /* @__PURE__ */ __name((output, context2) => {
  const contents = {};
  if (output[_RT] != null) {
    contents[_RT] = expectString(output[_RT]);
  }
  if (output[_RI] != null) {
    contents[_RI] = expectString(output[_RI]);
  }
  if (output[_Mes] != null) {
    contents[_Mes] = expectString(output[_Mes]);
  }
  return contents;
}, "de_ResourceNotFoundException");
var deserializeMetadata3 = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var throwDefaultError3 = withBaseException(CloudWatchServiceException);
var buildHttpRpcRequest2 = /* @__PURE__ */ __name(async (context2, headers, path, resolvedHostname, body) => {
  const { hostname, protocol = "https", port, path: basePath } = await context2.endpoint();
  const contents = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers
  };
  if (resolvedHostname !== void 0) {
    contents.hostname = resolvedHostname;
  }
  if (body !== void 0) {
    contents.body = body;
  }
  return new HttpRequest(contents);
}, "buildHttpRpcRequest");
var SHARED_HEADERS2 = {
  "content-type": "application/x-www-form-urlencoded"
};
var _2 = "2010-08-01";
var _A2 = "Action";
var _Av = "Average";
var _D = "Dimensions";
var _DP = "DataPath";
var _Da = "Datapoints";
var _ESx = "ExtendedStatistics";
var _ET = "EndTime";
var _GMS = "GetMetricStatistics";
var _L = "Label";
var _MN = "MetricName";
var _Ma = "Maximum";
var _Mes = "Message";
var _Mi = "Minimum";
var _N2 = "Namespace";
var _Na = "Name";
var _P = "Period";
var _RI = "ResourceId";
var _RT = "ResourceType";
var _SCa = "SampleCount";
var _ST = "StartTime";
var _Sta = "Statistics";
var _Su = "Sum";
var _Ti = "Timestamp";
var _U = "Unit";
var _V2 = "Version";
var _Va2 = "Value";
var _dVM = "dashboardValidationMessages";
var _e = "entry";
var _m = "member";
var _me2 = "message";
var buildFormUrlencodedString2 = /* @__PURE__ */ __name((formEntries) => Object.entries(formEntries).map(([key, value]) => extendedEncodeURIComponent(key) + "=" + extendedEncodeURIComponent(value)).join("&"), "buildFormUrlencodedString");
var loadQueryErrorCode = /* @__PURE__ */ __name((output, data) => {
  if (data.Error?.Code !== void 0) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
}, "loadQueryErrorCode");

// node_modules/@aws-sdk/client-cloudwatch/dist-es/commands/GetMetricStatisticsCommand.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var GetMetricStatisticsCommand = class extends Command.classBuilder().ep(commonParams2).m(function(Command2, cs, config2, o3) {
  return [
    getSerdePlugin(config2, this.serialize, this.deserialize),
    getEndpointPlugin(config2, Command2.getEndpointParameterInstructions())
  ];
}).s("GraniteServiceVersion20100801", "GetMetricStatistics", {}).n("CloudWatchClient", "GetMetricStatisticsCommand").f(void 0, void 0).ser(se_GetMetricStatisticsCommand).de(de_GetMetricStatisticsCommand).build() {
  static {
    __name(this, "GetMetricStatisticsCommand");
  }
};

// src/index.js
function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let value = bytes;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex++;
  }
  return `${value.toFixed(2)} ${units[unitIndex]}`;
}
__name(formatBytes, "formatBytes");
function buildTableData(data) {
  const dailyStats = {};
  let totalIn = 0, totalOut = 0;
  data.forEach((metric) => {
    const date = new Date(metric.Timestamp).toISOString().split("T")[0];
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
  rows.push(["\u603B\u8BA1", formatBytes(totalIn), formatBytes(totalOut)]);
  return rows;
}
__name(buildTableData, "buildTableData");
function buildPlainTable(rows) {
  const colWidths = [0, 0, 0];
  const header = ["\u65E5\u671F", "\u8F93\u5165\u6D41\u91CF", "\u8F93\u51FA\u6D41\u91CF"];
  [header, ...rows].forEach((row) => {
    row.forEach((cell, i3) => {
      colWidths[i3] = Math.max(colWidths[i3], cell.length);
    });
  });
  const lines = [];
  const headerLine = header.map((h3, i3) => h3.padEnd(colWidths[i3], " ")).join("  ");
  lines.push(headerLine);
  lines.push("-".repeat(headerLine.length));
  rows.slice(0, -1).forEach((row) => {
    lines.push(row.map((cell, i3) => cell.padEnd(colWidths[i3], " ")).join("  "));
  });
  lines.push("-".repeat(headerLine.length));
  const totalRow = rows[rows.length - 1].map((cell, i3) => cell.padEnd(colWidths[i3], " ")).join("  ");
  lines.push(totalRow);
  return lines.join("\n");
}
__name(buildPlainTable, "buildPlainTable");
function buildMarkdownTable(rows) {
  let md = "| \u65E5\u671F | \u8F93\u5165\u6D41\u91CF | \u8F93\u51FA\u6D41\u91CF |\n|------|----------|----------|\n";
  rows.slice(0, -1).forEach((row) => {
    md += `| ${row[0]} | ${row[1]} | ${row[2]} |
`;
  });
  const total = rows[rows.length - 1];
  md += `| **${total[0]}** | **${total[1]}** | **${total[2]}** |
`;
  return md;
}
__name(buildMarkdownTable, "buildMarkdownTable");
async function sendGotifyMessage(url, token, message) {
  const gotifyUrl = `${url}?token=${token}`;
  const body = JSON.stringify({
    title: "EC2\u6D41\u91CF\u65E5\u62A5",
    message,
    priority: 5
  });
  return await fetch(gotifyUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body
  });
}
__name(sendGotifyMessage, "sendGotifyMessage");
async function sendTelegramMessage(botToken, chatId, message) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const body = JSON.stringify({
    chat_id: chatId,
    text: "```\n" + message + "\n```",
    parse_mode: "Markdown"
  });
  console.log("Telegram\u63A8\u9001\u8BF7\u6C42URL:", url);
  console.log("Telegram\u63A8\u9001\u8BF7\u6C42Body:", body);
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body
    });
    console.log("Telegram\u63A8\u9001\u54CD\u5E94\u72B6\u6001:", resp.status);
    const respText = await resp.text();
    console.log("Telegram\u63A8\u9001\u54CD\u5E94\u5185\u5BB9:", respText);
    return resp;
  } catch (err) {
    console.log("Telegram\u63A8\u9001\u5F02\u5E38:", err);
    throw err;
  }
}
__name(sendTelegramMessage, "sendTelegramMessage");
var src_default = {
  async fetch(request, env2, ctx) {
    (void 0)({ dsn: "https://4aa85c04c06643ffb0f0ea089376234c@gp.liuq.ip-ddns.com/5" });
    const urlObj = new URL(request.url);
    const isMainPage = urlObj.pathname === "/";
    const ec2Client = new EC2Client({
      region: env2.AWS_REGION,
      credentials: {
        accessKeyId: env2.AWS_ACCESS_KEY_ID,
        secretAccessKey: env2.AWS_SECRET_ACCESS_KEY
      }
    });
    const cloudWatchClient = new CloudWatchClient({
      region: env2.AWS_REGION,
      credentials: {
        accessKeyId: env2.AWS_ACCESS_KEY_ID,
        secretAccessKey: env2.AWS_SECRET_ACCESS_KEY
      }
    });
    try {
      const ec2Command = new DescribeInstancesCommand({
        InstanceIds: [env2.EC2_INSTANCE_ID]
      });
      await ec2Client.send(ec2Command);
      const now = /* @__PURE__ */ new Date();
      const nowDateStr = now.toISOString().split("T")[0];
      const startTime = new Date(now.getFullYear(), now.getMonth(), 1);
      const endTime = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
      const networkInCommand = new GetMetricStatisticsCommand({
        Namespace: "AWS/EC2",
        MetricName: "NetworkIn",
        Dimensions: [
          {
            Name: "InstanceId",
            Value: env2.EC2_INSTANCE_ID
          }
        ],
        StartTime: startTime,
        EndTime: endTime,
        Period: 86400,
        // 按天统计
        Statistics: ["Average"]
      });
      const networkOutCommand = new GetMetricStatisticsCommand({
        Namespace: "AWS/EC2",
        MetricName: "NetworkOut",
        Dimensions: [
          {
            Name: "InstanceId",
            Value: env2.EC2_INSTANCE_ID
          }
        ],
        StartTime: startTime,
        EndTime: endTime,
        Period: 86400,
        // 按天统计
        Statistics: ["Average"]
      });
      const [networkInResponse, networkOutResponse] = await Promise.all([
        cloudWatchClient.send(networkInCommand),
        cloudWatchClient.send(networkOutCommand)
      ]);
      const combinedMetrics = networkInResponse.Datapoints.map((inMetric, index) => ({
        ...inMetric,
        OutAverage: networkOutResponse.Datapoints[index]?.Average || 0
      }));
      const rows = buildTableData(combinedMetrics);
      const plainTable = buildPlainTable(rows);
      const title2 = `${nowDateStr} EC2\u6D41\u91CF\u4F7F\u7528\u7EDF\u8BA1`;
      const pushContent = `${title2}

${plainTable}`;
      const channel2 = env2.PUSH_CHANNEL || "1";
      if (isMainPage) {
        if (channel2 === "1" || channel2 === "0") {
          if (env2.GOTIFY_URL && env2.GOTIFY_TOKEN) {
            console.log("\u51C6\u5907\u63A8\u9001Gotify...");
            try {
              const gotifyResp = await sendGotifyMessage(env2.GOTIFY_URL, env2.GOTIFY_TOKEN, pushContent);
              console.log("Gotify\u63A8\u9001\u54CD\u5E94\u72B6\u6001:", gotifyResp.status);
              const gotifyText = await gotifyResp.text();
              console.log("Gotify\u63A8\u9001\u54CD\u5E94\u5185\u5BB9:", gotifyText);
            } catch (pushErr) {
              console.log("Gotify\u63A8\u9001\u5F02\u5E38:", pushErr);
            }
          } else {
            console.log("\u672A\u914D\u7F6EGOTIFY_URL\u6216GOTIFY_TOKEN\uFF0C\u4E0D\u63A8\u9001Gotify");
          }
        }
        if (channel2 === "2" || channel2 === "0") {
          if (env2.TG_BOT_TOKEN && env2.TG_CHAT_ID) {
            console.log("\u51C6\u5907\u63A8\u9001Telegram...");
            try {
              await sendTelegramMessage(env2.TG_BOT_TOKEN, env2.TG_CHAT_ID, pushContent);
            } catch (tgErr) {
              console.log("Telegram\u63A8\u9001\u5F02\u5E38:", tgErr);
            }
          } else {
            console.log("\u672A\u914D\u7F6ETG_BOT_TOKEN\u6216TG_CHAT_ID\uFF0C\u4E0D\u63A8\u9001Telegram");
          }
        }
      } else {
        console.log("\u975E\u4E3B\u9875\u9762\u8BF7\u6C42\uFF0C\u4E0D\u63A8\u9001\u6D88\u606F\uFF0Cpath:", urlObj.pathname);
      }
      const markdownTable = buildMarkdownTable(rows);
      return new Response(markdownTable, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        }
      });
    } catch (error3) {
      console.log("\u4E3B\u6D41\u7A0B\u5F02\u5E38:", error3);
      return new Response(`\u9519\u8BEF: ${error3.message}`, {
        status: 500,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
  }
};

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e3) {
      console.error("Failed to drain the unused request body.", e3);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e3) {
  return {
    name: e3?.name,
    message: e3?.message ?? String(e3),
    stack: e3?.stack,
    cause: e3?.cause === void 0 ? void 0 : reduceError(e3.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env2, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env2);
  } catch (e3) {
    const error3 = reduceError(e3);
    return Response.json(error3, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-Ll1JrC/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env2, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env2, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env2, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env2, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-Ll1JrC/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env2, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env2, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env2, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init2) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init2.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env2, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env2, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env2, ctx) => {
      this.env = env2;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init2) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init2.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
