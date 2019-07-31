import React, { Component } from 'react'
import { Icon } from 'antd'
import './collect.scss'
export class Collect extends Component {
    goBack() {
        this.props.history.go(-1)
    }
    render() {

        return (
            <div className='collector'>
                <div className="title">
                    <Icon type="left" onClick={() => this.goBack()} />
                    <h4>easyLikeGoods</h4>
                </div>
                <section>

                </section>
            </div>

        )
    }
}

export default Collect
