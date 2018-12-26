//1.引入http模块

var http = require('http');
/**
 * request 获取url信息
 * response 浏览器返回响应信息
 * */ 
http.createServer(function(request,response){
    // 发送 HTTP 头部   
    // HTTP 状态值: 200 : OK 
    //设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8 
    response.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    response.write('http模块');
    response.end();
}).listen(8080)