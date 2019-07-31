import React from 'react';
import { inject, observer } from 'mobx-react';
import { Icon } from 'antd'
import './comment.scss'
import CommentLists from '../../components/CommentList'
@inject('special')
@observer

//专题详情
class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    goBack() {
        this.props.history.go(-1)
    }

    componentDidMount() {
        let { id } = this.props.match.params;
        this.props.special.getComment({ valueId: id, typeId: 1, size: 20 })
    }
    
    render() {
        let { CommentList } = this.props.special;
        return (
            <React.Fragment>
                <div className="commentBox">
                    <header>
                        <Icon type="left" onClick={() => this.goBack()} />
                        <span>查看更多评论</span>
                    </header>
                    <section>
                        <CommentLists comments={CommentList}></CommentLists>
                    </section>
                </div>
            </React.Fragment>
        );
    }
}
export default Comment;
