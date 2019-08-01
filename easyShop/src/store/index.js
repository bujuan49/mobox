// 引入模块
import Classify from './modules/classify'
import Home from './modules/home'
import Goods from './modules/goods'
import Login from './modules/login'
import Car from './modules/car'
import Special from './modules/special'
import My from './modules/special'
import Address from './modules/address'
import Loading from "./modules/loading";
// 实例化模块
const home = new Home();
const classify = new Classify();
const goods = new Goods();
const login = new Login()
const car = new Car()
const special = new Special()
const my = new My()
const address = new Address()
const loading = new Loading()
export default {
    home, classify, goods, login, car, special, my, address, loading
}