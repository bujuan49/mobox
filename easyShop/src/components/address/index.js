import React, { Component } from 'react'
import { Checkbox, Picker, List } from 'antd-mobile';
import { district } from 'antd-mobile-demo-data';
import { createForm, formShape } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';
import 'antd-mobile/dist/antd-mobile.css'
import './index.scss'
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
            value: null,
            // fields: {name: ''} 
        }
    }


    //取消
    closeDo = () => {
        this.props.mine.flag = false
    }
    getSel() {
        const values = this.state.pickerValue;

        if (!values) {
            return '';
        }
        const treeChildren = arrayTreeFilter(district, (c, level) => c.values === values[level]);
        console.log(treeChildren)
        return treeChildren.map(v => v.label).join(',');

    }

    //保存
    submit = () => {

        const values = this.state.pickerValue;
        this.props.form.validateFields((error, value) => {
            this.props.mine.getNewAdd({
                address: value.address,
                city_id: values.city_id,
                district_id: values.district_id,
                is_default: false,
                mobile: value.phone,
                name: value.names,
                province_id: values.province_id
            });
        });
        this.props.mine.flag = false;
    }
    render() {
        const { getFieldProps } = this.props.form;
        let errors;
        // console.log(this.props.mine)
        return <div className='add'>
            <header>
                <h5>新增地址</h5>
            </header>
            <section>
                <input {...getFieldProps('names', {
                    rules: [{ required: true }],
                })} placeholder='姓名'
                    onChange={(e) => this.setState({ value: e.target.value })}
                />
                <input {...getFieldProps('phone', {
                    rules: [{ required: true }],
                })} placeholder='电话号码'
                    onChange={(e) => this.setState({ value: e.target.value })} />
                <Picker
                    visible={this.state.visible}
                    data={district}
                    placeholder=' 北京/北京市/东城区'
                    value={this.state.pickerValue}
                    onChange={v => this.setState({ pickerValue: v })}
                    onOk={() => this.setState({ visible: false })}
                    onDismiss={() => this.setState({ visible: false })}
                >
                    <List.Item {...getFieldProps('city', {
                        //  getSel(){},
                        rules: [{ required: true }],
                    })}
                        extra={this.getSel()}
                        onClick={() => this.setState({ visible: true })}>
                    </List.Item>
                </Picker>

                <input {...getFieldProps('address', {
                    rules: [{ required: true }],
                })} placeholder='详细地址'
                    onChange={(e) => this.setState({ value: e.target.value })} />
                />
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