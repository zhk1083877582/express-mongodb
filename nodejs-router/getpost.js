//1.引入http模块

var http = require('http');

var url = require('url');
// var router = require('./modules/router');
var ejs = require('ejs');
var fs = require('fs');

http.createServer(function(req,res){
    res.writeHead(200,{'contentType':"text/html;charset:utf-8"});
    // 获取请求是get 还是  post
    var method = req.method.toLocaleLowerCase();
    console.log(method)


    // router.statics(req,res,'static')//静态服务器
    let pathName = url.parse(req.url).pathname;
    if(pathName == '/login'){
        
        let data= {
            msg:'传递的数据',
            list:[{title:"文章1"},{title:"文章2"}]
        }
        
        ejs.renderFile('./views/from.ejs',{data},(err,data)=>{
            if(err){
                console.log(err);
            }
            res.end(data);
        })
        
    }else if(pathName == '/dologin'&& method == 'get'){
        let data= {
            msg:'传递的数据',
            list:[{title:"文章1"},{title:"文章2"}]
        }
        // get传值
        let getData = url.parse(req.url,true).query;
        console.log(getData);

        ejs.renderFile('./views/login.ejs',{data,getData},(err,data)=>{
            if(err){
                console.log(err);
            }
            res.end(data);
        })
    }else if(pathName == '/dologin'&& method == 'post'){
        //post传递数据
        var postdata = '';
        req.on('data',(chuck)=>{
            postdata += chuck;
        })
        req.on('end',(err,chuck)=>{
            console.log(postdata);
            fs.appendFile('login.txt',postdata+'\n',(err,data)=>{
                if(err){
                    console.log(err)
                }
                console.log('写入成功')
            })
            res.end("<script>alert('登录成功');history.back();</script>")
        })

        
    }else{
        ejs.renderFile('./views/index.ejs',{},(err,data)=>{
            res.end(data);
        })
    }
    
}).listen(8080,()=>{
    console.log('Running nodejs');
})