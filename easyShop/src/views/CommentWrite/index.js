import React, { Component } from 'react'
import {Icon,Button} from 'antd'
import './comment.scss'
export class  CommentWrite extends Component {
  state = {
    areaMaxLen: 80,
    content: '',
    loading: false
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
  render() {
    const { areaMaxLen, content} = this.state
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
            <Button  type="primary" >留言</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default  CommentWrite
