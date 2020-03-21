import axios from 'axios'

export function reqeust(config) {
  const instance = new axios.create({
    baseURL: 'http://123.207.32.32:8000/api/wh',
    timeout: 5000,
  })

  // 响应后拦截
  instance.interceptors.response.use((rep => {
    return rep.data
  }), rep => {
    console.log('错误网络响应', rep);
  })
  return instance(config)
}