//process 进程  设置环境变量
// 在命令行里配置NODE_ENV，mac export/windows set
console.log(process.env.NODE_EVN);

let url = '';
if (process.env.NODE_EVN) {
    url = 'http://localhost:3000'
} else {
    url = 'http://www.zf.cn'
}
console.log(url);
// 异步的，在当前队列的底部
process.nextTick(function() {
    console.log(this)
});

//第二队列中的
setImmediate(function() {
    console.log(this)
});

//形参（剩余运算符）   将剩余的内容放到一个数组中args中['吃饭']
// 拓展运算符 展开运算符
console.log([...[1, 2, 3], ...[4, 5, 6]]); //es6
console.log({... { a: 1 }, ... { b: 2 } }); //es7
setTimeout((...args) => { //this指向的是timeout对象，箭头函数中没有this指向，没有arguments
    console.log(args)
}, 100, '吃饭')