let fs = require('fs');
// 可写流 默认占用16k
let ws = fs.createWriteStream('1.txt', { highWaterMark: 1 });
console.log(ws);

// 可写流有两个方法 write end
ws.write('2'); // 科协流写数据必须是字符串或者buffer类型
ws.write('2');
ws.write('2');
ws.on('drain', function() { // 当读入的文件全部写入后就恢复读取
    console.log('drain')
})
ws.end('写完了！'); //end调用后会把所有的write中的内容以最快的速度写入文件