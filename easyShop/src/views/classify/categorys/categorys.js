import React, { Component } from 'react'
import Header from '../../../components/header/header'
import './categorys.scss'
import { inject, observer } from 'mobx-react'
@inject('classify')
@observer
class categorys extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ind: 0
        }
    }
    componentDidMount() {
        this.props.classify.category(JSON.parse(localStorage.getItem('key')))
        // this.props.history.location.pathname.slice(11)
    }
    render() {
        const { category_C_date, category_detail } = this.props.classify
        return (
            <div className='categorys_wrap'>
                <Header></Header>
                <ul className='categorys_slide'>
                    {
                        category_detail && category_detail.map((item, index) => {
                            return <li key={item.id} className={this.state.ind === index ? 'ons' : ''}>{item.name}</li>

                        })
                    }

                </ul>
                <div className='categorys_main'>
                    <div className='categorys_title'>
                        <p style={{ marginTop: '.4rem' }}>布艺软装</p>
                        <p className='title_p' style={{ marginTop: '.2rem', padding: '0 0 .2rem 0' }}>各种风格软装饰你的家</p>
                    </div>
                    <div className='categorys_box'>
                        {
                            category_C_date && category_C_date.map(item => {
                                return <dl key={item.id}>
                                    <dt>
                                        <img src={item.list_pic_url} alt="" />
                                    </dt>
                                    <dd>
                                        <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', textAlign: 'center', padding: '0 .2rem' }}>{item.name}</span>
                                        <span style={{ color: 'red', marginTop: '.1rem' }}>${item.retail_price}元</span>
                                    </dd>
                                </dl>
                            })

                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default categorys