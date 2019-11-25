let express = require('express');
// 引用express模块 express是一个函数

let app = express();
app.listen(3000, function() {
    console.log('start 3000')
})