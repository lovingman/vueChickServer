var mongoose = require('mongoose')

var logSchema = new mongoose.Schema({
	openId: String,                 // 用户唯一标示,_id
	logList: [						// 日志列表
		{
			log_title: String,      // 日志描述
			log_date: String        // 日志时间
		}
	]
	
})

// users 为指定的collections集合
module.exports = mongoose.model('Log', logSchema, 'log')