import React from 'react';
import style from "./index.module.scss"
import {observer,inject} from "mobx-react"
import Buttons from "../../../components/Button"
@inject("shop")
@observer
class shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        this.props.shop.getallShop()
    }
    change(){
        this.props.shop.flag=!this.props.shop.flag
        //this.props.shop.allShop
    }
    render() {
        const {allShop,flag} =this.props.shop;
        return (
            <React.Fragment>
                <div className={style.shopwrap}>
                    <ul className={style.serviceList}>
                        <li>
                            <span role="img">★</span>
                            30天无忧退货
                        </li>
                        <li>
                            <span role="img">★</span>
                            48小时快速退款
                        </li>
                        <li>
                            <span role="img">★</span>
                            满88元免邮费
                        </li>
                    </ul>
                    <div className={style.shop_content}>
                        {
                            allShop.cartList&&allShop.cartList.map(item=>
                                <div className={style.shop_box} key={item.goods_id}>
                                    <div><img src={ 
                                       item.checked==0  ?
                                       "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"
                                       :"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
                                    } alt=""/></div>
                                    <div><img src={item.list_pic_url} alt=""/></div>
                                    {
                                        flag&&flag?( <div className="changeCount">
                                        <div>
                                            <p>已选择:</p>
                                            <p>数量</p>
                                        </div>
                                        <div><Buttons/></div>
                                    </div>):(<div>
                                        <div>
                                            <h4>{item.goods_name}</h4>
                                            <p className={style.price}>￥{item.retail_price}</p>
                                        </div>
                                        <div className={style.number}>{item.number}X</div>
                                    </div>)
                                    }
                                </div>
                            )
                        }
                    </div>
                    <div className={style.shop_price}>
                        <div className={style.allCheckout}><img src={
                            allShop.cartTotal&&allShop.cartTotal.checkedGoodsCount==1 || flag&&flag ?
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzAV+Z0EAAAAVdFJOUwAJ+KUEFTPay2bzRXdZ7RkhmJ6qJOWhY+QAAAEDSURBVDjLnZTplsIgDIUNWwK2tdt9/1cdxHGmVcAc+dH25Hw0+71cvjhztDIZM4mNc4txo+BwZKxSVwbSFoMn8iFuCeDrG0RLNkc6GGK+ttCZ8gIzuJcgBgPxJ4rB4T2OkM0HjgRyq8V7Y8i/3/V06YVb/nKECa0qBYPffB1jaFd8AD8+RrBrY8R41FkQew2MkPtrR6IeRglzoW1/HrbizfZ9Pv8jCH0slOAm+D7mMeUn4PoYwegxpVNlCsqCKMurbJay9R8GyT0HSTmWeciTYsh7K+MPK1MW0H9eQOU652sqcch+15rUrFQXLpuFy7ksXLYuXDUZbBZ9v4sqiqju34jyD97JD4dkfgo1AAAAAElFTkSuQmCC"
                            :"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAQlBMVEUAAACrKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyurKyvw19exOzv////z4uK1Q0Pt0dGxOjp+CNkCAAAADnRSTlMARVn7B9cVoc/jIWtnJIM++AMAAADUSURBVDjLndRLEoMgEEVRPyCg+FAh+99qYqmAabFL7/hMaKCrN/VWyRZopbJ9ETUaWbq5RLXBX6YmSChcpMRZdRKX6e6kDAqZzAmNYlpEpnCTimfEbfWmhLlnZp8qmLY5a47pVY0oNIWArfV+h5Jy88FsNg2q3JTNRLIK8sd4hTZnwfmzSuVsmRdPFGV+d1S18QjJUQUZB5IcVVBxvMlRBRsvKzmq0JOr9y58yNU/eEj8s3zyyPkvcyQk9wH57/xwOfCrhl9cNMGswdQ4HEt1GKsXfQHGSThPkNi75AAAAABJRU5ErkJggg=="
                        } alt=""/></div>
                        <div className={style.cartCount}>
                           <p>已选(<b>{flag&&flag?0:allShop.cartTotal&&allShop.cartTotal.goodsCount}</b>)</p><span>￥{allShop.cartTotal&&allShop.cartTotal.checkedGoodsAmount}</span>
                        </div>
                        <div onClick={()=>this.changeStyle()}>{flag&&flag?'完成':'编辑'}</div>
                        <div className={style.cartAllBtn}>{flag&&flag?'删除所有':'下单'}</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default shop;