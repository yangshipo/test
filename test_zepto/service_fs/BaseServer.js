//------------------------------------------------
//WebSvr.js
//  һ����ʾWeb������
//------------------------------------------------

//��ʼ����������ʱ��
console.time('[WebSvr][Start]');

//����ģ��
var libHttp = require('http');    //HTTPЭ��ģ��
var libUrl=require('url');    //URL����ģ��
var libFs = require("fs");    //�ļ�ϵͳģ��
var libPath = require("path");    //·������ģ��

//����·����ȡ�������������ַ���,����http����ͷ
var funGetContentType = function (filePath) {
    var contentType="";

    //ʹ��·������ģ���ȡ�ļ���չ��
    var ext=libPath.extname(filePath);

    switch(ext){
        case ".html":
            contentType= "text/html";
            break;
        case ".js":
            contentType="text/javascript";
            break;
        case ".css":
            contentType="text/css";
            break;
        case ".gif":
            contentType="image/gif";
            break;
        case ".jpg":
            contentType="image/jpeg";
            break;
        case ".png":
            contentType="image/png";
            break;
        case ".ico":
            contentType="image/icon";
            break;
        default:
            contentType="application/octet-stream";
    }

    return contentType; //�������������ַ���
};

//Web������������,��������,����Web����
var funWebSvr = function (req, res){
    var reqUrl=req.url; //��ȡ�����url

    //�����̨��������·��
    console.log(reqUrl);

    //ʹ��url����ģ���ȡurl�е�·����
    var pathName = libUrl.parse(reqUrl).pathname;

    if (libPath.extname(pathName)=="") {
        //���·��û����չ��
        pathName+="/"; //ָ������Ŀ¼
    }

    if (pathName.charAt(pathName.length-1)=="/"){
        //�������Ŀ¼
        pathName+="index.html"; //ָ��ΪĬ����ҳ
    }

    //ʹ��·������ģ��,��װʵ���ļ�·��
    var filePath = libPath.join("./WebRoot",pathName);

    //�ж��ļ��Ƿ����    
    libFs.exists(filePath,function(exists){
        if(exists){//�ļ�����
            //�ڷ���ͷ��д����������
            res.writeHead(200, {"Content-Type": funGetContentType(filePath) });

            //����ֻ�������ڷ���
            var stream = libFs.createReadStream(filePath, {flags : "r", encoding : null});

            //ָ���������ȡ����,����404����
            stream.on("error", function() {
                res.writeHead(404);
                res.end("<h1>404 Read Error</h1>");
            });

            //�����ļ�����http�������Ĺܵ�,���ڷ���ʵ��Web����
            stream.pipe(res);
        }
        else { //�ļ�������

            //����404����
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end("<h1>404 Not Found</h1>");
        }
    });

};

var startServer = function (port) {
    //����һ��http������
    var webSvr=libHttp.createServer(funWebSvr);

    //ָ�������������¼���Ӧ
    webSvr.on("error", function(error) {
        console.log(error);  //�ڿ���̨�����������Ϣ
    });


    //��ʼ����8124�˿�
    webSvr.listen(port,function(){

        //�����̨���������������Ϣ
        console.log('[WebSvr][Start] running at http://127.0.0.1:8124/');

        //��������������ʱ�������
        console.timeEnd('[WebSvr][Start]');
    });
};

// ����ģ��
exports.startServer = startServer;

