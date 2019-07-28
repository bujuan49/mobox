import React from 'react';
import {inject, observer} from 'mobx-react';
import {Icon} from 'antd'
import "./sdetail.scss"
import CommentList from '../../components/CommentList'
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
          console.log(SpecialDetail.content);
 
        return (
            <React.Fragment>
               <div className="specalbox">
                   <header>
                     <Icon type="left"  onClick={()=>this.goBack()}/>
                     <span> {SpecialDetail.title}</span> 
                   </header>
                   <div dangerouslySetInnerHTML = {{ __html:SpecialDetail.content }} className='imgs'></div>
                   <section>
                   <div className="commentWrap">
                        <div className="titleLine">
                          <div className="titleName">精选留言</div>
                          <Icon type="form" />
                        </div>
                        
                        <CommentList/>
                    
                            <div className="noComment">
                              <div className="noCommentIcon">
                                <img  alt=""/>
                                <div>等你来留言</div>
                              </div>
                            </div>
                        
                        </div>

          
                    
                      
                   </section>
               </div>
            </React.Fragment>
        );
    }
}
export default Sdetail;
