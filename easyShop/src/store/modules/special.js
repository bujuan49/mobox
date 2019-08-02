import { observable, action } from "mobx";
import { specialData, detailData, commentData, writeData } from "../../services/index"
export default class Home {
  // @observable 修饰属性
  @observable SpecialList = [];
  @observable SpecialDetail = [];
  @observable CommentList = [];
  @observable Comments = [];

//获取专题数据
  @action getSpeacil = async (type) => {
    const data = await specialData(type);
    this.SpecialList = data.data.data
  }
//获取详情数据
  @action getDetail = async (type) => {
    const data = await detailData(type);
    this.SpecialDetail = data.data
  }
//评论
  @action getComment = async (type) => {
    const data = await commentData(type);
    console.log(data)
    this.CommentList = data.data.data;
    
  }
//写评论
  @action writeComment = async (type) => {
    const data = await writeData(type);
    this.Comments = data;
  }
}