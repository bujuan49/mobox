import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
export default class footer extends Component {
    back = () => {
        window.history.go(-1)
    }
    render() {
        return (
            <div className='header_wrap'>
                <p onClick={() => { this.back() }} className='iconfont icon-zuo' style={{ width: '1rem', textAlign: 'center' }}> </p><p style={{ flex: '1', paddingLeft: '2rem' }}>奇趣分类</p>
            </div>
        )
    }
}
