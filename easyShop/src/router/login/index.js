import loadable from "react-loadable"
import React from "react"
import '../../components/logding/logding.scss'
function Loing() {
    return <div className="loading">
        <div className="circle-loader">
            <div className="circle-line">
                <div className="circle circle-blue"></div>
                <div className="circle circle-blue"></div>
                <div className="circle circle-blue"></div>
            </div>
            <div className="circle-line">
                <div className="circle circle-yellow"></div>
                <div className="circle circle-yellow"></div>
                <div className="circle circle-yellow"></div>
            </div>
            <div className="circle-line">
                <div className="circle circle-red"></div>
                <div className="circle circle-red"></div>
                <div className="circle circle-red"></div>
            </div>
            <div className="circle-line">
                <div className="circle circle-green"></div>
                <div className="circle circle-green"></div>
                <div className="circle circle-green"></div>
            </div>
        </div>
    </div>
}
export const login = loadable({
    loading: Loing,
    loader: () => import("../../views/login/login")
})
export const home = loadable({
    loading: Loing,
    loader: () => import("../../views/home/home")
})
export const classify = loadable({
    loading: Loing,
    loader: () => import("../../views/classify/classify")
})
export const categorys = loadable({   //分类详情页
    loading: Loing,
    loader: () => import("../../views/classify/categorys/categorys")
})
export const search = loadable({   //搜索页面
    loading: Loing,
    loader: () => import("../../views/search/search")
})
export const goods = loadable({   //添加去购物车页面
    loading: Loing,
    loader: () => import("../../views/classify/goods/goods")
})
export const shopcar = loadable({   //去购物车
    loading: Loing,
    loader: () => import("../../views/shopcar/shopcar")
})
export const my = loadable({   //我的
    loading: Loing,
    loader: () => import("../../views/my/my")
})
export const special = loadable({   //我的
    loading: Loing,
    loader: () => import("../../views/special/special")
})
export const Sdetail = loadable({   //我的
    loading: Loing,
    loader: () => import("../../views/special/detail/detail")
})
export const address = loadable({   //地址
    loading: Loing,
    loader: () => import("../../views/my/address/address")
})
export const append = loadable({   //增加地址
    loading: Loing,
    loader: () => import("../../views/my/address/append/append")
})



