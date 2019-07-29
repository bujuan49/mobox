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
        new Swiper(".goods_banner", {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: true
        });
    }

    render() {
        const { goods_date_swiper } = this.props.goods
        return (
            <div className='goods_wrap'>
                <Header></Header>
                <div className="goods_main">
                    <div className="swiper-container goods_banner">
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
                    <ul className="goods_title">
                        <li><span>★</span>30天无忧退货</li>
                        <li><span>★</span>30天无忧退货</li>
                        <li><span>★</span>30天无忧退货</li>
                    </ul>
                    <div className="goods_Masg">
                        <div className="goodsNameTitle">绿豆糕 80克（4枚入）</div>
                        <div className="goodsNameSubTitle">细腻松软，入口绵柔</div>
                        <div className="goodsPriceTitle">￥12.9</div>
                    </div>
                    <div className="goods_Size"><div></div><div>x 0</div><div>选择规格<i className="iconfont icon-right"></i></div></div>
                    <div className="goods_Attribute"><div className="goodsAttributeLine">-- 商品参数 --</div></div>
                    <div class="goodsAttributeList">
                        <div className="goodsAttributeItem">
                            <div className="attributeLabel">尺寸</div>
                            <div className="attributeContent">160*230cm</div></div>
                        <div className="goodsAttributeItem"><div className="attributeLabel">颜色</div>
                            <div className="attributeContent">蓝灰格</div></div>
                        <div className="goodsAttributeItem"><div className="attributeLabel">材质</div>
                            <div className="attributeContent">绒面：100% 聚酯纤维 背面：52% 聚酯纤维/ 48% 棉</div></div>
                        <div className="goodsAttributeItem"><div className="attributeLabel">产地</div>
                            <div className="attributeContent">中国北京</div></div>
                    </div>
                    <div className="goodsAttribute">
                        <div className="goodsAttributeLine">常见问题</div>
                        <div className="problemWrap"><div className="problemLabel"><span>√</span>购买运费如何收取？</div>
                            <div className="problemContent">单笔订单金额（不含运费）满88元免邮费；不满88元，每单收取10元运费。(港澳台地区需满</div>
                        </div><div className="problemWrap"><div className="problemLabel"><span>√</span>使用什么快递发货？</div>
                            <div className="problemContent">严选默认使用顺丰快递发货（个别商品使用其他快递），配送范围覆盖全国大部分地区（港澳台地区除</div></div>
                        <div className="problemWrap"><div className="problemLabel"><span>√</span>如何申请退货？</div>
                            <div className="problemContent">1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，</div></div>
                        <div className="problemWrap"><div className="problemLabel"><span>√</span>如何开具发票？</div>
                            <div className="problemContent">1.如需开具普通发票，请在下单时选择“我要开发票”并填写相关信息（APP仅限2.4.0及以</div>
                        </div>
                    </div>
                </div>
                <GoodFoot></GoodFoot>
            </div>
        )
    }
}
export default goods