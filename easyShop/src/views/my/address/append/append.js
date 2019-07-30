import React, { Component } from 'react';
import './append.scss';
import { inject, observer } from "mobx-react";
// @inject("address")
@observer

class append extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '地址管理'
        }
    }
    addree = () => {
        this.props.history.push()
    }
    render() {
        return (
            <div className='address_wrap'>
                <div class="add_header">新增地址</div>
                <div class="onePx_bottom">
                    <input class="addressInput" placeholder="姓名" />
                </div>
                <div class="onePx_bottom">
                    <input class="addressInput" placeholder="电话号码" />
                </div>
                <div class="onePx_bottom"><div class="chooseAddress">北京/北京市/东城区</div></div>
                <div class="onePx_bottom"><input class="addressInput" placeholder="详细地址" /></div>
                <div class="onePx_bottom">
                    <div class="isDefaultAddress">设置默认地址</div>
                </div>
                <div className='add_btn'>
                    <p>取消</p><p style={{ background: 'skyblue' }}>保存</p>
                </div>
            </div>
        )
    }

}

export default append;