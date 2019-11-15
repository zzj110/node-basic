// 1.通过长度定义buffer
let buffer = Buffer.alloc(9); // 比较耗内存
console.log(buffer);
// 2.通过数组定义buffer
let buffer1 = Buffer.from([17, 18, 19, 0x11]); // 会自动把10进制转化成16进制
console.log(buffer1);
// 3.字符串创建buffer
let buffer2 = Buffer.from('学习');
console.log(buffer2);
console.log(buffer2.toString());

// 1)fill方法
let buffer3 = Buffer.allocUnsafe(9);
buffer3.fill(0)
console.log(buffer3);

// 2)silce方法 (截取，浅拷贝 深拷贝（1.循环拷贝2.JSON.parse(JSON.stringify())）)
// 深拷贝：两个长得一样但是毫无关系  浅拷贝：两个对象存放的的空间是一样的

/*
var obj = { name: 'zz' };
var arr = [obj, 2, 3];
var newArr = arr.slice(0);
arr[0].name = 'hello';
console.log(newArr);
var newObj = Object.assign({}, obj) // 浅拷贝
obj.name = 'zz1';
console.log(newObj);
*/

var buffer4 = Buffer.from([1, 2, 3]);
var newBuffer = buffer4.slice(0, 1); // 拷贝出来的存放是内村地址空间
newBuffer[0] = 100;
console.log(buffer4);

// 3)copy方法 
var buf1 = Buffer.from('学习');
var buf2 = Buffer.from('node');
var buf = Buffer.allocUnsafe(10);
// targetBuffer 目标buffer,targetStart 目标的开始,sourceStart 源的开始,sourceEnd 源的结束
buf1.copy(buf, 0);
buf2.copy(buf, 6)
console.log(buf.toString());
// 4)concat方法 
console.log(Buffer.concat([buf1, buf2]).toString());
Buffer.myConcat = function(list, totalLength) {
    // 1.判断长度是否传递，如果传递了就用传递的，否则需要计算一个长度
    if (typeof totalLength === 'undefined') {
        totalLength = list.reduce((prev, next) => prev + next.lenght, 0)
    }
    // 2.通过长度创建一个buffer
    var buffer = Buffer.alloc(totalLength);
    // 3.在循环list将每一项拷贝到buffer上
    var offset = 0;
    list.forEach(buf => {
        // isBuffer判断当前是不是buffer类型
        if (!Buffer.isBuffer(buf)) {
            throw new Error('not buffer')
        }
        buf.copy(buffer, offset);
        offset += buf.length;
    });
    // 4.如果长度过长 fill或者可以采取slice截取有效长度
    // 5.返回buffer
    return buffer.slice(0, offset);
}
console.log(Buffer.myConcat([buf1, buf2], 1000).toString());
// 5)isBuffer方法