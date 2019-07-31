import React, { Component } from 'react';
import './address.scss';
import Header from '../../../components/header/header'
import { inject, observer } from "mobx-react";
@inject("address")
@observer

class address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '地址管理'
        }
    }
    componentDidMount() {
        this.props.address.address()
    }
    addree = () => {
        this.props.history.push('/append')
    }
    render() {
        const { adds } = this.props.address
        return (
            <div className='address_wrap'>
                <Header title={this.state.title}></Header>
                <div className="addressList">

                    {
                        adds && adds.map(item => {
                            return <div className="addressItem">
                                <div className="addressMsg">
                                    <div className="concatName">12</div>
                                    <div className="addressDetail">
                                        <div className="concatPhone">15678900751</div>
                                        <div className="concatAddress">河北省石家庄市长安区</div>
                                        <div className="concatAddress"></div>
                                    </div>
                                    <div className="deleteAddress">
                                        X
                                </div>
                                </div>
                            </div>
                        })

                    }

                </div>
                <div className="addAddress">
                    <span onClick={() => this.addree()}>新建地址</span>
                </div>
            </div >
        )
    }

}

export default address;