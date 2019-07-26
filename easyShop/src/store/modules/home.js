import { observable, action } from "mobx";
import { home_All_date } from '../../server/index'
export default class Home {
    // @observable 修饰属性
    @observable home_date = '';
    // @action 修饰方法
    @action home_All_date() {
        home_All_date().then((res) => {
            this.home_date = res
            console.log(res)
        })
    }
}