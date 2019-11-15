## 第三方模块
- 要通过npm来进行安装 node package manager
## 全局安装 -g(只能在“命令行”中使用) 
- 默认安装路径npm root -g
- 不会自动假如环境变量中，而是通过npm进行映射
```
 npm intsall nrm -g  安装nrm 
 nrm test 测试连接时间
 nrm ls 显示所有可用的源
 nrm use 源名  使用源
 npm unintsall nrm -g  卸载nrm
 ```

- npm:安装插件用
- nrm:切换npm 源   node registry  manager
- nvm:切换node版本
### 全局安装
#### http-server
- 启动一个本地服务

```
npm install http-server -g
http-srever -p 3000 在某个路径下启动服务

```

#### idoc
```
npm install idoc -g
```

### 本地安装
- 没有-g 参数，安装之前需要初始化，记录安装依赖
```
npm init -y
```

> package.json 目录不能有中文，特殊字符，大写  默认先找当前目录
下的packag.json,如果当前没有，会去上级查找，到不到才认为在当前目录下安装

#### 开发依赖
- 开发时使用，上线还使用
```
npm install jquery
```

#### 项目依赖
- 开发时使用，线上不使用
```
npm install less --save-dev
```

### 安装全部依赖
```
npm install
```

## yarn安装

```
npm install -g yarn  安装
yarn init  初始化
yarn add 包   
yarn remove 包 删除包
yarn add less --dev  安装开发依赖

```  

## 发布包
- 回到国外源  nrm use npm
- 包名不能和已有的包相同
- 入口文件，做整合用的
- 注册账号
```
npm addUser
```
- 发布
```
npm public
```

