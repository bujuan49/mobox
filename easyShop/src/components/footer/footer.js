import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './footer.scss'
export default class footer extends Component {
    render() {
        return (
            <div className='foot_wrap'>
                <ul>
                    <li> <span className='iconfont icon-iconset0124'>  </span> <NavLink to='/home'>首页</NavLink></li>
                    <li> <span className='iconfont icon-xiazai'></span><NavLink to='/home'>专题</NavLink></li>
                    <li> <span className='iconfont icon-fenxiang'></span><NavLink to='/classify'>分类</NavLink></li>
                    <li> <span className='iconfont icon-iconset0124'></span><NavLink to='/home'>首页</NavLink></li>
                    <li> <span className='iconfont icon-xingxing'></span><NavLink to='/home'>首页</NavLink></li>
                </ul>

            </div>
        )
    }
}
