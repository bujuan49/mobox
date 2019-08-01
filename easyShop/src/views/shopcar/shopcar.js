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
            flag: true,

        }
    }
    componentDidMount() {
        this.props.car.cartIndex()
    }
    delData() {  //删除所选
        let del = this.props.car.del_All.map(item => item.goods_id).join(',')
        console.log(del)
        this.props.car.deletes({
            productIds: del
        })
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
                        !this.state.falg ? shopping && shopping.map((item, index) => {
                            return <div className="cartGoodsItem" key={item.id}>
                                <div className="isCheckItem">
                                    <span onClick={() => this.props.car.select(index)} className={item.checked ? 'radius check' : 'radius '}></span>
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
                        }) : shopping && shopping.map((item, index) => {
                            return <div className="cartGoodsItem" key={item.id}>
                                <div className="isCheckItem">
                                    <span onClick={() => this.props.car.select(index)} className={item.checked ? 'radius check' : 'radius '}></span>
                                </div>
                                <div className="goodsImg">
                                    <img src={item.list_pic_url} alt="" />
                                </div>
                                <div className="cartGoodsMsg">
                                    <div>{item.goods_name}</div>
                                    <div></div>
                                    <div style={{ color: 'red' }}>￥{item.retail_price}</div>
                                </div>
                                <div className='shop_box'><div className="countOp"><div >-</div><div>{item.number}</div><div >+</div></div></div>
                            </div>
                        })
                    }
                </div>
                <div className="cartGoodsDo">
                    <div className='isCheckItem'> <div onClick={() => this.props.car.quan()} className={this.props.car.All ? 'radius check' : 'radius'}></div>  </div>
                    <div className="cartMsgAll" >已选{money && money.checkedGoodsCount}￥{money && money.checkedGoodsAmount}</div>
                    {
                        this.state.falg ? <span className="cartAllDoButton" onClick={() => this.setState({ falg: false })}>完成</span> :
                            <span className="cartAllDoButton" onClick={() => this.setState({ falg: true })}>编辑</span>
                    }
                    <div className="cartAllDoButton pay">
                        {this.state.falg ? <span onClick={this.delData.bind(this)}>删除所选</span> : <span>下单</span>}
                    </div>
                </div>
                <Footer></Footer>
            </div >
        )


    }
}
export default shopcar


