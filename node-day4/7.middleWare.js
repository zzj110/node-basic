// 中间件 当我们访问到最终目标之前执行的内容

let express = require('express');
let app = express();
app.listen(3000);

// 1.中间件的第一个功能 可以进行权限判断
// 2.可以进行对req和res的属性扩展
// 3.中间件放在要执行路径的上面
// 4.中间件默认情况下都匹配  可以指定匹配什么开头的路径
app.use('/water', function(req, res, next) {
    console.log('过滤石头');
    req.stone = 'too big';
    next('错误');
})
app.use('/water', function(req, res, next) {
    console.log('过滤沙子');
    req.sand = 'too big';
    next();
})
app.use(function(req, res, next) {
    res.header('Content-Type', 'text/plain;charset=utf8');
    next();
})
app.get('/water/a', function(req, res) {
    console.log(req.stone, req.sand);
    res.end('水');
})
app.get('/food', function(req, res) {
    console.log(req.stone, req.sand);
    res.end('食物');
});
// 错误中间件有四个参数 fn.length==4
app.use(function(err, req, res, next) {
    console.log(err)
    next();
})