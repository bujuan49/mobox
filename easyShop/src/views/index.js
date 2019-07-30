import loadable from "react-loadable"
import React from "react";
function Loading(props){
    return <div>正在加载...</div>
}
export const Home=loadable({
    loader:()=>import("../views/Home"),
    loading:Loading
})
export const Login=loadable({                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    loader:()=>import("../views/Login"),
    loading:Loading
})
export const Homepage=loadable({
    loader:()=>import("../views/Home/homepage"),
    loading:Loading
})
export const Specal=loadable({
    loader:()=>import("../views/Home/specal"),
    loading:Loading
})
export const Shop=loadable({
    loader:()=>import("../views/Home/shop"),
    loading:Loading
})

export const Classfiy=loadable({
    loader:()=>import("../views/Home/classfiy"),
    loading:Loading
})

export const Mine=loadable({
    loader:()=>import("../views/Home/mine"),
    loading:Loading
})
export const Manufacturer=loadable({
    loader:()=>import("../views/Manufacturer"),
    loading:Loading
})
export const Sdetail=loadable({
    loader:()=>import("../views/sDetail"),
    loading:Loading
})
export const newDatail=loadable({
    loader:()=>import("../views/newDatail"),
    loading:Loading
})
export const CommentWrite=loadable({
    loader:()=>import("../views/CommentWrite"),
    loading:Loading
})
export const Comment=loadable({
    loader:()=>import("../views/Comment"),
    loading:Loading
})
export const Collect=loadable({
    loader:()=>import("../views/Collect"),
    loading:Loading
})
export const Address=loadable({
    loader:()=>import("../views/Address"),
    loading:Loading
})
