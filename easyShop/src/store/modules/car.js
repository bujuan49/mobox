//购物车具体功能
import { observable, action } from "mobx";
import { cartIndex } from '../../server/index'
export default class List {
    // @observable 修饰属性
    @observable shopping = null;
    money = null
    // @action 修饰方法
    @action cartIndex = async () => {
        let date = await cartIndex()
        this.money = date.data.cartTotal
        this.shopping = date.data.cartList

        console.log(this.money)
    }

}