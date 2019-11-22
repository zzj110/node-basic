let express = require('express');
let app = express();
app.listen(3000);



app.use(function(req, res, next) {
    res.header('Content-Type', 'text/plain;charset=utf8');
    let startTime = new Date().getTime();
    let end = res.end;
    res.end = function(...arg) {
        console.log(new Date().getTime() - startTime);
        end.call(res, ...arg);
    }
    next();
})
app.get('/water', function(req, res) {
    for (let i = 0; i < 100000; i++) {}
    res.end('水');
})
app.get('/food', function(req, res) {
    for (let i = 0; i < 10000000; i++) {}
    res.end('食物');
});