import request from "../uilts/request"

export function alldata(){
    return request.get("/")
}
export function branddetail(payload){
    return request.get("/brand/detail",{params:payload})
}
export function goodsdetail(payload){
    return request.get("/goods/detail",{params:payload})
}