let fs = require('fs');
let util = require('util');
/*
fs.readFile('./1.txt', 'utf8', function(err, data) { //err错误第一
    if (err) return console.log(err);
    fs.readFile(data, 'utf8', function(err, data) {
        if (err) return console.log(err);
        console.log(data)
    });
})
*/

// peomise reject成功 reject失败  实例上面有个then方法，方法中有两个参数，success error
/*
function read(url) {
    return new Promise((resolve, reject) => {
        fs.readFile('./1.txt', 'utf8', function(err, data) { //err错误第一
            if (err) return reject(err);
            resolve(data);
        })
    })
}
*/

let read = util.promisify(fs.readFile);
/*
read('./1.txt', 'utf8').then(function(data) {
    read(data, 'utf8').then(function(data) {
        console.log(data)
    }, function(err) {
        console.log(err)
    })
}, function(err) {
    console.log(err)
})
*/

/*
read('./1.txt', 'utf8').then(function(data) {
    read(data, 'utf8').then(function(data) {
        console.log(data)
    })
}).catch(() => {
    // 处理错误，如果写了错误callback走自己的，没写统一走catch
})
*/

// 流程控制
read('./1.txt', 'utf8').then(function(data) {
    // 如果第一个promise中返回一个promise实例，会把当前执行的结果传到下一个then中
    return read(data, 'utf8');
}).then(function(data) {
    // 如果返回的不是promise 会把结果继续向下传递
    return data + 'ss'
}).then(function(data) {
    // 如果返回的不是promise 会把结果继续向下传递
    console.log(data);
}).catch((err) => {
    // 处理错误，如果写了错误callback走自己的，没写统一走catch
    console.log(err)
})