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
        const {banner,brandList}=this.props.home
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
                    <div><i className="icon iconfont icon-jiaju"></i><span>家居</span></div>
                    <div><i className="icon iconfont icon-jiaju"></i><span>家居</span></div>
                    <div><i className="icon iconfont icon-jiaju"></i><span>家居</span></div>
                    <div><i className="icon iconfont icon-jiaju"></i><span>家居</span></div>
                </div>
                <div className="adv">
                    <h4 className="title_b">品牌制造商直供</h4>
                    <div className="bag_box">
                        {
                            brandList&&brandList.map(item=>
                                <div className="box" key={item.id}>
                                    <img src={item.app_list_pic_url} alt=""/>
                                    <span>{item.name}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="adv">
                    <h4 className="title_b">家居</h4>
                    <div className="bag_box">
                        {
                            brandList&&brandList.map(item=>
                                <div className="box" key={item.id}>
                                    <img src={item.app_list_pic_url} alt=""/>
                                    <span>{item.name}</span>
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