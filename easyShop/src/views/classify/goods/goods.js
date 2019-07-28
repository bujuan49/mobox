import React, { Component } from 'react'
import Header from '../../../components/header/header'
import GoodFoot from '../../../components/goods/goods'
import Swiper from 'swiper'
import './goods.scss'
import { inject, observer } from 'mobx-react'
@inject('goods')
@observer
class goods extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
        this.props.goods.goods_date_fun(this.props.history.location.pathname.slice(7))
        new Swiper(".banner", {
            loop: true
        });
    }

    render() {
        const { goods_date_swiper } = this.props.goods
        return (
            <div className='goods_wrap'>
                <Header></Header>
                <div className="goods_main">
                    <div className="swiper-container banner">
                        <div className="swiper-wrapper">
                            {
                                goods_date_swiper && goods_date_swiper.map(item => {
                                    return <div key={item.id} className="swiper-slide">
                                        <img src={item.img_url} alt="" />
                                    </div>
                                })
                            }

                        </div>
                    </div>
                    <div className="goods_title"></div>
                    <div className="goods_title"></div>
                </div>
                <GoodFoot></GoodFoot>
            </div>
        )
    }
}
export default goods