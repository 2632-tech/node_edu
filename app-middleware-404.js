const express =require('express')
const fs = require('fs')

const app = express()

app.get('/',(req,res,next)=>{
	// 通过解析查询字符串中的某个
	try{
		const data=JSON.parse('{name')
		res.json(data)
		res.end('hello index')
	}catch(e){
		// console.log(e.message)
		const error_log=`
		时间：${new Date()}
		错误名：${e.name}
		错误消息：${e.message}
		错误堆栈：${e.stack}`
		fs.appendFile('./err_log.txt', error_log, err=>{
			res.writeHead(500,{})
			res.end('404 服务器正忙，请稍后重试')
		})
	}
	
})

app.get('/a',(req,res,next)=>{
	// res.end('hello index a')
	// if()
	fs.readFile('./dn',(err,data)=>{
		if(err){
			// 这里调用的next会被app.use((err,req,res,next)这个中间件匹配到
			next(err)
		}
	})
})

app.get('/b',(req,res,next)=>{
	res.end('hello index b')
})
// 该中间件只有带有参数的next才能调用到
// 这里必须写全4个参数
// 这个中间件用来统一处理错误的
// 带参数的next只能被具有4个参数的处理中间件匹配到
app.use((err,req,res,next)=>{
	
	const error_log=`
	==================
	时间：${new Date()}
	===
	错误名：${err.name}
	===
	错误消息：${err.message}
	===
	错误堆栈：${err.stack}
	==================\n\n`
	fs.appendFile('./err_log.txt', error_log, err=>{
		res.writeHead(500,{})
		res.end('404 服务器正忙，请稍后重试')
	})
})
//404处理中间件
app.use((req,res,next)=>{
	res.end('404')
})
app.listen(3000,()=>{
	console.log('running....')
})