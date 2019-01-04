//1.引入http模块

var http = require('http');
var url = require('url');
var fs = require('fs')
var path = require('path');//path模块
var mimeModule = require('./modules/getExtname');
// console.log(path.extname('index.html'));//获取文件的后缀名

console.log(mimeModule.getExtnams('.css'));
/**
 * request 获取url信息
 * response 浏览器返回响应信息
 * */ 
http.createServer(function(req,res){

    let pathName = url.parse(req.url).pathname;
    console.log(pathName);
    if(pathName == '/'){
        pathName = '/index.html';
    }

    var extname = path.extname(pathName);//获取文件的后缀名
    var mime = mimeModule.getExtnams(extname);
    res.writeHead(200,{"Content-Type":`${mime};charset=UTF-8`});

    console.log(extname);
    if(pathName!='/favicon.ico'){//过滤/favicon.ico请求
        console.log(pathName);
        fs.readFile('static/'+pathName,(err,result)=>{
            if(err){//没有读取文件
                // console.log('404');
                fs.readFile('static/404.html',(err,data)=>{
                    if(err){
                        // console.log(err);   
                    }else{
                        res.write(data);
                        res.end();
                    }
                })
            }else{
                res.write(result);
                res.end();
            }
        });
    }
    
    // 发送 HTTP 头部   
    // HTTP 状态值: 200 : OK 
    //设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8 
    
}).listen(8080)