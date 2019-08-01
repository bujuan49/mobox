
import request from "../utils/request"

//获取用户地址
export function addressData(params) {
    return request.post("/address/list", params)
}

//新增地址
export function addData(params) {
    return request.post("/address/save", params)
}

//删除地址
export function delData(params) {
    return request.post("/address/delete", params)
}