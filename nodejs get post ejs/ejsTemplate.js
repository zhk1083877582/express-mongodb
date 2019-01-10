//1.引入http模块

var http = require('http');

var url = require('url');
var router = require('./modules/router');
var ejs = require('ejs')

http.createServer(function(req,res){
    res.writeHead(200,{'contentType':"text/html;charset:utf-8"})
    // router.statics(req,res,'static')//静态服务器
    let pathName = url.parse(req.url).pathname;
    if(pathName == '/login'){
        let data= {
            msg:'传递的数据',
            list:[{title:"文章1"},{title:"文章2"}]
        }
        
        ejs.renderFile('./views/login.ejs',{data},(err,data)=>{
            if(err){
                console.log(err);
            }
            res.end(data);
        })
        
    }else if(pathName == '/register'){
        let data='register数据 && register路由';
        ejs.renderFile('./views/register.ejs',{
            msg:data
        },(err,data)=>{
            if(err){
                console.log(err);
            }
            res.end(data);
        })
        res.end('register');
    }else if(pathName == '/order'){
        res.end('order');
    }else{
        ejs.renderFile('./views/index.ejs',{},(err,data)=>{
            res.end(data);
        })
    }
    
}).listen(8080,()=>{
    console.log('Running nodejs');
})