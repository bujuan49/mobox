import React from 'react';
import {inject, observer} from 'mobx-react';
import "./specal.scss"
@inject('home')
@observer

class Specal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        this.props.home.getallData()
    }
    render() {
        const {topicList}=this.props.home;
        console.log(topicList);
        return (
            <React.Fragment>
               <div className="specalbox">
                   {
                       topicList&&topicList.map(item=>
                        <div className="avatar" key={item.id}>
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
export default Specal;
