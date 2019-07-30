import React from 'react';
import {inject, observer} from 'mobx-react';
import {Icon} from 'antd'
import "./sdetail.scss"
import CommentLists from '../../components/CommentList'
import {Link} from 'react-router-dom'

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
    goSpecial(id){
      //刷新页面
     window.location.reload();
     this.props.history.push(`/Sdetail/${id}`);
   }
 
   postWrite () {
    const {history:{push},match:{params:{id}}} = this.props
     push(`/CommentWrite/${id}`)
  }
    componentDidMount(){
     let {id}=this.props.match.params;
        this.props.special.getDetail({id:id})
        this.props.special.getSpeacil({page:1,size:4})
        this.props.special.getComment({valueId:id,typeId:1,size:5})
    }
    render() {
      let {id}=this.props.match.params;
      let {SpecialDetail,SpecialList,CommentList}=this.props.special;
      //  console.log(CommentList)  评论的总数据
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
                              <Icon type="form"  onClick={this.postWrite.bind(this)}/>
                            </div>
                          </div>
                              <CommentLists comments={CommentList}></CommentLists>
                              {
                               CommentList.length>=5?
                                <Link to={`/comment/${id}?typeId=1`} className="moreComment">
                                  查看更多评论
                                </Link> :null
                              }
                        </div> 
                        <div className='specalt'>
                            推荐专题
                          </div>
                        <div className="specalboxs">
                            {
                                SpecialList&&SpecialList.map(item=>
                                  <div className='special' key={item.id} onClick={()=>this.goSpecial(item.id)} >
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
