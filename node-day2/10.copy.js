 let fs = require('fs');

 function copySync(source, target) { //同步 readFileSync+writeFileSync
     let result = fs.readFileSync(source);
     fs.writeFileSync(target, result);
 }
 //copySync('1.txt', '2.txt')

 function copy(source, target, callback) { //异步 readFile+writeFile
     fs.readFile(source, function(err, data) {
         if (err) return callback(err);
         fs.writeFile(target, data, callback)
     })
 }
 copy('1.txt', '2.txt', function(err) {
     console.log('拷贝')
 })