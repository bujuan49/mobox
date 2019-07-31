import React, { Component } from 'react';
import './append.scss';
import address from './addressData'
import { inject, observer } from "mobx-react";
import { PickerView } from 'antd-mobile';
@inject("address")
@observer

class append extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '地址管理',
            play: 'none'
        }
    }
    addree = () => {
        this.props.history.push()
    }
    change = () => {
        this.setState({ play: '' })
    }


    save = () => {
        this.props.address.save({
            id: '123',
            name: '耿增'

        })
    }

    render() {
        return (
            <div className='address_wrap'>
                <div className="add_header">新增地址</div>
                <div className="onePx_bottom">
                    <input className="addressInput" placeholder="姓名" />
                </div>
                <div className="onePx_bottom">
                    <input className="addressInput" placeholder="电话号码" />
                </div>
                <div className="onePx_bottom">
                    <input className="addressInput" placeholder="选择地址" onClick={() => this.change()} />
                </div>
                <div className="onePx_bottom"><input className="addressInput" placeholder="详细地址" /></div>
                <div className="onePx_bottom">
                    <div className="isDefaultAddress">设置默认地址<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC" alt="check"></img></div>
                </div>
                <div className='add_btn'>
                    <p onClick={() => this.props.history.go(-1)}>取消</p><p style={{ background: 'skyblue' }} onClick={() => this.save()}>保存</p>
                </div>

                <div className='paick' style={{ display: this.state.play }}>
                    <div className="pack">
                        <div className="picker">
                            {/* <div className="top-btn">
                                <p onClick={() => this.props.cancle()}>取消</p>
                                <p>确认</p>
                            </div> */}
                            <PickerView
                                onChange={this.onChange}
                                data={address}
                                value={this.state.value}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default append;


{/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg==" alt="check"></img> */ }