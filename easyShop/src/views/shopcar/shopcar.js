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
            touch: false
        }
    }
    componentDidMount() {
        this.props.car.cartIndex()
    }
    check = (item) => {
        let number = item.checked === 1 ? 0 : 1;
        console.log(number)
        let obj = {
            isChecked: number,
            productIds: item.id
        }
        this.props.car.checked_Shopping(obj)

        // console.log(this.props.car.checked_che)
        // this.props.car.checked_che.id
        // const list = this.props.car.checked_che && this.props.car.checked_che.map(item => (item.checked = !item.checked))
        // console.log(list)
        // let all = list && list.every(item => item.checked)
        // this.setState({
        //     flag: !all
        // })
    }
    delData() {  //删除所选
        // let delId = this.props.car.edit_All.map((item) => item.product_id).join(',')
        // this.props.shoppingCart.del_All({productIds:delId})
        this.setState({ flag: false })
    }
    render() {
        const { shopping, money } = this.props.car

        return (
            <div className="car_wrap">
                {
                    console.log(shopping, '123123123')
                }
                <div className="car_header">
                    <li><span>★</span>30天无忧退货</li><li><span>★</span>48小时快速退款</li><li><span>★</span>满88元免邮费</li>
                </div>
                <div className='car_main'>
                    {
                        this.state.flag ? shopping && shopping.map(item => {
                            return <div className="cartGoodsItem" key={item.id}>
                                <div className="isCheckItem">
                                    <span onClick={() => this.check(item)} className={item.checked ? 'radius check' : 'radius '}></span>
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
                                    <span onClick={() => this.check(item)} className={item.checked ? 'radius check' : 'radius '}></span>
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

                    {
                        this.state.touch ? <span className="cartAllDoButton" onClick={() => this.setState({ touch: false })}>完成</span> :
                            <span className="cartAllDoButton" onClick={() => this.setState({ touch: true })}>编辑</span>
                    }
                    <div className="cartAllDoButton pay">
                        {this.state.touch ? <span onClick={this.delData.bind(this)}>删除所选</span> : <span>下单</span>}
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )


    }
}
export default shopcar