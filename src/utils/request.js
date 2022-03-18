import axios from 'axios'

const request = axios.create({
  // 请求根路径
  baseURL: 'https://www.escook.cn'
})

export default request
