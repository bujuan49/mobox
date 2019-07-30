import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './footer.scss'
export default class footer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className='foot_wrap'>
                <ul>
                    <li> <span className='iconfont icon-iconset0124'> </span> <NavLink to='/home'>首页</NavLink></li>
                    <li> <span className='iconfont icon-xiazai'></span><NavLink to='/homes'>专题</NavLink></li>
                    <li> <span className='iconfont icon-fenxiang'></span><NavLink to='/classify'>分类</NavLink></li>
                    <li> <span className='iconfont icon-iconset0124'></span><NavLink to='/shopping'>购物车</NavLink></li>
                    <li> <span className='iconfont icon-xingxing'></span><NavLink to='/my'>我的</NavLink></li>
                </ul>

            </div>
        )
    }
}
