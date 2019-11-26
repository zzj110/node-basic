## express搭建服务
```
let express=require('express');
app=express();
app.listen(300);
```

## express路由
- 必须method和path全部匹配上执行对应的callback
```
app[method](path,function(){});
app.all('*',funtion(){})
```

## 路径参数路由
- 将匹配到的结果生成一个对象放在req.params上
```
app.get('/user/:id/name')
```

## req上的属性
```
req.params 路径参数
req.url    整个路径
req.method 请求方法
req.query  获取请求的参数，问号后面的参数
req.header 请求头
req.path   pathname路径
```

## middleware
- 中间件的作用 
    - 处理公共逻辑，扩展req,res
    - 可以决定是否可以继续执行
    - 开头匹配就会执行到中间件
    - 错误中间件，在页面的最后，参数4个，第一个参数是错误


## res新增的方法
- res.json() 
- res.sendFile() 绝对路径 path.join/path.resolve()
- res.sendStatus()
- res.send()

## 路由拆分
```
let express=require('express');
let app=express();
let router=express.Router();
router.get('/login',fn);
app.use('/user',router);
```

## bodyParser
```
app.use(bodyParser.json()); // 解析json
// 解析表单  application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
```

## ejs (前后端分离不使用ejs)
```
app.set('view engine','html');// 更改默认后缀名
app.set('views','static'); // 更改路径
app.engine('html',require('ejs').__express); //html用ejs模板渲染
res.render('index',渲染数据)
```
## ejs用法
```
<%include '文件名'%> //引用
<%=变量%>  // 取值
<%-转译变量 %>  
<%for(let i=0;1<10;i++){%>
  <li><%=i%></li>
<%}%>
```

## 静态服务中间件
```
app.use(express.static('文件夹'))
```

## 重定向
```
res.redirect('路径')
```