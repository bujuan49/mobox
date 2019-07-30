import {observable,action} from "mobx"
import {login} from "../../services/index"
import {setToken} from "../../uilts/index"
export default class Login{
    @observable code=null;
    @action submitFrom(payload){
        console.log(payload)
        login(payload).then(res=>{
            console.log(res)
            this.code=res.errno
            if(res.data.errno==0){
                setToken(res.data.sessionKey) 
            }
            
        })
    }
} 