import React, { Component } from 'react'
import Header from '../../../components/header/header'
import './categorys.scss'
class categorys extends Component {
    render() {
        return (
            <div className='categorys_wrap'>
                <Header></Header>
                <ul className='categorys_slide'>
                    <li>布艺软装</li>
                    <li className='on'>软装</li>
                    <li>布艺软装</li>
                    <li>布艺软装</li>
                    <li>布艺软装</li>
                    <li>布艺软装</li>
                    <li>布艺软装</li>
                    <li>布艺软装</li>
                </ul>
                <div className='categorys_main'>
                    <div className='categorys_title'>
                        <p style={{ marginTop: '.4rem' }}>布艺软装</p>
                        <p>各种风格软装饰你的家</p>
                    </div>
                    <div className='categorys_box'>
                        <dl>
                            <dt>
                                图片
                            </dt>
                            <dd>
                                <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', textAlign: 'center', padding: '0 .3rem' }}>大知性系列居家地毯</span>
                                <span style={{ color: 'red', marginTop: '.1rem' }}>$599元</span>
                            </dd>
                        </dl>

                        <dl>
                            <dt>
                                图片
                            </dt>
                            <dd>
                                <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', textAlign: 'center', padding: '0 .3rem' }}>大知性系列居家地毯</span>
                                <span style={{ color: 'red', marginTop: '.1rem' }}>$599元</span>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        )
    }
}
export default categorys