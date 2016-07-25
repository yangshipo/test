var http = require('http'),
    url  = require('url');

http.createServer(function(req, res){

    var pathname = url.parse(req.url).pathname;

    if (pathname ==='/'){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('Hello, I\'m an HTTP server.');
    } else if (pathname === '/about'){
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('About us\n');
    } else if (pathname === '/redirect') {
        // �ض���
        res.writeHead(302, {'Location':'/'});
        res.end();
    } else{
        res.writeHead(404, {'Content-Type':'text/plain'});
        res.end('Page not found\n');
    }
}).listen(3000,"127.0.0.1");
console.log('Server running at http://127.0.0.1:3000');