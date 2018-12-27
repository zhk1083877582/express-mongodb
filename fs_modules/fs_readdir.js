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

fs.readdir('html',(err,data)=>{
    /**
     * fs.appendFile("文件路径",data,function(err){});
     * 参数说明：
        filename String                     文件名
        data String|buffer                  将要写入的内容，可以使字符串 或 buffer数据。
        option Object                       数组对象
            · encoding   (string)  可选值，默认 ‘utf8′，当data使buffer时，该值应该为 ignored。
            · mode       (Number)           文件读写权限，默认值 438
            · flag       (String)           默认值 ‘w'
        callback Function                   回调，传递一个异常参数err。
    */
    if(err){
        console.log(`读取失败${err}`)
        return false
    }
    console.log(`${data}`);
})

