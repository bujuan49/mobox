import React, { Component } from 'react'
import './classify.scss'
import { inject, observer } from 'mobx-react'
@inject('classify')
@observer
class Classify extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ind: 1,
            detail: null
        }
    }
    componentDidMount() {
        this.props.classify.changeCount()
    }
    itemChan = (item) => {
        this.setState({ ind: item.show_index })
        console.log(item.id)
    }
    render() {
        const { categoryList, categoryList_detail } = this.props.classify
        return (
            <div className='wrap_classify_wrap'>
                <div className="classify_search">
                    <p>搜索商品，共239款好商品</p>
                </div>
                <div className='wrap_classify'>
                    <div className='left'>
                        {
                            categoryList && categoryList.map((item, ind) => {
                                return <p className={this.state.ind === item.show_index ? 'on' : ''} key={item.id} onClick={() => this.itemChan(item)}>{item.name}</p>
                            })
                        }
                    </div>
                    <div className='right'>
                        <div className="log">
                            <img src={categoryList_detail && categoryList_detail.img_url} alt="" />
                        </div>
                        <div className='fenlei' style={{ color: 'skyblue' }}>— {categoryList_detail && categoryList_detail.front_desc} —</div>
                        <div className='main_dl'>
                            {
                                categoryList_detail && categoryList_detail.subCategoryList.map(item => {
                                    return <dl key={item.id}>
                                        <dt><img src={item.wap_banner_url} alt="" /></dt>
                                        <dd>{item.front_name}</dd>
                                    </dl>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Classify