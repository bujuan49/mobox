import { observable, action } from "mobx";
import { goods_date, related, addordelete } from '../../server/index'
export default class Goods {
    // @observable 修饰属性
    @observable goods_date = '';
    @observable goods_date_swiper = '';
    @observable goods_date_name = ''
    @observable related_shop_related = ''
    // @action 修饰方法
    @action goods_date_fun = async (parmase) => {
        const data = await goods_date(parmase)
        this.goods_date = data.data
        this.goods_date_swiper = data.data.gallery
        this.goods_date_name = data.data.info
    }
    @action related_shop = async (parmase) => {
        const data = await related(parmase)
        this.related_shop_related = data.data.goodsList
    }
    @action addordelete = async (parmase) => {
        console.log(parmase)
        const data = await addordelete(parmase)

    }
}

