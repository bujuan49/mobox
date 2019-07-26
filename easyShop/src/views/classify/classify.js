import React, { Component } from 'react'
import './classify.scss'
import { inject, observer } from 'mobx-react'
@inject('classify')
@observer
class Classify extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ind: 1
        }
    }
    componentDidMount() {
        this.props.classify.changeCount()
    }
    render() {
        const { categoryList } = this.props.classify
        return (
            <div className='wrap_classify_wrap'>
                <div className="classify_search">
                    <p>搜索商品，共239款好商品</p>
                </div>
                <div className='wrap_classify'>
                    <div className='left'>
                        {
                            categoryList && categoryList.map(item => {
                                return <p className={this.state.ind === item.show_index ? 'on' : ''} key={item.id}>{item.name}</p>
                            })
                        }
                    </div>
                    <div className='right'>
                        <div className="log">
                            <img src="http://yanxuan.nosdn.127.net/92357337378cce650797444bc107b0f7.jpg" alt="" />
                        </div>
                        <div className='fenlei' style={{ color: 'skyblue' }}>— 居家分类 —</div>
                        <div className='main_dl'>
                            {
                                
                            }
                            {/* {
                                categoryList[this.state].subCategoryList && categoryList[this.state].subCategoryList.map(item => {

                                })
                            } */}
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