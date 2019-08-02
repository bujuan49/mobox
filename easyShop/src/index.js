import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./index.scss"
// 引入mobx
import {Provider} from 'mobx-react';
import store from './store'
import "./uilts/font3/iconfont.css"
import "antd/dist/antd.css"
import 'antd-mobile/dist/antd-mobile.css';
// 引入fastClick，解决300ms延迟
var FastClick = require('fastclick');
FastClick.attach(document.body);
ReactDOM.render(<Provider {...store}>
        <App />
    </Provider>, document.getElementById('root'));