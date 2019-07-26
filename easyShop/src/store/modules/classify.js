import { observable, action } from "mobx";
import { list } from '../../server/index'
export default class List {
    // @observable 修饰属性
    @observable categoryList = '';
    // @action 修饰方法
    @action changeCount() {
        list().then((res) => {
            this.categoryList = res
            console.log(res.data)
            console.log(this.categoryList)
        })
    }
}