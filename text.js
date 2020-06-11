const express =require('express')

const fs = require('fs')

const app = express()

app.use(function(req,res,next){
	console.log(111)
	console.log(req.path)
	const urlPath=req.path
	if(urlPath.startsWith('/public/')){
		const filePath=`.${urlPath}`//这里加.的原因是如果文件是以/开头的则会去当前文件所属磁盘跟目录去查找
		fs.readFile(filePath,(err,data)=>{
			if(err){
				return res.end('404Not Found.')
			}
			res.end(data)
		})
	}else{
		// 如果请求路径不是以/public/开头的，则调应next,next是一个函数（不确定）
		// 这里调应了next的目的就是告诉Express继续往后执行：中间键
		// 具体执行那个中间键：取决于对应中间键的类型
		next()
	}
	
})

app.get('/',(req,res)=>{
	// res.end('hello world')
	// res.render('index')
	// req请求对象：用来获取当前客户端的一些请求数据或者请求报文信息
	// req.query用来获取当前客户端的一些请求报文信息
	// req.method用来当前请求方法
	// res响应对象：用来向当前请求客户端发送消息数据的
	// res.write('响应数据')
	// res.end()结束响应
	res.write('hello')
	res.write('expres')
	res.end()
})
app.get('/login',(req,res)=>{
	
	res.end('hello login')
})
app.listen(3000,()=>{
	console.log("服务已经启动，请访问：http://localhost:3000/")
	
})