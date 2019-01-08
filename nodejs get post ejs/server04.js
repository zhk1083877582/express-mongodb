//1.引入http模块

var http = require('http');

var router = require('./modules/router');

http.createServer(function(req,res){
    
    router.statics(req,res,'static')
    // 发送 HTTP 头部   
    // HTTP 状态值: 200 : OK 
    //设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8 
    
}).listen(8080)