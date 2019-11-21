let http = require('http');
let port = 3000;
let fs = require('fs');
let url = require('url'); // 把一个路径解析成一个对象
let path = require('path');
let mime = require('mime'); // 实现类型转化

let users = [{ id: 1, username: 'zz1你', password: 'admin' }, { id: 2, username: 'zz2', password: 'admin' }];
http.createServer((req, res) => { // 监听函数 当前请求到来时会执行回调函数
    let { pathname, query } = url.parse(req.url, true);
    let id = query.id; // 查询参数中是否有值
    if (pathname == '/user') {
        res.setHeader('Content-Type', 'application/json;charset=utf8');
        switch (req.method) {
            case 'GET':
                if (!id) { // 查询所有
                    res.end(JSON.stringify(users));
                } else {

                }
                break;
            case 'POST': // 添加
                let str = '';
                req.on('data', function(chunk) {
                    str += chunk;
                });
                req.on('data', function(chunk) {
                    let user = JSON.parse(str);
                    user.id = users.length ? users[users.length - 1].id + 1 : 1;
                    users.push(user)
                    res.end(JSON.stringify(user))
                });
                break;
            case 'DELETE': //删除
                console.log(id)
                users = users.filter(item => item.id != id);
                res.end(JSON.stringify({}))
                break;
            case 'PUT':
                break;
        }
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

});