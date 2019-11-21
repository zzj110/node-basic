l et http = require('http');
let port = 3000;
let fs = require('fs');
let url = require('url'); // 把一个路径解析成一个对象
let path = require('path');
let mime = require('mime'); // 实现类型转化
http.createServer((req, res) => { // 监听函数 当前请求到来时会执行回调函数
    let { pathname, query } = url.parse(req.url, true);
    if (pathname === '/clock') {
        let date = new Date();
        res.end(JSON.stringify({ time: date.toLocaleString() }));
        return;
    }

    fs.stat('.' + pathname, function(err, stats) {
        if (err) {
            res.statusCode = 404;
            res.end(`${pathname} not found`)
        } else if (stats.isFile()) {
            res.setHeader('Content-Type', mime.getType(pathname) + ';charset=utf8')
            fs.createReadStream('.' + pathname).pipe(res);
        } else if (stats.isDirectory()) {
            res.setHeader('Content-Type', 'text/html;charset=utf8')
            let p = path.resolve('.' + pathname, './index.html');
            fs.createReadStream(p).pipe(res);
        }
    })

}).listen(port, () => {
    console.log(`服务器已经启动在${port}上`)

}); // 端口号尽量使用3000