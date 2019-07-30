import React, { Component } from 'react'
import { Form, Input,Checkbox } from 'antd';
import './add.scss'
class Addaddress extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    render() {
        const { getFieldDecorator } = this.props.form;
       return  <div className='add'>
                <header>
                    <h5>新增地址</h5>
                </header>
                <section>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '姓名不能为空' }],
                    })(
                        <Input placeholder="姓名"/>,
                    )}
                   
                  
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: '电话号码不能为空' }],
                    })(
                        <Input placeholder="电话"/>,
                    )}
                    {getFieldDecorator('address', {
                        rules: [{ required: true, message: '地址' }],
                    })(
                        <Input placeholder='北京/北京市/东城区'/>,
                    )}
                      {getFieldDecorator('detail', {
                        rules: [{ required: true, message: '详细地址' }],
                    })(
                        <Input placeholder='详细地址'/>,
                    )}
                   </Form.Item>
                    <Form.Item className='change'>
                       默认地址<input type='checkbox' />
                    </Form.Item>
                </Form>
                </section>
                <div className='btns'>
                          <button type="primary" className="login-form-no" >取消</button>
                          <button type="primary" className="login-form-save" >保存</button>
                </div>
            </div>
        
    }
}

export default Form.create()(Addaddress)
