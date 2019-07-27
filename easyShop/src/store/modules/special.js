import { observable, action } from "mobx";
import {specialData, detailData} from "../../services/index"
export default class Home{
    // @observable 修饰属性
    @observable SpecialList=[];
    @observable SpecialDetail=[];
    @action getSpeacil(type){
      specialData(type).then(res=>{
        this.SpecialList=res.data.data;
      
      })
    }
    @action getDetail(type){
      
      detailData(type).then(res=>{
      this.SpecialDetail=res.data
      })
    }
}