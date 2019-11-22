let express = require('express');
let app = express();

app.listen(3000, function() {
    console.log('start 3000')
})

// app监听函数上 扩展了很多方法 包括get put delete post RESTful风格
// 路由从上到下匹配 匹配到并响应结束 就不会继续向下走
// 路径值的是pathname 没有问号后面的内容
app.get('/signin', function(req, res) {
    res.end('登录')
})
app.post('/signin', function(req, res) {
    res.end('post登录')
})
app.get('/signup', function(req, res) {
    res.end('注册')
});
// all表示所有的方法 *表示所有的路径 一般放到最后
app.all('*', function(req, res) {
    res.end('404')
})