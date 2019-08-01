
import { observable, action } from "mobx";
import { specialData, detailData, commentData, writeData } from "../../server/index"
export default class Home {
    // @observable 修饰属性
    @observable SpecialList = [];
    @observable SpecialDetail = [];
    @observable CommentList = [];
    @observable Comments = [];
    @action getSpeacil = async (type) => {
        const data = await specialData(type);
        this.SpecialList = data.data.data
    }
    @action getDetail = async (type) => {
        const data = await detailData(type);
        this.SpecialDetail = data.data
    }
    @action getComment = async (type) => {
        const data = await commentData(type);
        this.CommentList = data.data.data;
    }
    @action writeComment = async (type) => {
        const data = await writeData(type);
        this.Comments = data;
    }
}