/**
 * 第三方模块不需要./的形式引入，可以直接通过包名将文件引入，找package.json中main对应的文件运行，
 * 如果当前目录下没找到，会向上一级查找，直到计算机的根目录为止
 *
 */

let str = require('vue-plus');
console.log(str);

console.log(module.paths);