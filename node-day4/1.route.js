let express = require('express');
let app = express();
app.listen(3000);

function bodyParse() {
    return function(req, res, next) {
        let str = '';
        req.on('data', function(chunk) {
            str += chunk;
        });
        req.on('end', function() {
            console.log(str);
            req.body = require('querystring').parse(str);
            console.log(require('querystring').parse(str)); //node自带模块
            /*
            let obj = {};
            str.replace(/([^&=]+)=([^&=]+)/g, function() {
                obj[arguments[1]] = arguments[2]
    
            })
            console.log(obj);
            */
            next();
        })
    }
}
let bodyparse = require('body-parser');
// 解析表单格式，把表单内的内容，解析后放在req.body上
app.use(bodyparse.urlencoded({ extended: false }));
// 解析表单格式，把json字符串转化成对象，解析后放在req.body上
app.use(bodyparse.json());
// 告诉页面上所有render方法中的html 都用ejs模板渲染
app.engine('html', require('ejs').__express);
// 更改模板路径,默认是views
app.set('views', 'static');
// 配置默认模板后缀名
app.set('view engine', 'html');

let user = require('./routes/user');
app.use('/user', user);

let article = require('./routes/article');
app.use('/article', article);