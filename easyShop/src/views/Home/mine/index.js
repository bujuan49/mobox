import React from 'react';
import './mine.scss'
import {Icon} from 'antd'
class mine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userPower: [
              {
                type: 'folder-open',
                name: '我的收藏',
                theme:'twoTone',
                link: '/collect'
              },
              {
                type:'environment' ,
                name: '地址管理',
                theme:'twoTone',
                link: '/address'
              },
              {
                type:'profile',
                name: '我的订单'
              },
              {
                type:'schedule',
                name: '周末拼单'
              },
              {
                type:'pound',
                name: '优惠券'
              },
              {
                type:'safety' ,
                name: '优选购'
              },
              {
               type:'property-safety',
                name: '我的红包'
              },
              {
                type:'smile',
                name: '会员plus'
              },
              {
                type:'upload',
                name: '邀请返利'
              },
              {
                type:'form',
                name: '意见反馈'
              },
              {
                type:'phone',
                name: '客服咨询'
              },
              {
                type:'trademark',
                name: '账户安全'
              }
            ]
          }
    }
    render() {
       return (
            <React.Fragment>
                <div className="minePage">
                    <div className="userMsgWrap">
                    <div className="userLogo"></div>
                        <div className="userMsgs">
                            <div></div>
                            <div>普通用户</div>
                        </div>
                    </div>
                    <div className="userPower">
                    {
                        this.state.userPower.map((item) => (
                        <div key={item.name} >
                        <Icon type={item.type} theme={item.theme}/>
                            <div>{item.name}</div>
                        </div>)
                        )
                    }
                    </div>
                    <div className="loginOut" >退出登录</div>
            </div>
                    </React.Fragment>
        );
    }
}
export default mine;