import {observable,action} from "mobx"
import {goodscount,getCart,addCart,cartChecked,cartDelete} from "../../services/index"
export default class Shop{
    @observable sum=0;
    @observable count=0;
    @observable allShop={};
    @observable flag=false;
    @observable ischecked;
    @action getShopcont= async ()=>{
        let data=await goodscount()
        this.sum =data.data.cartTotal.goodsCount
    }
      /***
     * 获取购物车商品
     ***/

    @action getallShop= async (id)=>{
        let data=await getCart();
        //console.log("shop....",data)
        this.allShop=data.data;
        //反选
        this.ischecked=this.allShop.cartList.every(item=>{
            return item.checked>0
        })
        console.log("ischecked...",this.ischecked)
    }
    /***
     * 全选商品
     ***/
    @action all=async (ischecked)=>{
       if(ischecked){
            this.allShop.cartList.map(item=>{
                return item.checked=1;
            })
       }else{
            this.allShop.cartList.map(item=>{
                return item.checked=0;
            })
       }
    }
    /***
     * 添加商品
     ***/
    @action changeCount= async (type,id)=>{
        if(type==='+'){
            this.allShop.cartList.map(item=>{
                if(item.id==id){
                    item.number++
                }
            })
        }else if(type==='-'){
            this.allShop.cartList.map(item=>{
                if(item.id==id){
                    item.number--
                }
            })
        }
        //type==='+'? this.count++: this.count--;
    }
    /***
     * 添加商品
     ***/
    @action getAdd= async(payload)=>{
        let data=await addCart(payload);
        //console.log(data)
    }
    /***
     * 商品是否选中
     ***/
    @action changCheckout=async (payload)=>{
        let data=await cartChecked(payload);
        console.log(data)
    }
    /***
     * 删除商品
     ***/
    @action shopDelete=async (payload)=>{
        let data= await cartDelete(payload);
        this.allShop=data.data
    }
}