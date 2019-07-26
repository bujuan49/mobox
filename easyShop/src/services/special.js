import request from "../uilts/request"
export function specialData(){
    return request.get("/topic/detail")
}