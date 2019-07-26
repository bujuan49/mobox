import request from '../utils/request'
export function list() {     //获取分类的初始数据
    return request.get('/catalog/index')
}
export function tab_list(params) { //获取点击切换的数据
    return request.get('/catalog/current?id=' + params)
}
export function category(params) { //获取点击切换的数据
    return request.get('/goods/category?id=' + params)
}


