// base64  进制转化

let buf = Buffer.from('张');
console.log(buf.toString('base64'));
console.log(buf);
// 把一个汉字的24位 转换成4个字符，每个字符就6位，不足的补0
// 1. 把16进制转化成2进制 tostring()
console.log((0xe5).toString(2));
console.log((0xbc).toString(2));
console.log((0xa0).toString(2));
// 00111001 00011011 00110010 00100000
// 2.转化成10进制 去可见编码中取值 parseInt

console.log(parseInt('00111001', 2));
console.log(parseInt('00011011', 2));
console.log(parseInt('00110010', 2));
console.log(parseInt('00100000', 2));

let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str += 'abcdefghijklmnopqrstuvwxyz';
str += '0123456789';
str += '+/';
console.log(str[57] + str[27] + str[50] + str[32]);