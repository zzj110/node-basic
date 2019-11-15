let fs = require('fs');

// stat
fs.stat('./11.stat.js', function(err, statas) {

    console.log(err, statas);
    if (err) return console.log(err)
    console.log(statas.isFile()); // 判断是不是文件
    console.log(statas.isDirectory()); // 判断是不是文件夹
})


function makep(url, cb) { //插入排序
    let urlArr = url.split('/');
    let index = 0;

    function make(p) {
        if (urlArr.length < index) return; //终止循环
        // 在创建之前看是否存在 如果不存在创建，存在继续下一次创建
        fs.stat(p, function(err, statas) {
            if (err) {
                fs.mkdir(p, function(err) {
                    if (err) return console.log(err);
                    make(urlArr.slice(0, ++index + 1).join('/'))
                })
            } else { // 如果存在跳到下一次创建
                make(urlArr.slice(0, ++index + 1).join('/'))
            }
        })
    }
    make(urlArr[index]);
}
makep('a/b/c/d', function(err) {
    console.log(err);
});

/*
fs.mkdir('a/b/c/d', function(err) {
    console.log(err);
})
*/


//atime  access time
//mtime modify time
//ctime change tim