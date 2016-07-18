// 加载自定义的BaseServer.js模块
var baseServerModule = require('./BaseServer')

// 监听端口
var port = 8888;
baseServerModule.startServer(port)