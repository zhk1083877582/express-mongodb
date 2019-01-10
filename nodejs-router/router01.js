var http = require('http');

var fs = require('fs');

var url = require('url');

var module = require('./modules/module.js');

// module.register('111','222');

http.createServer((req,res)=>{
    res.writeHead(200,{'contentType':"text/html;charset:utf-8"})
    let pathname = url.parse(req.url).pathname.replace('/','');
    // console.log(pathname);
    if(pathname == 'favicon.ico'){

    }else{
        console.log(pathname);
        try {
            module[pathname](req,res);            
        } catch (error) {
            module['home'](req,res)
        }
    }
    
    
}).listen(8080,()=>{
    console.log('Running ====== router01=======')
})