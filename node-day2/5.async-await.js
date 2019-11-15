// aysnc await es7语法 node版本至少7.9.0+

let fs = require('fs');
let util = require('util');
let read = util.promisify(fs.readFile);
read('./1.txt', 'utf8').then(function(data) {
    return read(data, 'utf8');
}).then(function(data) {
    return data + 'ss'
}).then(function(data) {
    console.log(data);
}).catch((err) => {
    console.log(err)
})

// await后面只能跟随promise

async function result() {
    let content1 = await read('./1.txt', 'utf8');
    let content2 = await read(content1, 'utf8');
    let str = content2 + 'ss';
    console.log(str)

}

result();