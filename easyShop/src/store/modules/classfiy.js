    
import { observable, action } from "mobx";
import { list, tab_list, category, nav } from "../../services/index"
export default class List {
    // @observable 修饰属性
    @observable categoryList;
    @observable categoryList_detail;
    @observable category_detail;  //详情页横向数据
    @observable category_C_date   //详情页详情数据
    // @action 修饰方法
    @action changeCount() {         //初始渲染分类
        list().then((res) => {
            this.categoryList = res.data.categoryList
            this.categoryList_detail = res.data.currentCategory
        })
    }
    @action tab_list = async (parmase) => {     //点击切换获取分类数据
        const data = await tab_list(parmase)
        this.categoryList_detail = data.data.currentCategory
    }
    @action category = async (parmase) => {
        const data = await category(parmase)
        this.category_C_date = data.data.goodsList
    }
    @action nav = async (parmase) => {
        const data = await nav(parmase)
        this.category_detail = data.data.brotherCategory
    }
}