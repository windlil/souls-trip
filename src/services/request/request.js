import axios from 'axios'
import { BASE_URL, TIME_OUT } from './request.config'

// 函数式二次封装axios
const my_axios = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export const request_axios = (config) => {
  return new Promise((resolve, reject) => {
    my_axios.request({
      ...config
    }).then( res => resolve(res.data)).catch( err => reject(err))
  })
}

export const get_axios = (config) => {
  return request_axios({
    ...config,
    method: "GET"
  })
}

export const post_axios = (config) => {
  return request_axios({
    ...config,
    method: "POST"
  })
}