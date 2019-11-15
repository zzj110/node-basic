let fs = require('fs');
let { promisify } = require('util');
let read = promisify(fs.readFile);

// 将两个异步请求在同一时刻内拿到 结果进行合并
let school = {};
/*
read('./1.txt', 'utf8').then(data => {
    school.url = data;
}, err => {

})
read('./2.txt', 'utf8').then(data => {
    school.text = data;
}, err => {

});
*/
// 调用all方法后悔返回一个新的promise实例
Promise.all([read('./1.txt', 'utf8'), read('./2.txt', 'utf8')]).then(function(data) {
    // data是一个数组类型 对应的是和前面请求的顺序相同（会把成功的结果放在数组中），假如有一个报错，就走错误
    console.log(data)
}).catch(err => {

});

async function result() {
    let [url, text] = await Promise.all([read('./1.txt', 'utf8'), read('./2.txt', 'utf8')]);
    console.log(url, text)
}

result();

// promise 解决问题
// 1.回调地狱
// 2.合并异步返回的结果
// 3.async await简化promise写法（语法糖）