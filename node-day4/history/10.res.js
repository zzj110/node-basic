let express = require('express');
let app = express();
app.listen(3000);


// 直接返回对象 res.json()
// 返回HTML页面 res.sendFile()
// res.ststusCode res.end => res.sendStatus();
// res.end() res.header() =>res.send()

app.get('/json', function(req, res) {
    res.json({ name: 'zz', age: 1 }) //响应json
})
app.get('/', function(req, res) {
    // 不能通过../查找(root是不支持的)想读取到确切的文件，可以用path模块进行拼接
    res.sendFile('./index.html', { root: __dirname });
    //res.sendFile(__dirname + '/index.html');
})

app.get('/status', function(req, res) {
    res.sendStatus(200)
})
app.use(function(req, res, next) {
    res.mySend = function(data) {
        res.header('Content-Type', 'text/plain;charset=utf8');
        if (typeof data === 'object') {
            return res.end(JSON.stringify(data));
        }
        if (typeof data === 'string') {
            return res.end(data)
        }
        if (typeof data === 'number') {
            res.statusCode = data;
            res.end(require('_http_server').STATUS_CODES[data])

        }
    }
    next();
})
app.get('/send', function(req, res) {
    //res.send(200);
    //res.send({ name: 'zz', age: 1 });
    res.mySend(404)

})