//需求，导出三个成员，分别是 foo:bar f:function num :10
// export const foo = "bar"
// export f = function(){
	
// }
// export const num = 10

// const foo = "bar"
// const f = function(){
	
// }
// const num = 10

// export{
// 	foo,
// 	f,
// 	num
// }
import {join} from 'path'

export default{
	viewPath:join(__dirname,'../views'),
	node_modules_path:join(__dirname,'../node_modules'),
	public_path:join(__dirname,'../public'),
	uploadDir:join(__dirname,'../public/uploads'),
}