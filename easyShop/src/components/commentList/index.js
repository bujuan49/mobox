
import React, { Component } from 'react'
import './commentList.scss'
export class CommentLists extends Component {
  render() {
    let {comments}=this.props;
    return (
      <div>
           <div className="commentList">
             {
               comments.map(item=><div className="commentItem" key={item.id}>
                          <div className="userInfo">
                            <div>匿名用户</div>
                            <div>{item.add_time}</div>
                          </div>
                          <div className="userComment">{item.content}</div>
                       
                        </div>)
             }
                        
          </div>
      </div>
    )
  }
}

export default CommentLists