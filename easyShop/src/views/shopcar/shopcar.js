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

        }
    }
    render() {
        return (
            <div className="car_wrap">
                <div className="car_header">
                    <li><span>★</span>30天无忧退货</li><li><span>★</span>48小时快速退款</li><li><span>★</span>满88元免邮费</li>
                </div>
                <div className='car_main'>

                    <div className="cartGoodsItem">
                        <div className="isCheckItem">
                            <p className='radius'></p>
                        </div>
                        <div className="goodsImg"></div>
                        <div className="cartGoodsMsg">
                            <div>简约知性记忆棉坐垫</div>
                            <div></div>
                            <div style={{ color: 'red' }}>￥46</div>
                        </div>
                        <div className="cartGoodsNum">x4</div>
                    </div>

                    <div className="cartGoodsItem">
                        <div className="isCheckItem">
                        <p className='radius'></p>
                        </div>
                        <div className="goodsImg"></div>
                        <div className="cartGoodsMsg">
                            <div>简约知性记忆棉坐垫</div>
                            <div></div>
                            <div style={{ color: 'red' }}>￥46</div>
                        </div>
                        <div className="cartGoodsNum">x4</div>
                    </div>

                    <div className="cartGoodsItem">
                        <div className="isCheckItem">
                        <p className='radius'></p>
                        </div>
                        <div className="goodsImg"></div>
                        <div className="cartGoodsMsg">
                            <div>简约知性记忆棉坐垫</div>
                            <div></div>
                            <div style={{ color: 'red' }}>￥46</div>
                        </div>
                        <div className="cartGoodsNum">x4</div>
                    </div>

                    
                </div>
                <div className="cartGoodsDo">
                    <div className="isCheckItem"> </div>
                    <div className="cartMsgAll">已选(0)  ￥0</div>
                    <div className="cartAllDoButton">编辑</div>
                    <div className="cartAllDoButton pay">下单</div>
                </div>
                <Footer></Footer>
            </div>
        )


    }
}
export default shopcar