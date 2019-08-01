import React, { Component } from 'react'
import {Checkbox,Picker, List } from 'antd-mobile';
import { district } from 'antd-mobile-demo-data';
import { createForm,formShape } from 'rc-form';
import 'antd-mobile/dist/antd-mobile.css'
import './add.scss'
import {observer,inject} from 'mobx-react'
const CheckboxItem = Checkbox.CheckboxItem;

@inject('mine')
@observer
class Addaddress extends Component {
  static propTypes = {
    form: formShape,
  };
      constructor(props){
          super(props)
          this.state = {
            value: null
          };
      }
      closeDo = () => {
      this.props.mine.flag=false
      }
      getSel() {
        const value = this.state.pickerValue;
        // console.log(value)
        if (!value) {
          return '';
        }
      }
      submit = () => { 
      const values = this.state.pickerValue;
        this.props.form.validateFields((error, value) => {
          this.props.mine.getNewAdd({address: value.address, city_id: values[0], district_id: values[2],is_default: false,mobile: value.phone,
          name: value.normal,
          province_id: values[1]
          });
        });
      }
    render() {
      const { getFieldProps} = this.props.form;
      const {addList}=this.props.mine;
      
     console.log(addList)
     
      let errors;
     //  console.log(this.props.mine)
       return  <div className='add'>
                <header>
                    <h5>新增地址</h5>
                </header>
                <section>
                      <input {...getFieldProps('normal',{
                        onChange(){}, // have to write original onChange here if you need
                        rules: [{required: true}],
                      })}  placeholder='姓名' 
                      />
                      <input {...getFieldProps('phone', {
                        onChange(){}, // have to write original onChange here if you need
                        rules: [{required: true}],
                      })}  placeholder='电话号码'/>
                       <Picker 
                              visible={this.state.visible}
                              data={district}
                              placeholder=' 北京/北京市/东城区'
                              value={this.state.pickerValue}
                              onChange={v => this.setState({ pickerValue: v })}
                              onOk={() => this.setState({ visible: false })}
                              onDismiss={() => this.setState({ visible: false })}
                              >
                              <List.Item {...getFieldProps('city',{
                                getSel(){},
                              rules: [{required: true}],
                                       })}
                              extra={this.getSel()} 
                               onClick={() => this.setState({ visible: true })}>
                              </List.Item>
                      </Picker>
                      <input {...getFieldProps('address', {
                        onChange(){}, // have to write original onChange here if you need
                        rules: [{required: true}],
                      })}  placeholder='详细地址'/>
                      <div className='default'>
                       <span>设置默认地址</span> <CheckboxItem/>
                      </div>
                      
              
                </section>
                <div className='btns'>
                      <button type="primary" className="login-form-no" onClick={()=>this.closeDo()}>取消</button>
                      <button type="primary" className="login-form-save" onClick={this.submit}>保存</button>
                </div>
            </div>
        
    }
}

export default createForm()(Addaddress)
