import React from 'react';
import {inject, observer} from 'mobx-react';
import "./index.scss"
@inject('shop')
@observer
class Buttons extends React.Component{
    render(){
        const {id,number}=this.props
        return <>
            <div className="button_count">
                <span onClick={()=>this.props.shop.changeCount('-',id)}>-</span>
                <b>{number}</b>
                <span onClick={()=>this.props.shop.changeCount('+',id)}>+</span>
            </div>
        </>
    }

}

export default Buttons