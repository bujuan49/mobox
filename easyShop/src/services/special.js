import request from "../uilts/request"
//专题数据
export function specialData(params){
    
    return request.get("/topic/list",{params:params})
}
//专题详情数据
export function detailData(params){
    return request.get('/topic/detail/',{params:params})
}