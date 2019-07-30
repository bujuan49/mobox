import React, { Component } from 'react'
import './login.scss'
import { inject, observer } from 'mobx-react'
@inject('login')
@observer
class Login extends Component {
    state = {
        phoneValue: "",
        passVlue: ""
    }
    render() {
        return (
            <div className="wrap-login">
                <div className="head">
                    <img src="https://yanxuan.nosdn.127.net/15361406976541303.png" alt="" className="logo" />
                </div>
                <div className="input">
                    <input type="text" placeholder="请输入手机号" onChange={(e) => this.changePhone(e)} value={this.state.phoneValue} />
                    <input type="password" placeholder="请输入密码" onChange={(e) => this.changePass(e)} value={this.state.passVlue} />
                </div>
                <div className="foot">
                    <button className="button" onClick={this.submit}>登录</button>
                </div>
            </div>
        )
    }
    changePhone = (e) => {
        this.setState({
            phoneValue: e.target.value
        })
    }
    changePass = (e) => {
        this.setState({
            passVlue: e.target.value
        })
    }
    submit = () => {
        let { phoneValue, passVlue } = this.state
        let yan = /^1[3456789]\d{9}$/
        if (yan.test(phoneValue.trim()) && passVlue.trim() !== "") {
            // this.props.history.push('/home')
            this.props.login.login({
                mobile: this.state.phoneValue,
                password: this.state.passVlue
            })

        } else {
            alert("")
        }
    }
}
export default Login