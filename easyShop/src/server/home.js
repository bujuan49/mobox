import request from '../utils/request'
export function home_All_date() {   //请求首页的数据
    return request.get('/')
}