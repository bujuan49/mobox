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
    componentDidMount() {
        //  console.log("home component")
        this.time = setInterval(() => {
            this.props.loading.changeLoading(!this.props.loading.isLoading)
        }, 3000);
        clearInterval(this.time)

    }
    componentWillUnmount() {
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
                </div>
            </React.Fragment>
        );
    }
}
export default Home;