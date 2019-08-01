import { observable, action } from "mobx";
import { addressData, addData, delData } from "../../services/index"
export default class Mine {
    @observable flag = false;
    @observable addressList = []
    @observable addList = []
    @observable delList = []
    //获取地址
<<<<<<< HEAD
    @action getAddress = async (type) => {
        const data = await addressData(type);
        this.addressList = data
    }
    //添加地址
    @action getNewAdd = async (type) => {
        const data = await addData(type);

        //this.addList=data
        console.log(data)
    }
    @action delAdd = async (type) => {
        const data = await delData(type);
        this.delList = data.data

    }

=======
    @action getAddress=async(type)=>{
        const data=await addressData(type);
         this.addressList=data.data
     }
     //添加地址
     @action getNewAdd=async(type)=>{
        const data=await addData(type);
        this.addList=data;
      console.log(data)
     }
     @action delAdd=async(type)=>{
        const data=await delData(type);
         this.delList=data.data
      
     }
 
>>>>>>> 83f525ea715496176e3434055abe648e88cad235
}

