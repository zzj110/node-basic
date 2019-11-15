//调用写好的方法
// 如果自己写的文件要通过./的方式  文件模块
// 如果是js,node,json后缀可以省略，会自动添加.js .json .node一次匹配
let Dialog = require('./dialog-es6');
let dialog = new Dialog();
dialog.$show();