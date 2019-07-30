import { observable, action } from "mobx";
import { login } from '../../server/index'
import { setToken, getToken } from '../../utils/index'
export default class List {
    // @observable 修饰属性
    @observable login = '';
    // @action 修饰方法
    @action login = async (parmase) => {
        window.localStorage.setItem('user', parmase.mobile)
        const data = await login(parmase)
        console.log(data)
        if (data.errno === 0) {
            setToken(data.data.sessionKey)
            // this.props.history.push('/home')
        } else {
            alert('登录失败')
        }

    }
}