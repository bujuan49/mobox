import axios from 'axios'
// create an axios instance
import { getToken } from './index.js'
const service = axios.create({
  baseURL: 'http://169.254.12.49:8888',
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {

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
    // message.error(error.message);
  }
)

export default service