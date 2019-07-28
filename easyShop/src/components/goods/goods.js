import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './goods.scss'
export default class footer extends Component {
    render() {
        return (
            <div className='goods_foot'>
                <div className='iconfont icon-xingxing' style={{ fontSize: '.6rem' }}></div>
                <div className='iconfont icon-jieshaoxinxi_o' style={{ fontSize: '.6rem' }}></div>
                <div >加入购物车</div>
                <div>立即购买</div>
            </div>
        )
    }
}
