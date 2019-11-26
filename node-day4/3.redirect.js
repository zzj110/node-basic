let express = require('express');
let app = express();
app.listen(3000);

app.get('/', function(req, res) {
    res.setHeader('Location', 'http://www.baidu.com');
    res.statusCode = 302;
    res.end();
    //res.redirect('http://www.baidu.com')
})