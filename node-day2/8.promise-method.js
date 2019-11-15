// 1.回调地狱  链式写法then
// 2.合并异步返回的结果 promise.all，如果都成功才算成功，有一个失败了就失败了
// promise.race()谁快以谁为主，得到结果以后就结束了
let fs = require('fs');
let { promisify } = require('util');
let read = promisify(fs.readFile);
Promise.race([read('./1.txt', 'utf8'), read('./2.txt', 'utf8')]).then(function(data) {
    console.log(data)
}).catch(err => {
    console.log(err)
});


// Promise类上拥有两个方法可以把结果包装成promise对象
Promise.resolve('123').then(function(data) {
    return data + 1234;
}).then(function(data) {
    console.log(data)
})
Promise.reject('123').then(function(data) {
    return data + 1234;
}).then(function(data) {
    console.log(data)
}).catch(err => {
    console.log(err)
});

// 如果程序 只开始执行一次 可以用同步