// 引入模块
import Classify from './modules/classify'
import Home from './modules/home'
// 实例化模块
const home = new Home();
const classify = new Classify();
export default {
    home, classify
}