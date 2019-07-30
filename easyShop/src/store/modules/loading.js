import {observable,action,autorun} from "mobx"
export default class Loading{
    @observable isLoading=false;

    @action changeLoading(value){
        this.isLoading=value;
    }
    constructor(){
        autorun(()=>{
            console.log("isLoading...",this.isLoading);
        })
    }
}