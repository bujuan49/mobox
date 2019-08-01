import {observable,action} from "mobx"
import {login} from "../../services/index"
import {setToken} from "../../uilts/index"
export default class Login{
    @observable code=null;
    @action submitFrom = async (payload)=>{
        let data=await login(payload)
        console.log("login...",data)
            this.code=data.errno;
            console.log(data.errno)
            setToken(data.data.sessionKey) 
            if(data.data.errno){
                console.log(111)
               
            }
            
    }
} 