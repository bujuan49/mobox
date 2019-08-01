
import React, { Component } from 'react'
import { Icon, Button } from 'antd'
import './address.scss'

import Addaddress from '../../../components/address/index'
import { observer, inject } from 'mobx-react'
import { Modal } from 'antd-mobile'
const alert = Modal.alert;
@inject('mine')
@observer

class Address extends Component {
    componentDidMount() {
        this.props.mine.getAddress()
    }
    showAlert(id) {
        const alertInstance = alert('删除', '确定要删除改地址么？？？', [
            { text: '取消', style: 'default' },
            {
                text: '确定', onPress: () => {
                    this.props.mine.getAddress()
                    this.props.mine.delAddress({ id: id });
                }
            },
        ]);
        this.props.mine.getAddress()
        this.props.mine.delAddress({ id: id });
    };
    goBack() {
        this.props.history.go(-1)
    }
    changeAddress() {
        this.props.mine.flag = true
    }
    render() {
        const { flag, addressList } = this.props.mine;
        console.log(addressList)
        return (
            <>
                {
                    flag && flag ? <Addaddress />
                        : <div className='addresser'>
                            <div className="title">
                                <Icon type="left" onClick={() => this.goBack()} />
                                <h4>地址管理</h4>
                            </div>
                            <section>
                                {
                                    addressList && addressList.map(item => <div className='items' key={item.id} >
                                        <div className='left'>
                                            <span>{item.name}</span>
                                        </div>
                                        <div className='center'>
                                            <span>{item.mobile}</span>
                                            <span>{item.city_id}</span>
                                            <span>{item.address}</span>
                                        </div>
                                        <div className='right'>
                                            <Icon type="delete" onClick={() => this.showAlert(item.id)} />

                                        </div>
                                    </div>)
                                }
                            </section>
                            <footer>
                                <Button className='login-form-save' type="primary" block onClick={() => this.changeAddress()}>
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