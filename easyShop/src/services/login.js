import request from "../uilts/request"
export function login(parmas){
    console.log("ser...",parmas)
    return request.post("/auth/loginByMobile",parmas)
}