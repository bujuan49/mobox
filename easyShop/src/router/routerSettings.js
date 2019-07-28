import { home, classify, login, categorys, search, goods } from "./login/index"

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
        path: "/login",
        Component: login
    },
    {
        path: "/categorys/:id",
        Component: categorys
    },
    {
        path: "/search",
        Component: search
    },
    {
        path: "/goods/:id",
        Component: goods
    },
    {
        path: '/',
        redirect: '/home'
    }
]

export default routes;