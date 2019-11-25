let express = require('express');
let app = express();
app.listen(3000);


//拦截功能  res和req都是同一个
app.param('id', function(req, res, next) {
    req.params.id = `你的学号是${req.params.id}`;
    next(); // 调用了next就可以向下匹配，如果在这里结束了请求就不走了
    //res.end()
})
app.param('name', function(req, res, next) {

    req.params.name = `你的名字是${req.params.name}`;
    next()
})
app.get('/user/:id/:name', function(req, res) {
    res.header('Content-Type', 'text/plain;charset=utf8');
    res.end(`${req.params.id},${req.params.name}`)
})