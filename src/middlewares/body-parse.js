import queryString from 'querystring'

export default(req,res,next)=>{
	if(req.method.toLowerCase()==='get'){
		console.log('进入body-parser了')
		return next()
	}
	// 如果普通表单这将自己处理
	// 如果是文件的菜单，则自己不处理
	if(req.headers['content-type'].startsWith('multipart/form-data')){
		console.log('进入body-parser headers了')
		return next()
	}
	 
	let data=''
	req.on('data',chunk =>{
		data +=chunk
	})
	req.on('end',()=>{
		req.body=queryString.parse(data)
		next()
	})
}
	
	// console.log('进入body-parse.js')
	// if(!req.headers['content-length']){
	// 	return next()
	// }
	// let data =''
	// req.on('data',chunk=>{
	// 	data +=chunk
	// })
	// req.on('end',()=>{
	// 	req.body=queryString.parse(data)
	// 	next()	
	// })