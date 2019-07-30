import request from "../uilts/request"
//获取购物车数量
export function goodscount() { 
    return request.get("/cart/goodscount")
}
export function getCart(){
    return request.get("/cart/index")
}
export function addCart(parmas){
    return request.post("/cart/add",parmas)
}
