import request from '../utils/request'
export function goods_date(parmase) {     //获取本商品购物页面数据
    return request.get('/goods/detail/?id='+parmase)
}