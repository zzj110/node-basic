function app() {

}
// 每次调用use方法都会讲方法存在数组中，默认调用数组的第一项，将next方法传递数组中的函数
app.middleware = [];
app.use = function(cb) {
    this.middleware.push(cb)
}
app.use(function(req, res) {
    console.log(1);
    next();
})
app.use(function(req, res) {
    console.log(2);
    next();
})
app.use(function(req, res) {
    console.log(3);
})
let index = 0

function next() {
    app.middleware[index++](null, null, next)
};
next()