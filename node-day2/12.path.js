let path = require('path');

// 拼一个路径
console.log(path.join('./a', './b'));
console.log(path.join(__dirname, './b'));
console.log(path.join(__dirname, './b', '..'));

// 解析一个绝对路径
console.log(path.resolve('/a', '/b'));
console.log(path.resolve('/a', './b'));
console.log(path.resolve('./a', './b'));

// 环境变量分割符
console.log(path.delimiter);

// 系统分割符
console.log(path.win32.delimiter);
console.log(path.posix.sep);