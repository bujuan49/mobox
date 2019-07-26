import { observable, action } from "mobx";
import {alldata} from "../../services/index"
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
    // @action 修饰方法
    @action changeCount(type){
        console.log('type...', type);
        type==='+'? this.count++: this.count--;
    }
    @action getallData(){
        alldata().then(res=>{
            console.log("16res...",res.data)
            this.banner=res.data.banner
            this.brandList=res.data.brandList
            this.categoryList=res.data.categoryList
            this.hotGoodsList=res.data.hotGoodsList
            this.newGoodsList=res.data.newGoodsList
            this.topicList=res.data.topicList
          
        })
    }
}