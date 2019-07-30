import { home, classify, login, categorys, search, goods, my, shopcar, special, Sdetail, address, append } from "./login/index"

const routes = [
    {
        path: "/classify",
        Component: classify
    },
    {
        path: "/home/address",
        Component: address
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
        path: '/shopcar',
        Component: shopcar
    },
    {
        path: '/my',
        Component: my
    },
    {
        path: '/special',
        Component: special
    },

    {
        path: "/goods/:id",
        Component: goods
    },
    {
        path: "/Sdetail/:id",
        Component: Sdetail
    },
    {
        path: "/append",
        Component: append
    },
    {
        path: '/',
        redirect: '/home'
    }
]

export default routes;