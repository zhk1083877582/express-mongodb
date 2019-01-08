//1.引入http模块

var http = require('http');

var url = require('url');
var router = require('./modules/router');

http.createServer(function(req,res){
    
    // router.statics(req,res,'static')//静态服务器
    let pathName = url.parse(req.url).pathname;
    if(pathName == '/login'){
        res.end('login');
    }else if(pathName == '/register'){
        res.end('register');
    }else if(pathName == '/order'){
        res.end('order');
    }else{
        res.end('index');
    }
    
}).listen(8080,()=>{
    console.log('Running nodejs');
})