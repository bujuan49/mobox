import request from '../utils/request'
export function goods_date(parmase) {     //获取本商品购物页面数据
    return request.get('/goods/detail/?id=' + parmase)

}
export function related(parmase) {     //获取相关商品
    return request.get('/goods/related/?id=' + parmase)
}
export function addordelete(parmase) {     //获取相关商品
    return request.post('/collect/addordelete', { parmase })
}
