import React, { Component } from 'react'
import './search.scss'
class search extends Component {
    render() {
        return (
            <div className='search_wrap'>
                <div className="search_header">
                    <p onClick={() => window.history.go(-1)} className='iconfont icon-zuo' style={{ width: '.7rem', textAlign: 'center' }}></p>
                    <p className='search_p'><input type="text" /></p>
                    <p style={{ marginRight: '.1rem' }}>取消</p>
                </div>
                <div className="search_box">
                    <div className='search_sear'><h5>历史记录</h5> <p className='iconfont icon-shipin'></p></div>
                    <div>
                        <p>墨镜</p>
                        <p>墨镜</p>
                        <p>墨镜</p>
                        <p>墨镜</p>

                    </div>
                </div>
                <div className='search_box_2'>
                    <h5>热门搜索</h5>
                    <div>
                        <p>520元礼包先领</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default search