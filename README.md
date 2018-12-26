#node.js + koa2 

## 一、Nodejs 自启动工具 supervisor 

    1. 首先安装 supervisor 
    npm install -g supervisor 
    2. 使用 supervisor 代替 node 命令启动应用 
    supervisor server.js
## 二、 commonjs 规范
    1.我们可以把公共的功能抽离成为一个单独的 js 文件作为一个模块，默认情况下面这 个模块里面的方法或者属性，外面是没法访问的。如果要让外部可以访问模块里面的方法或 者属性，就必须在模块里面通过  exports 或者 module.exports 暴露属性或者方法。
        CommonJS规范，以及exports、module.exports和export、export default区别    https://blog.csdn.net/qq_38801354/article/details/78024680
 
    2. 在需要使用这些模块的文件中，通过 require 的方式引入这个模块。这个时候就可以 使用模块里面暴露的属性和方法。 
    CommonJS 就是模块化的标准，nodejs就是 CommonJS（模块化）的实现
 
     