// 引入模块
import Home from './modules/home'
import Login from './modules/login';
import Special from './modules/special'

// 实例化模块
const home = new Home();
const login = new Login();
const special=new Special();

export default{
    home,
    login,
    special
}