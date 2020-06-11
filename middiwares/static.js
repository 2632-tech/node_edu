const fs = require('fs')
const path = require('path')

module.exports = function(dirPath){
	// 这里不需要next()//不是/public开头的，不会进来
	return (req,res,next)=>{
		const fulePath = path.join(dirPath,req.path)
		fs.readFile(filePath,(err,data)=>{
			if(err){
				return res.end('404Not Found.')
			}
			res.end(data)
		})
	}
}