import { observable, action } from "mobx";
import {specialData, detailData,commentData,writeData} from "../../services/index"
export default class Home{
    // @observable 修饰属性
    @observable SpecialList=[];
    @observable SpecialDetail=[];
    @observable CommentList=[];
    @observable Comments=[];

   
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
    @action getComment(type){
      commentData(type).then(res=>{
        this.CommentList=res.data.data;
      })
    }
    @action writeComment(type){
      writeData(type).then(res=>{
        //console.log(res)
       this.Comments=res;
      })
    }
}