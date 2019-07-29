import React, { Component } from 'react'
import './search.scss'
import { inject, observer } from 'mobx-react'
@inject('goods')
@observer
class search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            values: '',
            flag: false
        }
    }
    down = () => {    //模糊搜索
        if (window.event.keyCode === 13) {
            this.props.goods.helper(this.state.values + '')
        }
    }
    sou = (e) => {
        this.setState({ values: e.target.value })
    }
    list = (item) => {
        this.props.goods.list({
            sort: 'id',
            page: '1',
            size: '100',
            keyword: item
        })
        this.setState({ flag: true })
    }
    render() {
        const { helper_xiala, helper_list } = this.props.goods
        if (this.state.values === '') {
            return (
                < div className='search_wrap' >
                    <div className="search_header">
                        <p onClick={() => window.history.go(-1)} className='iconfont icon-zuo' style={{ width: '.7rem', textAlign: 'center' }}></p>
                        <p className='search_p'><input onChange={(e) => this.sou(e)} type="text" onKeyDown={() => this.down()} /></p>
                        <p style={{ marginRight: '.1rem' }}>取消</p>
                    </div>
                    <div className="search_box">
                        <div className='search_sear'><h5>历史记录</h5> <p className='iconfont icon-shipin'></p></div>
                        <div>
                            <p>墨镜</p>
                            <p>手机</p>
                            <p>打火机</p>
                            <p>炮弹</p>
                        </div>
                    </div>
                    <div className='search_box_2'>
                        <h5>热门搜索</h5>
                        <div>
                            <p style={{ border: '1px solid red' }}>520元礼包先领</p>
                        </div>
                    </div>
                </div >
            )
        } else {
            return (
                < div className='search_wrap' >
                    <div className="search_header">
                        <p onClick={() => window.history.go(-1)} className='iconfont icon-zuo' style={{ width: '.7rem', textAlign: 'center' }}></p>
                        <p className='search_p'><input onChange={(e) => this.sou(e)} type="text" onKeyDown={() => this.down()} /></p>
                        <div className={this.state.flag ? 'none' : 'search_xia'}>
                            {
                                helper_xiala && helper_xiala.map((item, index) => {
                                    return <span onClick={() => this.list(item)} key={index}>{item}</span>
                                })
                            }
                        </div>
                        <p style={{ marginRight: '.1rem' }}>取消</p>
                    </div>
                    <div className="search_main">
                        <div className="searchConditionWrap">
                            <div className="searchCondition"><div className="active">综合</div>
                                <div className="">价格</div>
                                <div className="chooseCategory">全部分类</div>
                            </div>
                        </div>
                        <div className="goodsList">
                            {
                                helper_list && helper_list.map(item => {
                                    return <dl key={item.id}>
                                        <dt>
                                            <img src={item.banner_url} alt="" />
                                        </dt>
                                        <dd>
                                            <span>{item.name}</span>
                                            <span> {item.front_name}</span>
                                        </dd>
                                    </dl>
                                })
                            }
                        </div>
                    </div>
                </div >
            )
        }

    }
}

export default search