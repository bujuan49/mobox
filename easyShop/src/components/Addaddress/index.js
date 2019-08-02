import React, { Component } from 'react'
import {Checkbox,Picker, List } from 'antd-mobile';
import { district } from 'antd-mobile-demo-data';
import { createForm,formShape } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';
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
            value: null,
            data: [],
            cols: 1,
            pickerValue: [],
            asyncValue: []
          };
      }
      closeDo = () => {
      this.props.mine.flag=false
      }
      getSel() {
        const value = this.state.pickerValue;
        console.log(value)
        console.log(this.state)
        if (!value) {
          return '';
        }
        const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
        return treeChildren.map(v => v.label).join(',');
      }
      submit = () => { 
      
          this.state.pickerValue.map(item=>{

          })
      }
    render() {
      const { getFieldProps} = this.props.form;
      console.log(this.getSel())
      console.log(this.state.value)
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
                      <input {...getFieldProps('required', {
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
                              <List.Item extra={this.getSel()} onClick={() => this.setState({ visible: true })}>
                                Visible state
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

export default createForm()(Addaddress);
