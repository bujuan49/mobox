import React from 'react';
import {Carousel} from "antd"
import {inject, observer} from 'mobx-react';
import "./homepage.scss"
@inject('home')
@observer
class homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        this.props.home.getallData()
    }
    render() {
        const {banner,brandList,channel,newGoodsList,hotGoodsList}=this.props.home
        return (
            <React.Fragment>
                <div className="banner">
                    <Carousel autoplay>
                        {
                            banner&&banner.map(item=>
                               <div key={item.id}>
                                <h3><img src={item.image_url} alt={item.content}/></h3>
                               </div> 
                            )
                        }
                        
                    </Carousel> 
                </div> 
                <div className="nav">
                    {
                        channel&&channel.map(item=>
                            <div key={item.id}><img src={item.icon_url} alt=""/><span>{item.name}</span></div>
                        )
                        
                    }
                </div>
                <div className="adv">
                    <div className="title_b">
                        <h4>品牌制造商直供</h4>
                    </div>
                    <div className="bag_box">
                        {
                             brandList&&brandList.map(item=>
                                <div className="box" key={item.id}>
                                    <img src={item.list_pic_url} alt=""/>
                                    <span>{item.name}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="newGood">
                    <div className="title_newGood">
                        <h4>新品首发</h4>
                    </div>
                    <div className="newGood_box">
                        {
                            newGoodsList&&newGoodsList.map(item=>
                                <div className="sp_box" key={item.id}>
                                    <img src={item.list_pic_url} alt=""/>
                                    <p>{item.name}</p>
                                    <h6>￥{item.retail_price}</h6>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="hotList">
                    <div className="title_hot">
                        <h4>人气推荐</h4>
                    </div>
                    <div className="hotbox">
                        {
                           hotGoodsList&&hotGoodsList.map(item=>
                            <div className="hotcon">
                                <div><img src={item.list_pic_url} alt=""/></div>
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>{item.goods_brief}</p>
                                    <span>{item.retail_price}</span>
                                </div>
                            </div> 
                           ) 
                        } 
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default homepage;