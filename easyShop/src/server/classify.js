import request from '../utils/request'
export function list() {     //获取分类的初始数据
    return request.get('/catalog/index')
}