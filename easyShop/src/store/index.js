// 引入模块
import Home from './modules/home'
import Login from './modules/login';
import Special from './modules/special'
import Loading from './modules/loading';
import Mine from './modules/mine'

// 实例化模块
const home = new Home();
const login = new Login();
const special = new Special();
const loading = new Loading()
const mine = new Mine()
export default {
    home,
    login,
    special,
    loading,
    mine
}