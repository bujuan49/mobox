import { observable, action } from "mobx";
import {specialData} from "../../services/index"
export default class Home{
    // @observable 修饰属性
    @observable count = 1000;
    
    @action getSpeacildetail(){
      specialData().then(res=>{
        console.log(res)
      })
    }
}