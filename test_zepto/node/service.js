/**
 * Created by hongwei on 2016/7/18.
 */
//添加url依赖
var url = require('url');

//添加http依赖
var http = require('http');

//文件系统处理依赖包
var fs = require('fs');

//console.log('start ........');

//路径处理依赖包
var path = require('path');


http.createServer( function(request, response) {


    /**

    //获取URL，以便进行路由。
    var pathname = url.parse(request.url).pathname;
    console.log('pathname = ' + pathname);

    var realPath = "assets" + pathname;
    console.log('realPath = ' + realPath);


    //判断该路径是否存在。
    fs.exists(realPath, function (exists) {
        console.log('exists = ' + exists);
        if (!exists) {
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();
        } else {
            fs.readFile(realPath, "binary", function(err, file) {
                if (err) {
                    response.writeHead(500, {'Content-Type': 'text/plain'});
                    response.end(err);
                } else {
                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
     *
     */

    var pathname = url.parse(request.url).pathname;
    console.log('pathname = ' + pathname);

    var realPath = "assets" + pathname;
    console.log('realPath = ' + realPath);

    fs.readFile(realPath, "utf8", function(err, file) {
        if (err) {
            response.writeHead(500, {'Content-Type': 'text/plain'});
            response.end(err);
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(file, "binary");
            response.end();
        }
    });

}).listen(8888);


