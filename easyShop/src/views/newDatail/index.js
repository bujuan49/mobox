import React from 'react';
import {inject,observer} from "mobx-react"
import style from "./index.module.scss"
import {Carousel,Icon} from "antd"
@inject("home")
@observer
 class newDatail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        let detid=(this.props.location.pathname).slice(-7);
        this.props.home.newDatail({id:detid})
    }
    render() {
        const {newdatail}=this.props.home;
        console.log(newdatail)
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
                              <span>⭐</span>
                              30天无忧退货
                          </li>
                          <li>
                              <span>⭐</span>
                              48小时快速退款
                          </li>
                          <li>
                              <span>⭐</span>
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
                      <div className={style.topicDetailImg}
                       dangerouslySetInnerHTML={{__html:newdatail&&newdatail.info.goods_desc}}
                       >
                      </div>
                    </div>
                    <div className={style.footer}>
                        <div className={style.isLike}>☆</div>
                        <div className={style.cartNum}><i className="iconfont icon-Add-Cart"><span>9</span></i></div>
                        <div className={style.addCart}>加入购物车</div><div className={style.payGoods}>立即购买</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default newDatail;
