/**
 * Created by hongwei on 2016/7/18.
 */

var http = require("http");

// 定义导出模块
function startServer(port) {
    // 回调函数
    function onRequest(request, response) {

        console.log('request received.');

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    // 创建服务
    var server = http.createServer(onRequest);

    // 开始监听
    server.listen(port);

    console.log('server started. httpModule://localhost:'+port)
}

// 导出模块
exports.startServer = startServer;