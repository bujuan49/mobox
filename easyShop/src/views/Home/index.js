import React from 'react';
import { NavLink } from "react-router-dom"
import "./home.scss"
import Header from "../../components/Header/index"
import { observer, inject } from "mobx-react"
import { Toast} from 'antd-mobile';
@inject("loading")
@observer
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
    componentDidMount(){
        this.time=setInterval(()=>{
            this.props.loading.changeLoading(!this.props.loading.isLoading)
        }, 3000);
        clearInterval(this.time)

    }
    componentWillUnmount(){
        //console.log(this.myrefs)
        clearInterval(this.time)
    }
    loadingToast=() =>{
        Toast.loading('Loading...', 1, () => {
          console.log('Load complete !!!');
        });
      }
    componentDidMount() {
        Toast.loading('Loading...', 30, () => {
          console.log('Load complete !!!');
        });
    
        setTimeout(() => {
          Toast.hide();
        }, 3000);
      }
    render() {
        
        const { routes } = this.props;
        return (
            <React.Fragment>
                <div className="wrap">
                    <Header />
                    <div className="content">
                        {
                            this.props.children
                        }  
                   </div>
                   <div className="footer">
                       {
                          routes.map((item,i)=>{
                            return item.path ?<div key={item.path}>
                                <NavLink to={item.path} onClick={()=>this.loadingToast()}>
                                    <i className={item.icon}></i>{item.name}
                                </NavLink></div>:null
                          }) 
                       }
                        
                   </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Home;