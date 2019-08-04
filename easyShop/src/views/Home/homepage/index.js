import React from 'react';
import {Carousel} from "antd"
import {inject, observer} from 'mobx-react';
import "./homepage.scss"
import LazyImage from "../../../components/lazy-image"
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
        const {banner,brandList,channel,newGoodsList,hotGoodsList,topicList,categoryList}=this.props.home;
        return (
            <React.Fragment>
                <div className="banner">
                    <Carousel autoplay>
                        {
                            banner&&banner.map(item=>
                               <div key={item.id}>
                                    <h3>
                                        <img src={item.image_url} alt={item.content}/>
                                    </h3>
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
                                <div className="box" key={item.id} onClick={()=>this.props.history.push({pathname:'/manufacturer/'+item.id})}>
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
                                <div className="sp_box" key={item.id} onClick={()=>this.props.history.push({pathname:"/newDatail/"+item.id})}>
                                    <img src={item.list_pic_url} alt=""/>
                                    {/* <LazyImage
                                        sizes="200px"
                                        srcset="https://placehold.it/200x300?text=Image2 200w, https://placehold.it/400x600?text=Image2 400w"
                                        src={item.list_pic_url}
                                        alt="200x300"
                                        // width="200"
                                        // height="300"
                                    /> */}
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
                            <div className="hotcon" key={item.id} onClick={()=>this.props.history.push({pathname:"/newDatail/"+item.id})}>
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
                <div className="scrollbox">
                    <div className="title_hot">
                        <h4>专题精选</h4>
                    </div>
                    <Carousel dots={false}>
                        {
                            topicList&&topicList.map(item=>
                                <div className='swiper-slide' key={item.id} onClick={()=>this.props.history.push({pathname:"/sdetail/"+item.id})}>
                                    <img src={item.item_pic_url} alt=""/>
                                    <div>
                                        {item.title}
                                        <span>{item.price_info}元起</span>
                                    </div>
                                    <div className="titleText">{item.subtitle}</div>
                                </div>
                            ) 
                        }
                    </Carousel>
                </div>
                <div className="cateGory">
                    {
                        categoryList&&categoryList.map(item=>
                            <div className="cateGoryBox" key={item.id}>
                                <div className="title_cateGory">
                                    <h4>{item.name}</h4>
                                </div>
                                <div className="newGood_box">
                                    {
                                        item.goodsList.map(item=>
                                            <div className="sp_box" key={item.id} onClick={()=>this.props.history.push({pathname:"/newDatail/"+item.id})}>
                                                <img src={item.list_pic_url} alt=""/>
                                                <p>{item.name}</p>
                                                <h6>￥{item.retail_price}</h6>
                                            </div> 
                                        )
                                    } 
                                    <div className="sp_box">
                                        <p>更多好物</p>
                                    </div>
                                </div>
                            </div>   
                        )
                    }
                </div>
               
            </React.Fragment>
        );
    }
}

export default homepage;