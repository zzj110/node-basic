// 在文件中打印this 不是global属性，node自带模块化功能  
// 一个js文件就是一个模块，模块this不是global


console.log(this) //{}
var a = 1; // 每个文件都有局部作用域，不会将属性载在global上
console.log(global)

// 全局变量 可以不声明直接使用

// console.info/error/warn/log/time/timeEnd
console.time('start');
for (let i = 0; i < 1000; i++) {

}
console.timeEnd('start');

//process 进程  设置环境变量
//buffer  缓存区
//clearImmediate  setImmediate
//claerTimeout