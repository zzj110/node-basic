// 文件读写：需要先读到内存中 会存在内存淹没的问题
// 流：可以边读边写

let fs = require('fs');

// higtWaterMark 每次能读多少 默认64k
// 读取默认时buffer类型
let rs = fs.createReadStream('1.txt', { highWaterMark: 1 });
// console.log(rs);

// 需要监听事件 数据到来的事件rs.on('data',数据)
// 非流动模式=>流动模式
let str = [];
rs.on('data', function(chunk) {
    str.push(chunk);
    console.log(chunk);
    rs.pause(); //暂停 暂停的是on('data')的触发
    setTimeout(function() {
        rs.resume(); // 恢复data事件触发
    }, 1000);
});

// 默认data事件不停的触发，直到文件中的数据全部读出来
rs.on('end', function() {
    console.log(Buffer.concat(str).toString());
});

rs.on('err', function(err) {
    // 文件不存在
    console.log(err);
});


// on('data') on('end')  on('err') resume() pause()