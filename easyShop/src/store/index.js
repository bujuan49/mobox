// 引入模块
import Home from './modules/home'
import Login from './modules/login';

// 实例化模块
const home = new Home();
const login = new Login();
export default{
    home,
    login
}