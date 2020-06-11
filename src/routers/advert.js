import express from 'express'

import Advert from '../models/advert'

import formidable from 'formidable'

import config from '../config'

import {basename} from 'path'

// import fs from 'fs'
//创建一个路由容器将所有的路由中间件挂载给路由容器 
const router = express.Router()

router.get('/advert',(req,res,next)=>{
	const page =Number.parseInt(req.query.page,10)
	const pageSize = 5
	Advert 
	.find()
	.skip((page - 1)*pageSize)
	.limit(pageSize)
	.exec((err,adverts)=>{
		if(err){
			return next(err)
		}
		Advert.count((err,count)=>{
			if(err){
				return next(err)
			}
			const totalPage = Math.ceil(count / pageSize)//总页码
			res.render('advert_list.html',{adverts,totalPage,page})
		})
		
	})
	// Advert.find((err,adverts)=>{
	// 	if(err){
	// 		return next(err)
	// 	}
	// 	res.render('advert_list.html',{adverts})
	// })
	
})

router.get('/advert/add',(req,res,next)=>{
	res.render('advert_add.html')
})

router.get('/advert/list',(req,res,next)=>{
	Advert.find((err,docs)=>{
		if(err){
			return next(err)
		}
		res.json({
			err_code:0,
			result:docs,
		})
	})
})
router.post('/advert/add',(req,res,next)=>{
		// 1.接收表单提交的数据
	const form =new formidable.IncomingForm();
	// 配置上传路径
	form.uploadDir = config.uploadDir
	// 保持原始扩展名
	form.keepExtensions = true
	  // fields这是普通的表单字段
	  // files 这是文件内容数据信息
	form.parse(req, (err, fields, files) => {
		if(err){
			return next(err)
		}
		const body = fields
		// 在这里吧files中的图片，在body中添加一个image值就是图片传上来的路径
		
		console.log(body)
		body.image = basename(files.image.path)
		// 操作数据库
		const advert = new Advert({
			title:body.title,
			image:body.image,
			link:body.link,
			start_time:body.start_time,
			end_time:body.end_time,
			
		})
		advert.save((err,result)=>{
			if(err){
				return next(err)
			}
			res.json({
				err_code:0,
				title:"插入数据成功",
			})
		})
	});
})  
router.get('/advert/one/:advertId',(req,res,next)=>{
	// res.end(`路径参数ID为：￥{req.params.advertId`) 
	   Advert.findById(req.params.advertId,(err,result)=>{
		   if(err){
			   return next(err);
		   }
		   res.json({
			   err_code:0,
			   result:result
		   })
	   })
})



router.post('/advert/edit',(req,res,next)=>{
	Advert.findById(req.body.id,(err,advert)=>{
		if(err){
			return next(err)
		}
		const body = req.body
		advert.title=body.title
		advert.image=body.image
		advert.link=body.link
		advert.start_time=body.start_time
		advert.end_time=body.end_time
		advert.last_modified = Date.now()
		
		//这里的save因为内部有一个_id所有这里不会新增，会更新已有数据
		advert.save((err,result)=>{
			if(err){
				return next(err)
			}
			res.json({
				err_code:0,
				title:"更新数据成功"
			})
		})
	})
})
router.get('/advert/remove/:advertId',(req,res,next)=>{
	Advert.remove({_id:req.params.advertId},err=>{
		if(err){
			return next(err)
		}
		res.json({
			err_code:0,
			title:"删除数据成功"
		})
	})
})

// router.get('/',())
// export可以直接暴露字面量 {} 123
export default router