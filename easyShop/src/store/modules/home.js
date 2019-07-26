import { observable, action } from "mobx";
import {alldata} from "../../services/index"
export default class Home{
    // @observable 修饰属性
    @observable count = 1000;
    @observable banner=[];
    @observable brandList=[];
    @observable categoryList=[];
    @observable channel=[];
    @observable hotGoodsList=[];
    @observable newGoodsList=[];
    @observable topicList=[];
    // @action 修饰方法
    @action changeCount(type){
        console.log('type...', type);
        type==='+'? this.count++: this.count--;
    }
    @action getallData(){
        alldata().then(res=>{
            console.log("16res...",res.data.banner)
            this.banner=res.data.banner
            this.brandList=res.data.brandList
            this.categoryList=res.data.categoryList
            this.hotGoodsList=res.data.hotGoodsList
            this.newGoodsList=res.data.newGoodsList
            this.topicList=res.data.topicList
            
        })
    }
}