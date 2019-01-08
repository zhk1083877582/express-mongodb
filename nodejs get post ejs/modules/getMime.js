
exports.getMime=function(fs,extname,callback){  /*获取后缀名的方法*/

    fs.readFile('./mime.json',function(err,data){

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