import loadable from "react-loadable"
import React from "react"
function Loing() {
    return <h3>loading</h3>
}
export const logding = loadable({
    loading: Loing,
    loader: () => import("../../views/loding/loding")
})
export const home = loadable({
    loading: Loing,
    loader: () => import("../../views/home/home")
})
// export const homeindex=loadable({
//     loading:Loing,
//     loader:()=>import("../../views/home/component/homeindex")
// })