const express =require('express')
const fs = require('fs')
const path = require('path')

const static = require('./middiwares/static.js')
const app = express()

app.use((req,res,next)=>{
	const log=`请求方法：${req.method},请求路径：${req.url},请求时间:${+new Date()}/n`
	// 如果没有该文件就创建，否则就追加进去
	fs.appendFile('./log.txt',log,err=>{
		if(err){
			return console.log('记录日志失败')
		}
		next()
	})
})

//中间件：用来处理http请求的一个具体环节(可能要执行某个具体的处理函数)
// 中间件一般都是通过修改req,或者res对象来为后续的处理提供便利的使用
// 中间件分类
// app.use(function(req,res,next){//不关心请求方法和请求路径，没有具体路由请求规则，任何请求都会进入该中间件
// app.use('请求路径',(req,res,next){//不关心请求方法只关心请求路径的中间件

// app.get('请求路径',(req,res)=>{具体路由规则中间件
// app.post('请求路径',(req,res)=>{具体路由规则中间件

// 在use方法中，如果指定了第一个路径参数，则通过req.path获取到的是不报含请求路径的字符串
// 例如：路径是/public/a.jpg拿到的是a.jpg

app.use('/public',static(path.join(__dirname,'public')))
app.use('/node_modules',static(path.join(__dirname,'node_modules')))


app.listen(3000,()=>{
	console.log("服务已经启动，请访问：http://localhost:3000/")
	
})