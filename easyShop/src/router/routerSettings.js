// import home from "../views/home"
// import loagind from "../views/longind"
// import islogin from '../components/islogin'

import { home, classify } from "./login/index"

const routes = [
    {
        path: "/classify",
        Component: classify
    },
    {
        path: "/home",
        Component: home
    },
    {
        path: '/',
        redirect: '/home'
    }
]

export default routes;