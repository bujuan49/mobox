import { observable, action } from "mobx";
import { login } from '../../server/index'
export default class List {
    // @observable 修饰属性
    @observable login = '';
    // @action 修饰方法
    // @action 
}