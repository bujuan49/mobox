import { observable, action } from "mobx";
import { login } from '../../server/index'
import { setToken, getToken } from '../../utils/index'
import 'js-cookie'
export default class List {
    // @observable 修饰属性
    @observable login = '';
    // @action 修饰方法
    @action login = async (parmase) => {
        const data = await login(parmase)
        setToken(data.data.sessionKey)
    }
}