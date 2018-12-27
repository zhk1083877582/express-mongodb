var fs = require('fs');


//1.判断服务器上有没有upload文件夹，如果没有创建upload文件夹  （用于图片上传）
// fs.stat('upload',(err,stats)=>{
//     if(err){
//         console.log(`${err}`);
//         fs.mkdir('upload',(error)=>{
//             if(error){
//                 console.log(`创建失败${error}`);
//                 return false;
//             }
//             console.log(`创建成功`);
//         })
//     }
//     console.log(`目录已经存在`)
//     console.log(stats.isDirectory());
// })

//查看某一个文件夹下的所有目录
var fileArr = [];
fs.readdir('../html',(err,data)=>{
    if(err){
        // console.log(err);
    }else{/**判断是目录还是文件夹 */
        data.map((item,index)=>{
            console.log(item);
            fs.stat(`../html/`+item,(err,stats)=>{
                if(err){
                    console.log(err);
                    return false;
                }
                if(stats.isDirectory()){
                    fileArr.push(item);
                    console.log(fileArr)
                };
            })
        })
        
    }
    
})
