import React, { Component } from 'react'
import Header from '../../../components/header/header'
import './goods.scss'
import { inject, observer } from 'mobx-react'
@inject('classify')
@observer
class goods extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className='goods_wrap'>
                <Header></Header>

            </div>
        )
    }
}
export default goods