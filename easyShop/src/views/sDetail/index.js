import React from 'react';
import {inject, observer} from 'mobx-react';
import {Icon} from 'antd'
import "./sdetail.scss"
@inject('special')
@observer

class Sdetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goBack () {
      this.props.history.go(-1)
    }
    componentDidMount(){
     let {id}=this.props.match.params;
        this.props.special.getDetail({id:id})
    }
    render() {
        let {SpecialDetail}=this.props.special;
          console.log(SpecialDetail);
        return (
            <React.Fragment>
               <div className="specalbox">
                   <header>
                     <Icon type="arrow-left" />
                     {SpecialDetail.title}
                   </header>  
                   <section>
                  
                    
                      
                   </section>
               </div>
            </React.Fragment>
        );
    }
}
export default Sdetail;
