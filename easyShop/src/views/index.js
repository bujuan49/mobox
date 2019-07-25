import React, { Component } from 'react'
import ReactIndex from '../router/index'
import Footer from '../components/footer/footer'
import './index.scss'
export default class loding extends Component {
    render() {
        return (
            <div>
                    <ReactIndex />
                    <Footer></Footer>
            </div>
        )
    }
}
