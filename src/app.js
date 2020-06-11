import express from 'express'
import config from './config.js'
import nunjucks from 'nunjucks'
import indexRouter from './routers/index'
import advertRouter from './routers/advert'
import queryString from 'querystring'
import bodyParser from './middlewares/body-parse'
import errLog from "./middlewares/error_log"
const app = express()

app.use('/node_modules',express.static(config.node_modules_path))
app.use('/public',express.static(config.public_path))

// 配置使用nunjucks模板引擎
// nunjucks模板引擎没有对模板文件的后缀名作特定限制
// 默认会缓存输出过的文件
nunjucks.configure(config.viewPath, {
    autoescape: true,
    express: app,
	noCache: true
});
// 挂载请求表单的中间件
app.use(bodyParser)
// 挂载路由容器（路由容器中组织了网站处理路由中间件）
app.use(indexRouter)
console.log('进入app.js')
app.use(advertRouter)

app.use(errLog)

app.listen(3000,()=>{
	console.log("server is rrunning at port 3000....")
})