var http = require('http');
var config = require('./config.js');
const app = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write(`common11111 ${config}`);
    res.end();
}).listen(8081);