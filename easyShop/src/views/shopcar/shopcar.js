import React, { Component } from 'react'
import './shopcar.scss'
import { inject, observer } from 'mobx-react'
import Footer from '../../components/footer/footer'
@inject('car')
@observer
class shopcar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: true
        }
    }
    componentDidMount() {
        this.props.car.cartIndex()
    }

    render() {
        const { shopping, money } = this.props.car
        return (
            <div className="car_wrap">
                <div className="car_header">
                    <li><span>★</span>30天无忧退货</li><li><span>★</span>48小时快速退款</li><li><span>★</span>满88元免邮费</li>
                </div>
                <div className='car_main'>
                    {
                        this.state.flag ? shopping && shopping.map(item => {
                            return <div className="cartGoodsItem" key={item.id}>
                                <div className="isCheckItem">
                                    <span onClick={() => this.props.car.check(item)} className={item.checked ? 'radius check' : 'radius active_sh'}></span>
                                </div>
                                <div className="goodsImg">
                                    <img src={item.list_pic_url} alt="" />
                                </div>
                                <div className="cartGoodsMsg">
                                    <div>{item.goods_name}</div>
                                    <div></div>
                                    <div style={{ color: 'red' }}>￥{item.retail_price}</div>
                                </div>
                                <div className="cartGoodsNum">x{item.number}</div>
                            </div>
                        }) : shopping && shopping.map(item => {
                            return <div className="cartGoodsItem" key={item.id}>
                                <div className="isCheckItem">
                                    <span onClick={() => this.props.car.check(item)} className={item.checked ? 'radius check' : 'radius active_sh'}>√</span>
                                </div>
                                <div className="goodsImg">
                                    <img src={item.list_pic_url} alt="" />
                                </div>
                                <div className="cartGoodsMsg">
                                    <div>{item.goods_name}</div>
                                    <div></div>
                                    <div style={{ color: 'red' }}>￥{item.retail_price}</div>
                                </div>
                                <div className='shop_box'><div className="countOp"><div>-</div><div>{item.number}</div><div>+</div></div></div>
                            </div>
                        })
                    }
                </div>
                <div className="cartGoodsDo">
                    <div className="isCheckItem"> </div>
                    <div className="cartMsgAll">已选{money && money.checkedGoodsCount}￥{money && money.checkedGoodsAmount}</div>
                    <div className="cartAllDoButton">编辑</div>
                    <div className="cartAllDoButton pay">下单</div>
                </div>
                <Footer></Footer>
            </div>
        )


    }
}
export default shopcar