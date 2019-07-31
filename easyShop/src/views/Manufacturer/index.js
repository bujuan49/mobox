import React from 'react';
import {inject,observer} from "mobx-react"
import {Icon} from "antd"
import "./manuf.scss"
@inject("home")
@observer
class Manufacturer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        let detid=(this.props.location.pathname).slice(-7);
        this.props.home.getDetail({id:detid})
    }
    render() {
        const {detailData}=this.props.home;
        console.log()
        return (
            <React.Fragment>
                <div>
                    <div className="zzs_title">
                        <Icon type="left" onClick={()=>this.props.history.goBack(-1)}/><div>{detailData.name}</div>
                    </div>   
                    <div className="content">
                        <div>
                            <img src={detailData.list_pic_url} alt=""/>
                        </div>
                        <div className="textcon">
                            <p>
                                {
                                    detailData.simple_desc
                                }
                            </p>
                        </div>
                           
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Manufacturer;