exports.getMime = (fs,extname) =>{
    fs.readFile('./mime.json',(err,data)=>{
        if(err){
            console.log('mime.json不存在');
            return false;
        }

        console.log(data.toString());
        var Mime = JSON.parse(data.toString());
        console.log(Mime[extname]);
    })
}