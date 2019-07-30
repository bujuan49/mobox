import { observable, action } from "mobx";
import {specialData, detailData,commentData,writeData} from "../../services/index"
export default class Home{
    // @observable 修饰属性
    @observable SpecialList=[];
    @observable SpecialDetail=[];
    @observable CommentList=[];
    @observable Comments=[];

   
    @action getSpeacil=async(type)=>{
       const data=await specialData(type);
       this.SpecialList=data.data.data
      // specialData(type).then(res=>{
      //   this.SpecialList=res.data.data;
      
      // })
    }
    @action getDetail=async(type)=>{
      const data=await detailData(type);
      this.SpecialDetail=data.data
      // detailData(type).then(res=>{
      // this.SpecialDetail=res.data
      // })
    }
    @action getComment=async(type)=>{
      const data=await commentData(type);
      this.CommentList=data.data.data;
      // commentData(type).then(res=>{
      //   this.CommentList=res.data.data;
      // })
    }
    @action writeComment=async(type)=>{
      const data=await writeData(type);
      this.Comments=data;
      // writeData(type).then(res=>{
      //   //console.log(res)
      //  this.Comments=res;
      // })
    }
}