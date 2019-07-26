import React from 'react';
import {inject, observer} from 'mobx-react';

@inject('home')
@observer
class Home extends React.Component{
    render(){
        console.log('props...', this.props, this.props.home.changeCount);
        return <div>
            <button onClick={()=>this.props.home.changeCount('+')}>+</button>
            <span>{this.props.home.count}</span>
            <button onClick={()=>this.props.home.changeCount('-')}>-</button>
        </div>
    }
}

export default Home;