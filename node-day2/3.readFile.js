// fileSystem 文件系统 文件的读取
// 既有同步又有异步的方法，异步有callback
let fs = require('fs');

// 同步读取
// 1.读取文件  文件必须存在
// 2.读取默认的类型是buffer
let result = fs.readFileSync('3.fs.js', 'utf8');
console.log(result);

let content1 = fs.readFileSync('./1.txt', 'utf8');
let content2 = fs.readFileSync(content1, 'utf8');
console.log(content2);

// 异步的方案 会导致回调函数，不方便维护
fs.readFile('./1.txt', 'utf8', function(err, data) { //err错误第一
    if (err) return console.log(err);
    fs.readFile(data, 'utf8', function(err, data) {
        if (err) return console.log(err);
        console.log(data)
    });
})