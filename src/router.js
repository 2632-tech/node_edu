import express from 'express'

import Advert from './models/advert'
// import fs from 'fs'
//创建一个路由容器将所有的路由中间件挂载给路由容器 
const router = express.Router()


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
	const body = req.body
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