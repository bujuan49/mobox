import {observable,action} from "mobx"
import {goodscount,getCart,addCart} from "../../services/index"
import { genPercentAdd } from "antd/lib/upload/utils";
import { async } from "q";
export default class Shop{
    @observable sum=0;
    @observable allShop={};
    @action getShopcont=async ()=>{
        let data=await goodscount()
        this.sum =data.data.cartTotal.goodsCount
    }
    @action getallShop=async ()=>{
        let data=await getCart();
        console.log("shop....",data)
        this.allShop=data.data
    }
    @action getAdd=async(payload)=>{
        let data=await addCart(payload);
        console.log(data)
    }
}