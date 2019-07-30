// 引入模块
import Classify from './modules/classify'
import Home from './modules/home'
import Goods from './modules/goods'
import Login from './modules/login'
// 实例化模块
const home = new Home();
const classify = new Classify();
const goods = new Goods();
const login = new Login()
export default {
    home, classify, goods, login
}