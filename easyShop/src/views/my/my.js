import React, { Component } from 'react';
import './my.scss';
import { inject, observer } from "mobx-react";
import Footer from '../../components/footer/footer'
@inject("my")
@observer

class my extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPower: [
                {
                    icon: 'icon-fangshai',
                    name: '我的收藏',
                    link: '/home/collect'
                },
                {
                    icon: 'icon-jingzi',
                    name: '地址管理',
                    link: '/home/address'
                },
                {
                    icon: 'icon-mianmo',
                    name: '我的订单'
                },
                {
                    icon: 'icon-xiangshui',
                    name: '周末拼单'
                },
                {
                    icon: 'icon-kouhong',
                    name: '优惠券'
                },
                {
                    icon: 'icon-fangshai',
                    name: '优选购'
                },
                {
                    icon: 'icon-jingzi',
                    name: '我的红包'
                },
                {
                    icon: 'icon-fangshai',
                    name: '会员plus'
                },
                {
                    icon: 'icon-jingzi',
                    name: '邀请返利'
                },
                {
                    icon: 'icon-kouhong',
                    name: '意见反馈'
                },
                {
                    icon: 'icon-xiangshui',
                    name: '客服咨询'
                },
                {
                    icon: 'icon-jingzi',
                    name: '账户安全'
                }]
        }
    }
    to = (item) => {
        console.log(item)
    }
    render() {
        const userPhone = window.localStorage.getItem('user')
        return (
            <>
                <div className='my_main'>
                    {
                        userPhone ?
                            <div className="my_userMsgs">
                                <div className="my_img">
                                    <h6> </h6>
                                    <h5> </h5>
                                </div>
                                <div className='my_info'>
                                    <span>{userPhone}</span>
                                    <span>普通用户</span>
                                </div>
                            </div> :
                            <div className="my_userMsgs">
                                <div style={{ height: '100%' }}>未登录</div>
                            </div>
                    }
                    <div className="my_userPower">
                        {
                            this.state.userPower.map((item) => (
                                <div key={item.name} style={'link' in item ? { color: '#2196f3' } : {}} onClick={this.showPower.bind(this, item)} >
                                    <i className={`iconfont ${item.icon}`} style={'link' in item ? { color: '#2196f3' } : {}}></i>
                                    <div onClick={() => this.to(item)}>{item.name}</div>
                                </div>)
                            )
                        }
                    </div>
                    <p className="my_out" onClick={this.goTo}>
                        退出登录
          </p>
                </div>
                <Footer></Footer>
            </>
        );
    }
    showPower = (item) => {
        console.log(item.link)
        if ('link' in item) {
            this.props.history.push(item.link)
        } else {
            // Toast.offline(`${item.name}功能还未解锁，请耐心等候~`,1)
        }
    }
    goTo = () => {
        this.props.history.push('/login')

    }
}

export default my;