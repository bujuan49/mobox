import request from '../utils/request'
export function address() {   //获取用户地址
    return request.post('/address/list')
}
export function save(parmas) {   //新增用户地址
    return request.post('/address/save', parmas)
}

