let express = require('express');
let app = express();

app.listen(3000);
// /user?id=1 查一个  /user查所有  路径都是/user
// /user/1 表示查一个 /user查所有 区分查多个还是查一个

app.get('/user', function(req, res) {
    res.end('select All');
});

// 表示id是占位符 必须有 但是可以随机
// /user/1/2 =>{id:1,name:2}=params
app.get('/user/:id/:name', function(req, res) {
    console.log(req.params);
    res.end('select one');
})


let url = '/user/3/6/a';
let url2 = '/user/:id/:name/a';


let arr = [];
let newReg = url2.replace(/:[^\/]+/g, function() {
    arr.push(arguments[0].slice(1));
    return '([^\/])'
})
let reg = new RegExp(newReg);
let newArr = reg.exec(url);
let result = {};
arr.forEach(function(item, index) {
    result[item] = newArr[index + 1]
});
console.log(result);