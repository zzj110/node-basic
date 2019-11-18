let fs = require('fs');
// 可写流 默认占用16k
function pipe(source, target) {
    let rs = fs.createReadStream(source, { highWaterMark: 4 });
    let ws = fs.createWriteStream(target, { highWaterMark: 1 });
    //可读流.pipe(可写流)，会自动调用write和end方法
    rs.pipe(ws)
}
pipe('1.txt', '2.txt');