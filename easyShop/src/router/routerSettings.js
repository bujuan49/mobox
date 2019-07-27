import { home, classify, login, categorys, search } from "./login/index"

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
        path: '/',
        redirect: '/home'
    }
]

export default routes;