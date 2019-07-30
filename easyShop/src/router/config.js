import {Home,Login,Homepage,Specal,Classfiy,Shop,Mine,Manufacturer,Sdetail,newDatail} from "../views/index"

const route=[
    {
        path:"/home",
        component:Home,
        children:[
            {
                path:"/home/homepage",
                component:Homepage,
                icon:"icon iconfont icon-shouye",
                name:'首页',
            },
            {
                path:"/home/specal",
                component:Specal,
                icon:"icon iconfont icon-zhuantibluecopy",
                name:'专题',
            },
            {
                path:"/home/classfiy",
                component:Classfiy,
                icon:"icon iconfont icon-jifenfenlei",
                name:'分类',
            },
            {
                path:"/home/shop",
                component:Shop,
                icon:"icon iconfont icon-gouwuchekong",
                name:'购物车',
            },
            {
                path:"/home/mine",
                component:Mine,
                icon:"icon iconfont icon-wo2",
                name:'我的',
            },
            {
                to:"/home/homepage",
                from:"/"
            }
        ]
    },
    {
        path:"/manufacturer",
        component:Manufacturer,
        name:'详情'
    },
    {
        path:"/login",
        component:Login,
        name:'登录'
    }
    ,
    {
      path:'/sdetail/:id'  ,
      component:Sdetail,
      name:'专题详情'
    },
    {
        path:"/newDatail",
        component:newDatail,
        name:"新品详情"
    },
    {
        to:"/login",
        from:"/"
    }
]
export default route;