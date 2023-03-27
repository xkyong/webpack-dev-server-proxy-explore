# webpack-dev-server-proxy-explore

简单介绍下，这是一个用来了解 [webpack-dev-server中proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy) 工作流程和原理的学习仓库。

### 几点注意

- [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)：It uses [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) under the hood, which provides fast in-memory access to the webpack assets；
- webpack-dev-server中的proxy工作是利用 [http-proxy-middleware](https://github.com/webpack/webpack-dev-server/blob/master/package.json#L64) 实现的，而 [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware) 底层是基于 [http-proxy](https://www.npmjs.com/package/http-proxy) 实现的，http-proxy-middleware 在 koa 中是不兼容的，因此测试时需要在 express 中使用；
- 利用 http-proxy 做代理转发时，常常会配合使用 [http-proxy-rules](https://www.npmjs.com/package/http-proxy-rules) 。



### 项目安装和启动

根目录下，依次执行如下命令。

项目依赖安装：

```bash
$ yarn install
```

前端项目启动：

```bash
$ yarn run dev
```

后端服务启动：

```bash
# proxy-server 
$ npx nodemon ./proxy-server/app.js

# server
$ npx nodemon ./server/app.js
```



