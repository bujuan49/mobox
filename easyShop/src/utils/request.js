import axios from 'axios'
import { getToken } from '@/utils/index'
// create an axios instance
const service = axios.create({
  baseURL: /jasonandjay.com/.test(window.location.host)?'https://exam.jasonandjay':'http://169.254.12.49:7001/',
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})
service.interceptors.request.use(
  config => {  
    // 判断是否有登陆态
    if (getToken()) {
      // 让每个请求携带authorization
      config.headers['authorization'] = getToken()
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