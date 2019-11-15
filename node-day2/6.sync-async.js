let fs = require('fs');
let { promisify } = require('util');
let read = promisify(fs.readFile);

// 将两个异步请求在同一时刻内拿到 结果进行合并
let school = {};

read('./1.txt', 'utf8').then(data => {
    school.url = data;
    out()
}, err => {

})
read('./2.txt', 'utf8').then(data => {
    school.text = data;
    out()
}, err => {

})

function out() {
    if (school.url && school.text) console.log(school)
}