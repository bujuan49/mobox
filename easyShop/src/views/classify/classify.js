import React, { Component } from 'react'
import './classify.scss'
import { inject, observer } from 'mobx-react'
@inject('classify')
@observer
class Classify extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ind: 0
        }
    }
    componentDidMount() {
        this.props.classify.changeCount()
    }
    render() {
        return (
            <div className='wrap_classify_wrap'>
                <div className="classify_search">
                    <p>搜索商品，共239款好商品</p>
                </div>
                <div className='wrap_classify'>
                    <div className='left'>
                        <p className='on'>这是快</p>
                        {

                        }
                    </div>
                    <div className='right'>
                        <div className="log"></div>
                        <div className='fenlei'>—— 居家分类 ——</div>
                        <div className='main_dl'>
                            <dl>
                                <dt> </dt>
                                <dd>布艺</dd>
                            </dl>
                            <dl>
                                <dt> </dt>
                                <dd>布艺</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Classify