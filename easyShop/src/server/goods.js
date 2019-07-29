import request from '../utils/request'
export function goods_date(parmase) {     //获取本商品购物页面数据
    return request.get('/goods/detail/?id=' + parmase)

}
export function related(parmase) {     //获取相关商品
    console.log(parmase, '12312321132')
    return request.get('/goods/related/?id=' + parmase)
}