import request from "../uilts/request"
export function alldata(){
    return request.get("/")
}