import React, { Component } from 'react'
import { Checkbox, Picker, List } from 'antd-mobile';
import { district } from 'antd-mobile-demo-data';
import { createForm, formShape } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';
import 'antd-mobile/dist/antd-mobile.css'
import './add.scss'
import { observer, inject } from 'mobx-react'
const CheckboxItem = Checkbox.CheckboxItem;


@inject('mine')
@observer
class Addaddress extends Component {
  static propTypes = {
    form: formShape
  };
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      // fields: {name: ''} 
    }
  }
 
  
  //取消
  closeDo = () => {
    this.props.mine.flag = false
  }
  getSel() {
    const value = this.state.pickerValue; 
    if (!value) {
      return '';
    }
   
    const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
  
    return treeChildren.map(v => v.label).join(',');  
    
  }
  
  //保存
  submit = () => {
    let province=this.getSel();
    this.props.form.validateFields((error, value) => {
      this.props.mine.getNewAdd({
        address: value.address,
        is_default: false,
        mobile: value.phone,
        name: value.names,
        province:value.city
      });
    });
    this.props.mine.flag = false;
  }
  render() {
    const { getFieldProps } = this.props.form;
    let errors;


    return <div className='add'>
      <header>
        <h5>新增地址</h5>
      </header>
      <section>
        <input {...getFieldProps('names', {
          onChange(){}, // have to write original onChange here if you need
          rules: [{ required: true }],
          
        })} placeholder='姓名'
       
        />
        <input {...getFieldProps('phone', {
            onChange(){}, // have to write original onChange here if you need
          rules: [{ required: true }],
        })} placeholder='电话号码'  />
        <Picker {...getFieldProps('city', {
              //  getSel(){},
              rules: [{ required: true }],
            })}
          visible={this.state.visible}
          data={district}
          // initialValue=' 北京/北京市/东城区'
          value={this.state.pickerValue}
        
          onChange={v => this.setState({ pickerValue: v})}
          onOk={() => this.setState({ visible: false })}
          onDismiss={() => this.setState({ visible: false })}
        >
          <List.Item 
            extra={this.getSel()}
            onClick={() => this.setState({ visible: true })}
            {...getFieldProps('city', {
              //  getSel(){},
              rules: [{ required: true }],
            })}>
          </List.Item>
        </Picker>
     
        <input {...getFieldProps('address', {
           onChange(){}, // have to write original onChange here if you need
          rules: [{ required: true }],
        })} placeholder='详细地址' />
        <div className='default'>
          <span>设置默认地址</span> <CheckboxItem />
        </div>
     

      </section>
      <div className='btns'>
        <button type="primary" className="login-form-no" onClick={() => this.closeDo()}>取消</button>
        <button type="primary" className="login-form-save" onClick={this.submit}>保存</button>
      </div>
    </div>

  }
}

export default createForm()(Addaddress)
