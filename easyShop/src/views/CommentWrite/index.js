import React, { Component } from 'react'
import {Icon,Button} from 'antd'
import {inject, observer} from 'mobx-react';
import './comment.scss'
@inject('special')
@observer
 class  CommentWrite extends Component {
  state = {
    areaMaxLen: 80,
    content: '',
    loading: false
  }
  componentDidMount(){
   let {id}=this.props.match.params;
  this.props.special.writeComment({content:this.state.content,typeid:1,valueid:id})
  }
  goBack () {
    this.props.history.go(-1)
  }
  resetArea () {
    this.setState({
      content:' '
    })
  }
  getTextValue(e){
    this.setState({
      content:  e.currentTarget.value
    })
  }
  message(){
  alert('添加成功')
  this.props.history.go(-1)
 
}
  render() {
    const { areaMaxLen, content} = this.state;
// const {Comments}=this.props.special;
// if(Comments.errno===401){
//   this.props.history.push(`/login`)
// }else{
//   this.props.history.go(-1)
// }
//  //   console.log(comments)
//     console.log(this.props.special);
    return (
      <div>
         <header>
          <Icon type="left" onClick={()=>this.goBack()}/>
          <span>填写留言</span>
         </header>
         <div className="textAreaContent">
          <textarea className="inputArea" 
          onChange={this.getTextValue.bind(this)}  
          maxLength={areaMaxLen} autoFocus/>
          <span style={{color:content.length===areaMaxLen?'red':''}}>{content.length}/{areaMaxLen}</span>
        </div>
        <div className="buttons">
          <div>
            {content.length?<Button  onClick={this.resetArea.bind(this)}>清空</Button>:null}
          </div>
          <div>
            <Button  type="primary" onClick={(Comments)=>this.message(Comments)}>留言</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default  CommentWrite
