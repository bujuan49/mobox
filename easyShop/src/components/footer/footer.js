import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import './footer.scss'
export default class footer extends Component {
    render() {
        return (
            <div className='foot_wrap'>
                <BrowserRouter>
                    <ul>
                        <li> <span className='iconfont icon-iconset0124'>  </span> <Link to='/home'>首页</Link></li>
                        <li> <span className='iconfont icon-xiazai'></span><Link to='/home'>专题</Link></li>
                        <li> <span className='iconfont icon-fenxiang'></span><Link to='/classify'>分类</Link></li>
                        <li> <span className='iconfont icon-iconset0124'></span><Link to='/home'>首页</Link></li>
                        <li> <span className='iconfont icon-xingxing'></span><Link to='/home'>首页</Link></li>
                    </ul>
                </BrowserRouter>
            </div>
        )
    }
}
