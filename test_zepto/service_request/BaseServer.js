// 加载http模块
var httpModule = require('http');
var urlModule = require('url');

// 定义导出模块
function startServer(port) {

    // 打印请求信息
    function printRequestInfo(request) {
        console.log('收到请求, 请求信息为:');
        console.log('  method         = ' + request.method);
        console.log('  url            = ' + request.url);
        console.log('  headers        = ' + request.headers);
        console.log('  trailers       = ' + request.trailers);
        console.log('  httpVersion    = ' + request.httpVersion);
        console.log('  connection     = ' + request.connection);

        var url = urlModule.parse(request.url);

        console.log('url详细信息 = ' + url);
        console.log('  protocol = ' + url.protocol);
        console.log('  slashes  = ' + url.slashes);
        console.log('  auth     = ' + url.auth);
        console.log('  host     = ' + url.host);
        console.log('  port     = ' + url.port);
        console.log('  hostname = ' + url.hostname);
        console.log('  hash     = ' + url.hash);
        console.log('  search   = ' + url.search);
        console.log('  query    = ' + url.query);
        console.log('  pathname = ' + url.pathname);
        console.log('  path     = ' + url.path);
        console.log('  href     = ' + url.href);

        console.log('headers详细信息:');
        for (var header in request.headers) {
            console.log('  ' + header + '     = ' + request.headers[header]);
        }
    }

    // 回调函数
    function onRequest(request, response) {
        printRequestInfo(request);

        response.writeHead(200, {"Content-Type": 'text/plain'});
        response.write('Hello World');
        response.end();
    }

    // 创建服务
    var server = httpModule.createServer(onRequest);

    // 开始监听
    server.listen(port);

    console.log('server started. http://localhost:'+port)
}

// 导出模块
exports.startServer = startServer;