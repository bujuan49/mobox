import { observable, action } from "mobx";
import { goods_date, related, addordelete, helper, list, count } from '../../server/index'
export default class Goods {
    // @observable 修饰属性
    @observable goods_date = '';
    @observable goods_date_swiper = '';
    @observable goods_date_name = ''
    @observable related_shop_related = ''
    @observable helper_xiala = ''
    @observable helper_list = ''
    @observable goods_count = ''
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
    @action addordelete = async (parmase) => {  //添加到收藏
        const data = await addordelete(parmase)
    }
    @action helper = async (parmase) => {  //模糊搜索
        const data = await helper(parmase)
        this.helper_xiala = data.data
    }
    @action list = async (parmase) => {  //点击模糊出来的具体商品
        const data = await list(parmase)
        this.helper_list = data.data.categoryList
    }
    @action count = async (parmase) => {  //获取在售商品数量
        const data = await count(parmase)
        this.goods_count = data.data.goodsCount
    }
}

