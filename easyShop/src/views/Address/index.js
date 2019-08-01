import React, { Component } from 'react'
import {Icon, Button } from 'antd'
import './address.scss'
import Addaddress from '../../components/Addaddress'
import {observer,inject} from 'mobx-react'
@inject('mine')
@observer

 class Address extends Component {
   
    goBack(){
        this.props.history.go(-1)
    }

    changeAddress(){
      this.props.mine.flag=true
    }
    componentDidMount(){
        this.props.mine.getAddress()
    }
    render() {
        const {flag,addressList}=this.props.mine;
        
        return (
            <>
                {
                   flag&&flag?<Addaddress/>
                   :<div className='addresser'>
                        <div className="title">
                            <Icon type="left" onClick={()=>this.goBack()}/>
                            <h4>地址管理</h4>
                        </div>
                        <section>
                            {
                                addressList.map((item,index)=><div key={index} className='items'>
                                  <div className='left'>
                                        <span>{item.name}</span>
                                        
                                  </div>
                                  <div className='center'>
                                     <p>{item.mobile}</p>
                                     <p>{item.address}</p>

                                  </div>
                                  <div className='right'>
                                      删除
                                  </div>

                                </div>)
                            }
                        </section>
                        <footer>
                        <Button type="primary" block onClick={()=>this.changeAddress()}>
                        新建地址
                        </Button>
                        </footer>
                    </div>
                }              
            </>
        )
    }
}
export default Address
