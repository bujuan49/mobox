import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
export default class footer extends Component {

    render() {
        return (
            <div className='header_wrap'>
                <p onClick={() => window.history.go(-1)} className='iconfont icon-zuo' style={{ width: '1.3rem', textAlign: 'center' }}> </p><p style={{ flex: '1', paddingLeft: '1rem' }}>{this.props.title}</p>
            </div>
        )
    }
}
