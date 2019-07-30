//购物车具体功能
import { observable, action } from "mobx";

export default class List {
    // @observable 修饰属性
    @observable All = null;
    // @action 修饰方法
    @action add = (item) => {       //点击数量改变之后  还会消失
        item.add_time++
        item.unit_price = item.retail_price * item.add_time
    }
    @action del = (item) => {
        if (item.add_time > 1) {
            item.add_time--
        }
        item.unit_price = item.retail_price * item.add_time
    }
}