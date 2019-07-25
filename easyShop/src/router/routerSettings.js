// import home from "../views/home"
// import loagind from "../views/longind"
// import islogin from '../components/islogin'
import { logding, home } from "./login/index"
const routes = [
    {
        path: "/",
        Component: home
    },
    {
        path: "/login",
        Component: logding
    },

]

export default routes;