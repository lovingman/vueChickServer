const express = require("express");
const router = express.Router();
//相当于后台的路由，所有的后台处理都需要从这里经过

//const login = require("login");
const userApi = require("../api/user-api");
const goodsApi = require("../api/goods-api");
const tasksApi = require("../api/tasks-api");
const logApi = require("../api/log-api");
const skinsApi = require("../api/skins-api");

router.post('/register',userApi.register) //注册
router.post('/login',userApi.login) //登录
router.get('/getChick',userApi.getChick) // 获取用户小鸡状态
router.post('/postChick',userApi.postChick) // 更新小鸡信息
router.get('/getGoods',goodsApi.getGoods) //获取默认商品列表
router.get('/getUserGoods',goodsApi.getUserGoods) //获取用户商品列表
router.get('/getUserFoods',goodsApi.getUserFoods) //获取用户背包食品列表
router.get('/getUserSkins',skinsApi.getUserSkins) //获取小鸡皮肤数据
router.post('/infoUserSkins',skinsApi.infoUserSkins) //初始化当前用户小鸡皮肤数据
router.post('/postBdySkin',skinsApi.postBdySkin) // 购买皮肤
router.post('/postUseSkin',skinsApi.postUseSkin) // 使用皮肤
router.post('/unlock',goodsApi.unlock) //解锁商品
router.post('/firstClosingGood',goodsApi.firstClosingGood) // 首次购买某个商品
router.post('/closingGood',goodsApi.closingGood) // 购买商品
router.post('/sellFood',goodsApi.sellFood) // 出售物品
router.post('/feeding',goodsApi.feeding) // 投喂食物
router.post('/postTasks',tasksApi.infoTasks) // 初始化每日任务
router.post('/postReceiveTask',tasksApi.postReceiveTask) // 领取任务奖励
router.post('/addTaskCount',tasksApi.addTaskCount) // 增加任务进度次数
router.post('/postEgg',goodsApi.postEgg) // 收获鸡蛋(物品)
router.post('/postEggNum',userApi.postEggNum) // 收获鸡蛋(总产量),更新小鸡信息
router.post('/addLog',logApi.addLog) // 添加动态日志
router.get('/getLog',logApi.getLog) // 获取动态日志


module.exports = router;