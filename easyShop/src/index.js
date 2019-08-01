import React from 'react';
import ReactDOM from 'react-dom';
// 引入mobx
import { Provider } from 'mobx-react';
import store from './store'
import Home from './views/index' //引入主页面
import './static/scss/common.scss'//引入scss
import './static/font/iconfont.css'
import './static/font1/iconfont.css'
import 'antd-mobile/dist/antd-mobile.css';
//全局引入loading
// import 'swiper/dist/css/swiper.min.css'
ReactDOM.render(<Provider {...store} >
     <Home />

</Provider>, document.getElementById('root'));