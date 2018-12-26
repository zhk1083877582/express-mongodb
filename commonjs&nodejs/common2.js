var http = require('http');
var tools = require('./tools.js');//可以省略.js 后缀
const app = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write(`common11111 ${tools.seyHello()}`);
    console.log(tools.add(1,2));
    res.end();
}).listen(8082);