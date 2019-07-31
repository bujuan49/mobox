//购物车具体功能
import { observable, action } from "mobx";
import { cartIndex } from '../../server/index'
export default class List {
    // @observable 修饰属性
    @observable shopping = null;
    @observable All = null;
    @observable money = null
    // @action 修饰方法
    @action cartIndex = async () => {
        let date = await cartIndex()
        this.money = date.data.cartTotal
        this.shopping = date.data.cartList
        console.log(this.money)
    }
    @action add = (item) => {       //点击数量改变之后  还会消失   添加  
        item.add_time++
        item.unit_price = item.retail_price * item.add_time
    }
    @action del = (item) => {        //点击数量改变之后  还会消失   减少
        if (item.add_time > 1) {
            item.add_time--
        }
        item.unit_price = item.retail_price * item.add_time
    }
    @action check = (item) => {        //当前是否选中
        if (item.add_time > 1) {
            item.add_time--
        }
        item.unit_price = item.retail_price * item.add_time
    }
}

