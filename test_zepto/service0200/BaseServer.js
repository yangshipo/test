/**
 * Created by hongwei on 2016/7/18.
 */

var http = require("http");

// ���嵼��ģ��
function startServer(port) {
    // �ص�����
    function onRequest(request, response) {

        console.log('request received.');

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    // ��������
    var server = http.createServer(onRequest);

    // ��ʼ����
    server.listen(port);

    console.log('server started. httpModule://localhost:'+port)
}

// ����ģ��
exports.startServer = startServer;