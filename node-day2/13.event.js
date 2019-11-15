// 发布订阅
let EventEmitter = require('events');
let { inherits } = require('util');

function Girl() {

}
let girl = new Girl();
inherits(Girl, EventEmitter);
let fn = function(param) { //订阅
    console.log('ku', param);
};
girl.once('shilian', fn);
girl.on('shilian', function(param) { //订阅
    console.log('chi', param);
});
girl.removeListener('shilian', fn);
girl.emit('shilian', 'wo'); // 发布
girl.emit('shilian', 'wo'); // 发布