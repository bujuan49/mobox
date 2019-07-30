import React from 'react';
import {inject,observer} from "mobx-react"
import "./login.scss"
import {Form,Input,Icon,Checkbox,Button} from "antd"
@inject("login")
@observer

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (values.user!== ""&&values.password!=="") {
            console.log('Received values of form:', values);
            this.props.login.submitFrom({
                mobile:values.user,
                password:values.password
            })
            if(this.props.login.code===0){
                this.props.history.push("/home/hompage")
            }else if(this.props.login.code===1000){
                this.props.history.push("/login")
            }
          }
        });
      };
      componentDidMount(){
          
      }
    render() {
        //console.log(this.props.login.submitFrom)
        const { getFieldDecorator } = this.props.form;
        return (
            <React.Fragment>
                <div className="wrap">
                    <dir className="formbox">
                        <Form onSubmit={(e)=>this.handleSubmit(e)}>
                            <Form.Item>
                            {getFieldDecorator('user', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </Button>
                            </Form.Item>
                        </Form>
                    </dir>
                </div>
            </React.Fragment>
        );
    }
}
export default Form.create()(Login);