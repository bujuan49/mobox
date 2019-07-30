import request from '../utils/request'

//专题数据
export function specialData(params) {
    return request.get("/topic/list", { params: params })
}
//专题详情数据
export function detailData(params) {
    return request.get('/topic/detail', { params: params })
}
//评论数据
export function commentData(params) {
    return request.get('/comment/list', { params: params })
}
//写留言
export function writeData(params) {
    return request.post('/comment/post', params)
}