let express = require('express');
let app = express();
app.listen(3000);
app.use(express.static('dist'));
app.use(express.static('public'));
/*
let path = require('path');
let fs = require('fs');
function static(p) {
    return function(req, res, next) {
        let pathname = path.join(p, req.path);
        fs.stat(pathname, function(err, status) {
            if (err) {
                return next()
            } else if (status.isFile) {
                res.sendFile(pathname, { root: __dirname })
            }
        })

    }  
}
app.use(static('dist')); // 自定义静态服务中间件
app.use(static('public'));
*/