import React, { Component } from 'react'
// import {Icon, Button } from 'antd'
import './address.scss'
import Addaddress from '../../components/Addaddress'
 class Address extends Component {
    goBack(){
        this.props.history.go(-1)
    }
    changeAddress(){
      this.props.history.push('/address')
    }
    render() {

        return (
            <div>
               <Addaddress/>
            </div>
            // <div className='addresser'>
            //     <div className="title">
            //         <Icon type="left" onClick={()=>this.goBack()}/>
            //         <h4>地址管理</h4>
            //    </div>
            //    <section>

            //    </section>
            //    <footer>
            //     <Button type="primary" block onClick={()=>this.changeAddress()}>
            //      新建地址
            //     </Button>
            //    </footer>
            // </div>
           
        )
    }
}

export default Address
