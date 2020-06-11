const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/edu";

export default (errLog,req,res,next)=>{
	console.log("进入error_log.js")
	// 1.将错误日记记录到数据库，方便排查错误
	// 2.发送响应给用户，给一些友好的提示信息
	// {错误名称，错误信息，错误堆栈，错误时间}
	MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	    if (err) throw err;
	    var dbo = db.db("edu");
	    var myobj = { 
			name: errLog.name, 
			message:errLog.message,
			stack:errLog.stack,
			time:new Date()  
		};
		// var myobj = { name:'123'}
	    dbo.collection("error_logs").insertOne(myobj, (err, result)=> {
	        if (err) throw err;
			res.json({
				err_code:500,
				message:errLog.message
			})
	        console.log("err数据插入成功");
	        db.close();
	    });
	});
}