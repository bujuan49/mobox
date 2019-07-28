import axios from 'axios'
import { getToken } from '../uilts/index'
// create an axios instance
const service = axios.create({
<<<<<<< HEAD
  baseURL:'http://169.254.32.109:8888',
=======
  baseURL:'http://127.0.0.1:8888' ,
>>>>>>> sxn
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})
service.interceptors.request.use( 
  config => {  
    // 判断是否有登陆态
    if (getToken()) {
      // 让每个请求携带authorization
      config.headers['x-nideshop-token'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// response interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)

export default service