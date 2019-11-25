let express = require('express');
let path = require('path');
let router = express.Router(); //创建一个路由池子
router.get('/login', function(req, res) {
    res.send('login')
});
router.get('/register', function(req, res) {
    //path.resolve是根据运行文件的位置来解析的
    // console.log(path.resolve(__dirname, '../views/register.html'))
    // console.log(path.join(__dirname, '../views/register.html'))
    res.sendFile(path.resolve(__dirname, '../views/register.html'))
});
router.post('/register', function(req, res) {
    //res.send(req.body);
    // 开头路径不能是/
    res.render('aaa/result', {...req.body, arr: [1, 2, 3, 3], html: '<h1>dfdfds</h1>' });
});
router.post('/login', function(req, res) {
    console.log(req.body)
});
module.exports = router;