#青岛银行手机银行 v4.0.0 前端

## 一、使用指南

    npm install 安装程序所需要的node模块
    npm run dev package(包名，src/modules目录下的文件名)
    npm run init-page package/module/page，新建页面

## 二、规范

    1、安装editorconfig插件
    2、文件命名采用驼峰方式

## 三、已封装组件

    详见/modules/demo/index

## 四、jsapi 调用封装

    详见common/js/native.js，用法App.Native.pushWindow

## 五、打包

    npm run build 一级目录   prod
    node zips prod
    prod:环境参数

## 六、 发版

    https://mappcenter.cloud.alipay.com     移动开发平台mPaaS

## 七、 启动工程

    npm run dev 一级目录
