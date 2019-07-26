import React from 'react';
import {inject, observer} from 'mobx-react';
import "./specal.scss"
@inject('home')
@observer

class specal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {topicList}=this.props.home
        return (
            <React.Fragment>
               <div className="specalbox">
                   {
                       topicList&&topicList.map(item=>
                        <div className="avatar">
                            <img src={item.avatar} alt=""/>
                            <div>
                                <h4>{item.title}</h4>
                                <h6>{item.subtitle}</h6>
                            </div>
                        </div>
                       )
                   }
               </div>
            </React.Fragment>
        );
    }
}
export default specal;
