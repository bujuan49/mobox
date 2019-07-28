import { observable, action } from "mobx";
import { goods_date } from '../../server/index'
export default class Goods {
    // @observable 修饰属性
    @observable goods_date = '';
    @observable goods_date_swiper = '';
    // @action 修饰方法
    @action goods_date_fun = async (parmase) => {
        const data = await goods_date(parmase)
        this.goods_date = data.data
        this.goods_date_swiper = data.data.gallery
        console.log(this.goods_date_swiper)
    }
}

