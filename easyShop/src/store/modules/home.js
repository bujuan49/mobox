import { observable, action } from "mobx";
import {alldata,branddetail,goodsdetail} from "../../services/index"
export default class Home{
    // @observable 修饰属性
    @observable count = 1000;
    //轮播数据
    @observable banner=[];
    //制造商数据
    @observable brandList=[];
    //分类数据
    @observable categoryList=[];
    //nav数据
    @observable channel=[];
    //人气推荐数据
    @observable hotGoodsList=[];
    //新品数据
    @observable newGoodsList=[];
    //专题数据
    @observable topicList=[];
    //制造商详情
    @observable detailData={};
    //新品详情
    @observable newdatail=null;
    // @action 修饰方法
    // @action changeCount=async(type)=>{
    //     type==='+'? this.count++: this.count--;
    // }
    @action getallData= async()=>{
        let data=await alldata()
        this.banner=data.data.banner
        this.brandList=data.data.brandList
        this.categoryList=data.data.categoryList
        this.hotGoodsList=data.data.hotGoodsList
        this.channel=data.data.channel
        this.newGoodsList=data.data.newGoodsList
        this.topicList=data.data.topicList
    }
    @action getDetail=async (payload)=>{
        let data=await branddetail(payload)
        this.detailData=data.data.brand
    }
    @action newDatail= async(payload)=>{
        let data=await goodsdetail(payload)
        console.log(data.data)
        this.newdatail=data.data
    }
}