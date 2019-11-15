// util工具模块 核心模块/内置模块，不需要安装直接使用 
// util.inherits
// util.isArray isFunction
// util.promisify 把方法转化成promise
let util = require('util');

// 判断数据类型
// 1.typeof 判断不了对象数据类型
// 2.instanceof 不能判断继承后的
// 3.constructor
// 4.Object.prototype.toString.call([])=='[Object Array]'

// 继承方式
function Parent() {
    this.smoking = '抽烟'
}

Parent.prototype.sleep = '睡觉';

function Child() {

}

function create(proto) {
    let Fn = function() {}; // 创建一个空类，把传进来的原型 赋予给此类
    Fn.prototype = proto;
    return new Fn(); // 返回只拥有传进来的公有属性的实例
}

// 只继承公有
//1. Object.setPrototypeOf(Child.prototype, Parent.prototype);
//2. Child.prototype._proto_=Parent.prototype; 间接继承，链接到父亲
//3. Child.prototype=object.create(Parent.prototype))
//4. Child.prototype=create(Parent.prototype)
util.inherits(Child, Parent)
let child = new Child();
console.log(child.sleep);

//