//1.引入http模块

var http = require('http');
var url = require('url');
/**
 * request 获取url信息
 * response 浏览器返回响应信息
 * */ 
http.createServer(function(req,res){
    //输入http://localhost:8080/new?aid=123
    //输入http://localhost:8080/new?aid=123&cid=456

    //req.url 获取浏览器地址的信息
    

    if(req.url!='/favicon.ico'){
        console.log(req.url)
        let result = url.parse(req.url,true);//url.parse 第一个参数是地址  第二个参数如果是true的话直接把个体传值转换为对象
        console.log(result);    
        console.log(`aid = ${result.query.aid}`);
        console.log(`cid = ${result.query.cid}`);
    }




    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    res.write('url模块111');
    res.end();
}).listen(8080)