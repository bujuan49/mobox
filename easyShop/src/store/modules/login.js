import {observable,action} from "mobx"
import {login} from "../../services/index"
export default class Login{
    @observable all=[]
    @action submitFrom(payload){
        console.log(payload)
        login(payload).then(res=>{
           console.log(res)
        })
    }
} 