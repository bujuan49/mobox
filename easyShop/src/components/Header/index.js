import React from "react"
import "./header.scss"
class Header extends React.Component{
    render(){
        return <div className="header">
            <span><i className="icon iconfont icon-guanbi1"></i>
            easyMarket
            </span>
            <span><i className="icon iconfont icon-dian"></i></span>
        </div>
    }
}

export default Header;