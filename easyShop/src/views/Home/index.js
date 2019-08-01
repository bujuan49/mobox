import React from 'react';
import { NavLink } from "react-router-dom"
import "./home.scss"
import Header from "../../components/Header/index"
import { observer, inject } from "mobx-react"
@inject("loading")
@observer
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }
<<<<<<< HEAD
    componentDidMount() {
        //  console.log("home component")
        this.time = setInterval(() => {
=======
    componentDidMount(){
        this.time=setInterval(()=>{
>>>>>>> 83f525ea715496176e3434055abe648e88cad235
            this.props.loading.changeLoading(!this.props.loading.isLoading)
        }, 3000);
        clearInterval(this.time)

    }
<<<<<<< HEAD
    componentWillUnmount() {
=======
    componentWillUnmount(){
        //console.log(this.myrefs)
>>>>>>> 83f525ea715496176e3434055abe648e88cad235
        clearInterval(this.time)
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
<<<<<<< HEAD
                        }
                    </div>
                    <div className="footer">
                        {
                            routes.map((item, i) => {
                                return item.path ? <div key={item.path}>
                                    <NavLink to={item.path}><i className={item.icon}></i>{item.name}</NavLink></div> : null
                            })
                        }

                    </div>
=======
                        }  
                   </div>
                   <div className="footer">
                       {
                          routes.map((item,i)=>{
                            return item.path ?<div key={item.path}>
                                <NavLink to={item.path}><i className={item.icon}></i>{item.name}</NavLink></div>:null
                          }) 
                       }
                        
                   </div>
>>>>>>> 83f525ea715496176e3434055abe648e88cad235
                </div>
            </React.Fragment>
        );
    }
}
export default Home;