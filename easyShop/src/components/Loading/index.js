import React from 'react';
import {observer,inject} from "mobx-react"
@inject("loading")
@observer
class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        if(!this.props.loading.isLoading){
            return null;
        }
        return (
            <React.Fragment>
                <div style={{width:'100%',height:'100%',background:"#fff",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <img src="http://www.sucaijishi.com/uploadfile/2013/0527/20130527034916434.gif" alt=""/>
                </div>
            </React.Fragment>
        );
    }
}
//
export default Loading;