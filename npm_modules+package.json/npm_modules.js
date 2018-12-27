//npm install silly-datetime --save

//引入模块 

var http = require('http');
var sd = require('silly-datetime');
var md5 = require('md5-node');

var app = http.createServer((req,res)=>{
    
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    let datetime = sd.format(new Date(),'YYYY/MM/DD HH:mm:ss');
    let str = '12345'; 
    res.write(`npm模块安装+package.json${datetime}<br/>`);
    res.write(md5(str));
    res.end();
})
app.listen(8080,'127.0.0.1');