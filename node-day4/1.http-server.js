let http = require('http');
let url = require('url');
http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'text/plain;charset=utf8');
    let { pathname, query } = url.parse(req.url, true);
    if (pathname === '/signin') {
        let str = '';
        req.on('data', function(chunk) {
            str += chunk;
        });
        req.on('end', function() {
            console.log(str)
        })
        return res.end('登录');
    }
    if (pathname === '/signup') {
        res.end('注册')
        return;
    }
    res.end('404')
}).listen(3000)