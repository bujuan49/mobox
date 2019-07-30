import React, { Component } from 'react'
import ReactIndex from '../router/index'

import './index.scss'
import { BrowserRouter } from 'react-router-dom'
export default class loding extends Component {
    render() {
        return (
            <div className='index_wrap'>
                <BrowserRouter>
                    <ReactIndex />
                </BrowserRouter>
            </div>
        )
    }

}
