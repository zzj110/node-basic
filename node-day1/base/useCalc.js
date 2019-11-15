// require方法具有缓存功能，多次引用只能执行一次

let clac = require('./calc')


console.log(clac(1, 2, 3, 4, 5))