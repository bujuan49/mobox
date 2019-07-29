import React, { Component } from 'react'
import './classify.scss'
import { inject, observer } from 'mobx-react'
import Footer from '../../components/footer/footer'
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
    itemChan = (item) => {   //切换右侧
        this.setState({ ind: item.show_index })
        this.props.classify.tab_list(item.id)
        localStorage.setItem('key', JSON.stringify(item.id));  //把存储的侧边栏id传过去
    }
    To = (item) => {        //点击进入详情
        console.log(item)
        this.props.history.push('/categorys/' + item.id)
    }
    changeTo = () => {   //跳转搜索页
        this.props.history.push('/search')
    }
    render() {
        const { categoryList, categoryList_detail } = this.props.classify
        return (
            <div className='wrap_classify_wrap'>
                <div className="classify_search">
                    <input onClick={() => this.changeTo()} type="text" placeholder='搜索商品，共239款好商品<' />
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
                                    return <dl key={item.id} onClick={() => { this.To(item) }}>
                                        <dt><img src={item.wap_banner_url} alt="" /></dt>
                                        <dd>{item.front_name}</dd>
                                    </dl>
                                })
                            }
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Classify