/*      
        1. fs.stat  检测是文件还是目录  
        2. fs.mkdir  创建目录 
        3. fs.writeFile  创建写入文件  
        4. fs.appendFile 追加文件 
        5.fs.readFile 读取文件  
        6.fs.readdir 读取目录  
        7.fs.rename 重命名  
        8. fs.rmdir  删除目录  
        9. fs.unlink 删除文件  
        10. fs.createReadStream 从文件流中读取数据  
        11. fs.createWriteStream  写入文件 
        12. 管道流
*/
var fs = require('fs');

fs.stat('html',(err,stats)=>{
    if(err){
        console.log(`${err}`)
    }else{
        // console.log(stats);
        console.log(`文件${stats.isFile()}`);
        console.log(`目录${stats.isDirectory()}`);
    }
})

