import React, { Component } from 'react'
import './home.scss'
import Swiper from 'swiper'
import { inject, observer } from 'mobx-react'
import Footer from '../../components/footer/footer'
@inject('home')
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.home.getallData()
        new Swiper(".banner", {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            autoplay: true
        });
    }
    render() {
        const { banner, brandList, channel, newGoodsList, hotGoodsList, topicList, categoryList } = this.props.home;
        return (
            <div className='home_wrap'>
                <div className="home_mains">
                    <div className="swiper-container banner">
                        <div className="swiper-wrapper">
                            {
                                banner && banner.map(item => {
                                    return <div key={item.id} className="swiper-slide">
                                        <img src={item.image_url} alt="" />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="nav" style={{ height: '4rem' }}>
                        {
                            channel && channel.map(item =>
                                <div key={item.id}><img src={item.icon_url} alt="" style={{ height: '.6rem', width: '.6rem',marginTop: '.2rem' }} /><span style={{ marginTop: '.1rem' }}>{item.name}</span></div>
                            )
                        }
                    </div>
                    <div className="adv">
                        <div className="title_b">
                            <h4>品牌制造商直供</h4>
                        </div>
                        <div className="bag_box">
                            {
                                brandList && brandList.map(item =>
                                    <div className="box" key={item.id}>
                                        <img src={item.list_pic_url} alt="" />
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
                                newGoodsList && newGoodsList.map(item =>
                                    <div className="sp_box" key={item.id}>
                                        <img src={item.list_pic_url} alt="" />
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
                                hotGoodsList && hotGoodsList.map(item =>
                                    <div className="hotcon" key={item.id}>
                                        <div><img src={item.list_pic_url} alt="" /></div>
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
                            <h4>人气推荐</h4>
                        </div>

                        <div className="swiper-container banner">
                            <div className="swiper-wrapper">
                                {
                                    topicList && topicList.map(item => {
                                        return <div key={item.id} className="swiper-slide">
                                            <img src={item.image_url} alt="" />
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="cateGory">
                        {
                            categoryList && categoryList.map(item =>
                                <div className="cateGoryBox" key={item.id}>
                                    <div className="title_cateGory">
                                        <h4>{item.name}</h4>
                                    </div>
                                    <div className="newGood_box">
                                        {
                                            item.goodsList.map(item =>
                                                <div className="sp_box" key={item.id}>
                                                    <img src={item.list_pic_url} alt="" />
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
                </div>
                <Footer />
            </div>

        )
    }
}
export default Home