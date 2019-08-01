//地址具体功能
import { observable, action, autorun } from "mobx";
import { } from '../../server/index'
export default class loading {
    // @observable 修饰属性
    @observable loading = true;
    // @action 修饰方法
    @action changeloading(value) {
        this.loading = value
    }
    constructor() {
        autorun(() => {
            console.log('isLoading...', this.loading);
        })
    }
}




