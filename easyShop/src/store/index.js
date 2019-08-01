// 引入模块
import Home from './modules/home'
import Login from './modules/login';
import Special from './modules/special'
import Loading from './modules/loading';
import Mine from './modules/mine'

import Shop from "./modules/shop"
// 实例化模块
const home = new Home();
const login = new Login();
<<<<<<< HEAD
const special = new Special();
const loading = new Loading()
const mine = new Mine()
export default {
=======
const special=new Special();
const loading=new Loading()
const mine=new Mine()
const shop =new Shop()
export default{
>>>>>>> 83f525ea715496176e3434055abe648e88cad235
    home,
    login,
    special,
    loading,
    mine,
    shop
}