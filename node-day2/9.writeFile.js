let fs = require('fs');

// 1.读取都是buffer类型 写入的时候utf8
// 2.读取的文件必须存在，写得时候文件不存在会自动创建，里面有内容会覆盖

fs.writeFile('1.txt', 1, function(err) {

})