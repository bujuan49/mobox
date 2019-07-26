import { observable, action } from "mobx";
import { list, tab_list } from '../../server/index'
export default class List {
    // @observable 修饰属性
    @observable categoryList;
    @observable categoryList_detail;
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
}