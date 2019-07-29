import React, { Component } from 'react'
import './goods.scss'
import { inject, observer } from 'mobx-react'
@inject('goods')
@observer
class footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag: false
        }
    }
    add = () => {
        this.setState({ flag: !this.state.flag })
        if (!this.state.flag) {
            this.props.shopping.is_host = 1;
            this.props.goods.addordelete({     //点击添加到购物车
                typeId: this.props.shopping.is_host,
                valueId: this.props.shopping.id
            })
        }
    }
    render() {
        return (
            <div className='goods_foot'>
                <div className={this.state.flag ? 'iconfont icon-xingxing action' : 'iconfont icon-xingxing  '} onClick={() => this.add()} style={{ fontSize: '.6rem' }}></div>
                <div className='iconfont icon-jieshaoxinxi_o' style={{ fontSize: '.6rem' }}></div>
                <div >加入购物车</div>
                <div>立即购买</div>
            </div>
        )
    }
}
export default footer