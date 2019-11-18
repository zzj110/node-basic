let http = require('http');
let port = 3000;
http.createServer((req, res) => { // 监听函数 当前请求到来时会执行回调函数
    // req:客户端 是一个可读流
    // res:服务端 是一个可写流
    console.log('start');
    res.setHeader('Content-Type', 'text/plain;charset=utf8')
    res.write('你好');
    res.end(); //调用end后结束响应

}).listen(port, () => {
    console.log(`服务器已经启动在${port}上`)

}); // 端口号尽量使用3000以上