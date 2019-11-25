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