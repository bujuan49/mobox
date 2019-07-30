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
    @action getallData(){
        alldata().then(res=>{
            console.log("16res...",res.data)
            this.banner=res.data.banner
            this.brandList=res.data.brandList
            this.categoryList=res.data.categoryList
            this.hotGoodsList=res.data.hotGoodsList
            this.channel=res.data.channel
            this.newGoodsList=res.data.newGoodsList
            this.topicList=res.data.topicList
          
        })
        
    }
    @action getDetail(payload){
        branddetail(payload).then(res=>{
            this.detailData=res.data.brand
        })
    }
    @action newDatail(payload){
        goodsdetail(payload).then(res=>{
            console.log(res)
            this.newdatail=res.data
        })
    }
}