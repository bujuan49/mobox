import { observable, action } from "mobx";
import { addressData, addData, delData } from "../../services/index"
export default class Mine {
    @observable flag = false;
    @observable addressList = []
    @observable addList = []
    @observable delList = []
    //获取地址
    @action getAddress = async (type) => {
        const data = await addressData(type);
       // console.log(data.data);
        this.addressList = data.data
    }
    //添加地址
    @action getNewAdd = async (type) => {
        const data = await addData(type);
        this.getAddress()
        this.addList=data.data
      //  console.log(data)
    }
    @action delAddress = async (type) => {
        const data = await delData(type);
       this.delList = data.data
  
    }

}

