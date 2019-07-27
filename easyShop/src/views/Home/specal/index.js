import React from 'react';
import {inject, observer} from 'mobx-react';
import "./specal.scss"
@inject('special')
@observer

class Specal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
   
    componentDidMount(){
        this.props.special.getSpeacil({page:1,size:20})
    }
    sdetail(id){
       this.props.history.push(`/Sdetail/${id}`);
       
    }
    render() {
        const {SpecialList}=this.props.special;
        return (
            <React.Fragment>
               <div className="specalbox">
                   {
                       SpecialList&&SpecialList.map(item=>
                         <div className='special' key={item.id} onClick={()=>this.sdetail(item.id)}>
                             <img src={item.scene_pic_url} alt=''/>
                             <h4>{item.title}</h4>
                             <span>{item.subtitle}</span>
                             <em>{item.price_info}元起</em>
                         </div>
                       )
                   }
               </div>
            </React.Fragment>
        );
    }
}
export default Specal;
