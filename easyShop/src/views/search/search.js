import React, { Component } from 'react'
import './search.scss'
class search extends Component {
    render() {
        return (
            <div className='search_wrap'>
                <div className="search_header">
                    <p onClick={() => window.history.go(-1)} className='iconfont icon-zuo' style={{ width: '1rem', textAlign: 'center' }}></p>
                    <p><input type="text" /></p>
                    <p>取消</p>
                </div>
                <div className="search_main">
                    <div><h5>历史记录</h5> <p></p></div>
                    <div>
                        <p>墨镜</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        )
    }
}
export default search