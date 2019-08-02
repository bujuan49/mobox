import React, { Component } from 'react'
import { Checkbox, Picker, List } from 'antd-mobile';
import { createForm, formShape } from 'rc-form';
import 'antd-mobile/dist/antd-mobile.css'
import './add.scss'
import { observer, inject } from 'mobx-react'
import city from '../../components/data.json'
const CheckboxItem = Checkbox.CheckboxItem;
city.map(item => {
  item.value = item.id
  item.label = item.name
  item.children = []
  city.map(el => {
    if (item.id === el.parent_id) {
      item.children.push(el)
    }
  })
})

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
              addName: null,
              addPhone:null,
              addPlace:null
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
  }

  //保存
  submit = () => {
    const values = this.state.pickerValue;
    this.props.form.validateFields((value) => {
    //  console.log(value)
      this.props.mine.getNewAdd({
        address: this.state.addPlace,
        is_default: false,
        mobile: this.state.addPhone,
        name: this.state.addName,
        city_id: values[0],
        province_id: values[1],
        district_id: values[2]
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
        <input  {...getFieldProps('names', {
          // have to write original onChange here if you need
          rules: [{ required: true }],
        })} placeholder='姓名'
          onChange={(e) => this.setState({ addName: e.target.value })}
        />
        <input {...getFieldProps('phone', {
          rules: [{ required: true }],
        })} placeholder='电话号码' className='phoneNumber'
          onChange={(e) => this.setState({ addPhone: e.target.value })}
        />
        <Picker {...getFieldProps('city', {
          //  getSel(){},
          rules: [{ required: true }],
        })}
          visible={this.state.visible}
          data={city}
          // initialValue=' 北京/北京市/东城区'
          value={this.state.pickerValue}

          onChange={v => this.setState({ pickerValue: v })}
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
          rules: [{ required: true }],
        })} placeholder='详细地址'
          onChange={(e) => this.setState({ addPlace: e.target.value })} />
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

export default createForm()(Addaddress);
