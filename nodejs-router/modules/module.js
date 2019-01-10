var ejs = require('ejs');

var app = {
    login(req,res){
        var method = req.method.toLocaleLowerCase();
        
        if(method == 'get'){
            console.log(123123)
            let data= {
                msg:'传递的数据',
                list:[{title:"文章1"},{title:"文章2"}]
            }
            // get传值
            let getData = url.parse(req.url,true).query;
            console.log(getData);
    
            ejs.renderFile('../views/login.ejs',{data,getData},(err,data)=>{
                if(err){
                    console.log(err);
                }
                res.end(data);
            })
        }else if(method == 'post'){
            //post传递数据
            var postdata = '';
            req.on('data',(chuck)=>{
                postdata += chuck;
            })
            req.on('end',(err,chuck)=>{
                console.log(postdata);
                fs.appendFile('login.txt',postdata+'\n',(err,data)=>{
                    if(err){
                        console.log(err)
                    }
                    console.log('写入成功')
                })
                res.end("<script>alert('登录成功');history.back();</script>")
            })
    
            
        }
    },
    register(req,res){
        console.log('register22222222222')
        res.end('register');
    },
    home(req,res){
        console.log('home3333333')
        res.end('home333333');
    }
}
module.exports=app
