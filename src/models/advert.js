const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const advertSchema=mongoose.Schema({ 
  title:{type:String,require:true},
  image:{type:String,require:false},//图片地址
  link:{type:String,require:true},//链接地址
  start_time:{type:Date,require:true},//开始时间default:Date.now
  end_time:{type:Date,require:true},//结束时间
  create_time:{type:Date,default:Date.now},//创建时间
  last_modfied:{type:Date,default:Date.now}//最后一次修改
});

const Advert = mongoose.model('Advert',advertSchema)
export default Advert

// Advert
// 	.find()
// 	.skip(1)
// 	.limit(1)
// 	.exec((err,result)=>{
// 		if(err){
// 			return next(err)
// 		}
// 		console.log(result)
// 	})