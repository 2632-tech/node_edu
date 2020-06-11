## 知识点
-Nunjucks 模板引擎
-Mingoose ORM对象模型映射
## 在线教育
## 使用Nunjucks模板引擎
## 广告管理
## 路由设计
## 
```b
请求方法 请求路径 查询字符串 请求体 路径参数 作用
---------------------------------------------
get /advert 渲染页面
get /advert/add 渲染添加广告页面
post /advert/add image,lnik,start_time,end_time,title,create_time,last_modfied 处理添加广告请求
```

### jsonp
```
跨域

```

### nvm
Node Version Management 
[下载nvm](https://github.com/coreybutler/nvm-windows)

- nvm list 查看所有已安装的node版本
- nvm install 版本号 安装指定的版本的 node
- nvm use 版本号 切换到指定版本

### nrm (node registry manager)
```
npm 下载淘宝镜像 npm install -g cnpm --registry=https://registry.npm.taobao.org
```
第一
```
npm install -g nrm
```
基本使用
```

```
### yarn
Yarn 是一个Facebook开源的一个包管理工具

安装
```bash
npm install -g yarn
```
```
# npm install--save包名
离线安装
yarn add 包名 --offline

# npm install 

yarn install

# npm uninstall包名

yarn remove包名

# npm install -g包名

yarn global add包名

# npm uninstall-g包名

yarn global remove包名

```

查看缓存
```
查看缓存
yarn cache ls
离线安装
yarn add 包名 --offline
```

# 知识点
- MongoDB
- Monggoose
- 广告管理

## MongoDB

### 存储结构
- 一个计算机上可以有一个数据库服务实例
- 一个数据服务实例上可以有多个
- 一个数据库中可有有多个集合
	+ 集合数据的业务类型划分
	+ 例如用户数据、商品信息数据、广告信息数据。。。
	+ 对数据进行分们别类的存储
- 一个集合中可有多个文档
	+ 文档在MongDB中就是一个类似于JSON的数据对象
	+ 文档对象是动态的，可以随意的生成
	+ 假如一个集合中，为了便于管理，一定要保持文档结构统一，（数据完整性）
## Mongoose
[Mongoose](http://www.mongoosejs.net/docs/guide.html#definition)
安装：
```bash
# npm install --save mongoose
yarn add mongoose


```

# 目录结构

```

假如要添加一个课程管理功能:

1,在routers 目录中新建一个课程相关的路由模块设计路由规则根据不同的请求映射到具体的处理函数（在controllers目录中)

2.controllers目录中添加一个专门用来处理课程相关的请求处理模块该模块内部提供所有的课程相关的处理方法,导出用来给routes使用的

3.在todels中添加对应的课程相关的数据模型模块导出接口对象,用来给controllers使用的

```

## 知识点

- 广告管理
- 文件上传
- 异步无刷新删除
- 编辑功能
- 登录功能

## 在node中使用formidable处理文件上传

第一：安装

```
yarn add formidable
```