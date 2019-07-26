import { observable, action } from "mobx";
import { list, tab_list, category } from '../../server/index'
export default class List {
    // @observable 修饰属性
    @observable categoryList;
    @observable categoryList_detail;
    @observable category_detail;  //详情页横向数据
    // @action 修饰方法
    @action changeCount() {         //初始渲染分类
        list().then((res) => {
            this.categoryList = res.data.categoryList
            this.categoryList_detail = res.data.currentCategory
        })
    }
    @action tab_list(parmase) {     //点击切换获取分类数据
        tab_list(parmase).then(res => {
            this.categoryList_detail = res.data.currentCategory
        })
    }
    @action category = async (parmase) => {
        const data = await category(parmase)
        console.log(data)
        // this.category_detail=data
        
    }
}