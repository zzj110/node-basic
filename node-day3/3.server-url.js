let http = require('http');
let port = 3000;
let fs = require('fs');
let url = require('url'); // 把一个路径解析成一个对象
let path = require('path');
http.createServer((req, res) => { // 监听函数 当前请求到来时会执行回调函数
    // true的作用是将query转成一个对象
    //let urlObj = url.parse('http://username:password@localhost:300/s?a=1&b=2#hash', true);
    //console.log(urlObj);
    let { pathname, query } = url.parse(req.url, true);

    // 根据不同的路径返回不同的内容
    // 如果访问的是/ 显示主页html
    // 如果访问的是文件 将文件读取返回
    // 如果访问的是文件夹 默认去找html文件
    // 如果文件不存在 返回404
    fs.stat('.' + pathname, function(err, stats) {
        if (err) {
            res.statusCode = 404;
            res.end(`${pathname} not found`)
        } else if (stats.isFile()) {
            fs.createReadStream('.' + pathname).pipe(res);
        } else if (stats.isDirectory()) {
            res.setHeader('Content-Type', 'text/html,charset=utf8')
            let p = path.resolve('.' + pathname, './index.html');
            fs.createReadStream(p).pipe(res);
        }
    })

}).listen(port, () => {
    console.log(`服务器已经启动在${port}上`)

}); // 端口号尽量使用3000以上