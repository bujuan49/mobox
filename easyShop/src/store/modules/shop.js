import {observable,action} from "mobx"
import {goodscount,getCart,addCart} from "../../services/index"

export default class Shop{
    @observable sum=0;
    @observable count=0;
    @observable allShop={};
    @observable flag=false;
    @action getShopcont= async ()=>{
        let data=await goodscount()
        console.log("shop...",data)
        this.sum =data.data.cartTotal.goodsCount
    }
    @action getallShop= async ()=>{
        let data=await getCart();
        console.log("shop....",data.data)
        this.allShop=data.data
    }
    @action changeCount= async (type)=>{
        type==='+'? this.count++: this.count--;
    }
    @action getAdd= async(payload)=>{
        let data=await addCart(payload);
        console.log(data)
    }
}