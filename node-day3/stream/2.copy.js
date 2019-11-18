let fs = require('fs');
// 可写流 默认占用16k
function pipe(source, target) {
    let rs = fs.createReadStream(source, { highWaterMark: 4 });
    let ws = fs.createWriteStream(target, { highWaterMark: 1 });
    //开启可读流
    rs.on('data', function(chunk) {
        if (ws.write(chunk) === false) { //写入流不能继续写入
            rs.pause(); //暂停读取
        }

    })
    ws.on('drain', function() {
        console.log('可以继续读')
        rs.resume(); //当前读入的内容写入到文件中 调用继续读取
    });
    rs.on('end', function() { // 当读取完毕 强制将内存中未写完的内容写入文件中，关闭文件
        ws.end()
    })

}
pipe('1.txt', '2.txt');