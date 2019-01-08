var url = require('url');
var fs = require('fs')
var path = require('path');//path模块

getMime = (extname,callback) =>{
    fs.readFile('../mime.json',function(err,data){

        if(err){
            console.log('mime.json文件不存在');
            return false;
        }
        //console.log(data.toString());

        var Mimes=JSON.parse(data.toString());

        var result= Mimes[extname] || 'text/html';

        callback(result)

    })
}

exports.statics = (req, res, staticpath) => {
    let pathName = url.parse(req.url).pathname;
    console.log(pathName);
    if(pathName == '/'){
        pathName = '/index.html';
    }

    var extname = path.extname(pathName);//获取文件的后缀名
    getMime(extname,(mime)=>{
        res.writeHead(200,{"Content-Type":`${mime};charset=UTF-8`});
        res.write(data);
        res.end();
    })

    console.log(extname);
    if(pathName!='/favicon.ico'){//过滤/favicon.ico请求
        console.log(pathName);
        fs.readFile(staticpath+'/'+pathName,(err,result)=>{
            if(err){//没有读取文件
                // console.log('404');
                fs.readFile(staticpath+'/404.html',(err,data)=>{
                    if(err){
                        // console.log(err);   
                    }else{
                        res.write(data);
                        res.end();
                    }
                })
            }else{
                res.write(result);
                res.end();
            }
        });
    }

}