//1.引入http模块

var http = require('http');
var url = require('url');
var fs = require('fs')
/**
 * request 获取url信息
 * response 浏览器返回响应信息
 * */ 
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});

    let pathName = req.url
    if(pathName == '/'){
        pathName = '/index.html';
    }

    if(pathName!='/favicon.ico'){//过滤/favicon.ico请求
        console.log(pathName);
        fs.readFile('static/'+pathName,(err,result)=>{
            if(err){//没有读取文件
                console.log('404')
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