let fs = require('fs');
let util = require('util');



// resolve reject 都是函数
/*function read(url) {
    return new Promise((resolve, reject) => {
        fs.readFile(url, 'utf8', function(err, data) {
            if (err) return reject(err);
            resolve(data);
        })
    })
}*/
let read = util.promisify(fs.readFile) //把一个函数promise化
read('./2.es6.js', 'utf8').then(function(data) {
    console.log(data)
}, function(err) {
    console.log(err)
})