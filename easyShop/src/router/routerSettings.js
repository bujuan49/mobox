import { home, classify, login, categorys, search, goods, my, shopcar, special } from "./login/index"

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
        path: '/',
        redirect: '/home'
    }
]

export default routes;