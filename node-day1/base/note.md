## node的安装
- https://nodejs.org/en/


## mac homebrew
- brew install node

> 安装后重新启动cmd命令行，NVM for mac，
nvm-win 管理node版本

## 配置环境变量的过程
- add to path

## 用node运行一个js文件
-控制台中运行文件
```
node 文件名

```
-在编辑器中使用node


## nodejs
- 主线程是单线程（异步）callback：将后续的逻辑写成函数，传入
当前执行的函数中，当执行的函数得到了结果后，执行传入的函数（回调函数）
- 五个人同事吃一碗饭（异步）
- 阻塞不能异步（阻塞是针对内核说的）
- I/O 操作 读写操作,异步读写（能用异步绝不用同步）
- event-driven 事件驱动（发布订阅）

## web异步 
- setTimeout
- callback
- onclick
- ajax

