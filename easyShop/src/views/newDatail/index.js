import React from 'react';
import {inject,observer} from "mobx-react"
import style from "./index.module.scss"
import {Carousel,Icon, Drawer} from "antd"
import Buttons from "../../components/Button"
@inject("home","shop")
@observer
 class newDatail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false, placement: 'bottom'
        };
    }

    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    componentDidMount(){
        let detid=(this.props.location.pathname).slice(-7);
        console.log(detid)
        this.props.home.newDatail({id:detid})
        this.props.shop.getShopcont()
    }
    addCart(price,id){
        console.log(this.props.shop.count,price,id)
        this.props.shop.getAdd({//商品Id,数量,产品价格Id
            goodsId:id,
            number:this.props.shop.count&&this.props.shop.count,
            productId:price
        })
    }
    render() {
        const {sum,count}= this.props.shop;
        const {newdatail}=this.props.home; 
        return (
            <React.Fragment>
                <div className={style.wrap}>
                    <div className={style.header}><Icon type="left" onClick={()=>this.props.history.go(-1)}/><span>{newdatail&&newdatail.info.name} </span></div>
                    <div className={style.content}>
                      <Carousel className={style.banner}>
                          {
                            newdatail&&newdatail.gallery.map(item=>
                                <div key={item.id}><img src={item.img_url} alt=""/></div>
                            )
                          }
                      </Carousel>
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
                      <div className={style.goodsMsgWrap}>
                          <div className={style.goodsNameTitle}>{newdatail&&newdatail.info.name}</div>
                          <div className={style.goodsNameSubTitle}>{newdatail&&newdatail.info.goods_brief}</div>
                          <div className={style.goodsPriceTitle}>{newdatail&&newdatail.info.retail_price}</div>
                      </div>
                      <div className={style.goodsSize}>
                          <div></div><div>x 0</div><div>选择规格<i className="iconfont icon-right"></i></div>
                      </div>
                      <div className={style.goodsAttribute}>
                        <div className={style.goodtitle}>--商品参数--</div>
                          {
                            newdatail&&newdatail.attribute.map((item,i)=>
                                <div className={style.goodsAttr} key={i}>
                                    <span>{item.name}</span><p>{item.value}</p>
                                </div>
                            )
                          }
                      </div>
                      <div className={style.topicDetailImg}
                       dangerouslySetInnerHTML={{__html:newdatail&&newdatail.info.goods_desc}}
                       >
                      </div>
                      <div className={style.goodsAttribute}>
                          <div className={style.goodtitle}>--常见问题--</div>
                          {
                            newdatail&&newdatail.issue.map(item=>
                                <div key={item.id}>
                                    <div>
                                        <h4><span style={{color:"red"}}>√</span>{item.question}</h4>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                                
                            )
                          }
                      </div>
                       
                    </div>
                    <div className={style.footer}>
                        <span className={style.isLike} role="img">☆</span>
                        <div className={style.cartNum}><Icon type="shopping-cart"style={{fontSize:"0.8rem"}} onClick={()=>this.props.history.push({pathname:"/home/shop"})}/><span>{sum&&sum}</span></div>
                        <div className={style.addCart} onClick={this.showDrawer}>加入购物车</div><div className={style.payGoods}>立即购买</div>
                    </div>
                   <Drawer
                        placement={this.state.placement}
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        >
                        <div className={style.sp_box}>
                            <div><img src={newdatail&&newdatail.info.primary_pic_url} alt=""/></div>
                            <div>
                                <p>单价:<span>￥{newdatail&&newdatail.info.retail_price}</span></p>
                                <p>库存: <span>{newdatail&&newdatail.info.goods_number}件</span></p>
                                已选择：
                            </div>
                            <div className={style.off} onClick={this.onClose}>X</div>
                        </div>
                        <div className={style.shop_contadd}>
                            <div>
                                <span>数量 : </span>
                                <div className={style.button_count}>
                                    <span onClick={()=>this.props.shop.changeCount('-')}>-</span>
                                    <b>{this.props.shop.count}</b>
                                    <span onClick={()=>this.props.shop.changeCount('+')}>+</span>
                                </div>
                            </div>
                        </div>
                        <div className={style.add_shop}>
                        <div className={style.addCart} onClick={()=>this.addCart(newdatail&&newdatail.productList[0].id,newdatail&&newdatail.productList[0].goods_id)}>加入购物车</div>
                        <div className={style.payGoods}>立即购买</div>
                        </div>
                    </Drawer>
                </div>
            </React.Fragment>
        );
    }
}
export default newDatail;
//<span>-</span><b>0</b><span>+</span>