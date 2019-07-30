import React from 'react';
import {inject, observer} from 'mobx-react';
import {Icon} from 'antd'
import "./sdetail.scss"
import CommentLists from '../../components/CommentList'
@inject('special')
@observer
//专题详情
class Sdetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goBack () {
      this.props.history.go(-1)
    }
    sdetail(id){
      this.props.history.push(`/Sdetail/${id}`);
      
   }
    componentDidMount(){
     let {id}=this.props.match.params;
        this.props.special.getDetail({id:id})
        this.props.special.getSpeacil({page:1,size:4})
        this.props.special.getComment({valueId:id,typeId:1})
    }
    render() {
    
        let {SpecialDetail,SpecialList,CommentList}=this.props.special;
   
     //  console.log(this.props.special.CommentList)
 //console.log(CommentList)
        return (
            <React.Fragment>
               <div className="specalbox">
                   <header>
                     <Icon type="left"  onClick={()=>this.goBack()}/>
                     <span> {SpecialDetail.title}</span> 
                   </header>
                
                   <section>  
                        <div dangerouslySetInnerHTML = {{ __html:SpecialDetail.content }} className='imgs'></div>
                      <div className="commentWrap">
                          <div className="titleLine">
                            <div className="titleName">精选留言</div>
                            <div className="titleIcon" >
                              <Icon type="form" />
                            </div>
                          </div>
                          
                              <CommentLists comments={CommentList}></CommentLists>
                          
                              <div className="noComment">
                                <div className="noCommentIcon">
                                  <img  alt=""/>
                                  <div>等你来留言</div>
                                </div>
                              </div>

                        </div>
                        <div className="specalboxs">
                      {
                          SpecialList&&SpecialList.map(item=>
                            <div className='special' key={item.id} onClick={()=>this.sdetail(item.id)}>
                                <img src={item.scene_pic_url} alt=''/>
                                <h4>{item.title}</h4>
                              
                            </div>
                          )
                      }
                  </div>
                   </section>
               </div>
            </React.Fragment>
        );
    }
}
export default Sdetail;
