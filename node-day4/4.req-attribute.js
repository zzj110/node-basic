let express = require('express');
let app = express();

app.listen(3000, function() {
    console.log('start 3000')
});
app.get('/user', function(req, res) {
    console.log(req.query); //express扩展属性
    console.log(req.url); //获取整个路径
    console.log(req.path); //express扩展属性
    console.log(req.headers);
    console.log(req.method);

})