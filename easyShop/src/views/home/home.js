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
        this.props.home.home_All_date()
        console.log(this.props.home)
        new Swiper(".banner", {
            loop: true
        });
    }
    render() {
        return (
            <div className='home_wrap'>
                <div className="swiper-container banner">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="https://yanxuan.nosdn.127.net/0b6674a2710f2ffcc63ad16a1bc2c0c7.jpg?imageView&quality=75&thumbnail=750x0" alt="" />
                        </div>
                    </div>
                </div>
                <div className="home_title">
                    <div className="left_home">
                        <ul>
                            <li>推荐</li>
                            <li>居家生活</li>
                            <li>服饰鞋包</li>
                            <li>美食酒水</li>
                            <li>个护清洁</li>
                        </ul>
                    </div>
                    <div className="right_home">
                        <p>品牌制造供应商</p>
                        <div className='home_main'>
                            <div>
                                <img src="https://yanxuan.nosdn.127.net/0b6674a2710f2ffcc63ad16a1bc2c0c7.jpg?imageView&quality=75&thumbnail=750x0" alt="" />
                            </div>
                            <div>
                                <img src="https://yanxuan.nosdn.127.net/0b6674a2710f2ffcc63ad16a1bc2c0c7.jpg?imageView&quality=75&thumbnail=750x0" alt="" />
                            </div>
                            <div>
                                <img src="https://yanxuan.nosdn.127.net/0b6674a2710f2ffcc63ad16a1bc2c0c7.jpg?imageView&quality=75&thumbnail=750x0" alt="" />
                            </div>
                            <div>
                                <img src="https://yanxuan.nosdn.127.net/0b6674a2710f2ffcc63ad16a1bc2c0c7.jpg?imageView&quality=75&thumbnail=750x0" alt="" />
                            </div>
                            <div>
                                <img src="https://yanxuan.nosdn.127.net/0b6674a2710f2ffcc63ad16a1bc2c0c7.jpg?imageView&quality=75&thumbnail=750x0" alt="" />
                            </div>

                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}
export default Home