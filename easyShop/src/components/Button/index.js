import React from 'react';
import {inject, observer} from 'mobx-react';
import "./index.scss"
@inject('shop')
@observer
class Buttons extends React.Component{
    render(){
        return <>
            <div className="button_count">
                <span onClick={()=>this.props.shop.changeCount('-')}>-</span>
                <b>{this.props.shop.count}</b>
                <span onClick={()=>this.props.shop.changeCount('+')}>+</span>
            </div>
        </>
    }
}

export default Buttons