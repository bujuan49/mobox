//地址具体功能
import { observable, action } from "mobx";
import { address, save } from '../../server/index'
export default class List {

    // @observable 修饰属性
    @observable adds = null;
    // @action 修饰方法
    @action address = async () => {  //查询用户地址
        let date = await address()
        this.adds = date.data
        console.log(date)
    }
    @action save = async (parmas) => {
       let data = await save(parmas)
        console.log(data)
    }
}




