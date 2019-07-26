import request from '../utils/request'
export function login(parmase) {   //登录接口
    return request.post('/auth/loginByMobile', parmase)
}