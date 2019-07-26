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
                    <div>
                        {
                            brandList&&brandList.map(item=>{
                                
                            })
                        }
                    </div>
                </div>
                <div className="adv"></div>
            </React.Fragment>
        );
    }
}
export default homepage;