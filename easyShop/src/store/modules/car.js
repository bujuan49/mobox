//购物车具体功能
import { observable, action } from "mobx";
import { cartIndex, addcar, checked } from '../../server/index'
export default class List {
    // @observable 修饰属性
    @observable shopping = null; //购物车里所有的商品
    @observable All = null;   //所有数据
    @observable money = null;
    @observable number_zie = 0;
    // @action 修饰方法
    @action cartIndex = async () => {
        let date = await cartIndex()
        this.money = date.data.cartTotal
        this.shopping = date.data.cartList
    }
    @action add = (item) => {       //点击数量改变之后    添加  
        item.add_time++
        item.unit_price = item.retail_price * item.add_time
    }
    @action del = (item) => {        //点击数量改变之后    减少
        if (item.add_time > 1) {
            item.add_time--
        }
        item.unit_price = item.retail_price * item.add_time
    }
    @action addcar = async (parmas) => {   //添加到购物车  显示库存不足

        let data = await addcar(parmas)
        console.log(data)
    }
    @action checked_Shopping = async (parmas) => {
        let data = await checked(parmas)
        // this.checked_che = data.data.cartList.id
        this.checked_che = data.data.cartList.map(item => item.checked)
        console.log(this.checked_che)

    }
}

