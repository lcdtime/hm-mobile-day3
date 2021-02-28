// 将axios单独封装到一个js模块中
import axios from 'axios'
// 导入库store
import store from '@/store'
// 带入处理大数据插件
import JSONbig from 'json-bigint'
// 原地址: http://ttapi.research.itcast.cn/app/
// 现地址: http://toutiao-app.itheima.net/，需要去掉/app路径
// 原接口：url: '/app/v1_1/articles'，现在需要删除'app'：url: '/v1_1/articles'
const http = axios.create({
  // baseURL: 'http://ttapi.research.itcast.cn/app/',  原地址
  baseURL: 'http://toutiao-app.itheima.net/',
  timeout: 5000,
  // data => 原始的后台返回的 json 字符串数据
  transformResponse: [function (data) {
    // 这里的方法, 会覆盖axios默认对于返回结果的处理, 默认进行的是 JSON.parse
    // 需要进行的是 JSONbig.parse
    // 后台返回的有可能不是 json字符串, JSONbig 解析就会报错, 不合理的, 需要处理
    try {
      return JSONbig.parse(data)
    } catch (err) {
      // 如果解析不了, 说明不是json格式, 原样输出
      return data
    }
  }]
})

// 请求/响应拦截 拦截时axios实例 http
// const token = store.state.user.tokenInfo.token
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = store.state.user.tokenInfo.token
  // 请之前判断是否有token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config // config是一个信息对像
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 导出 在main.js中导入 并挂载给vue原型
export default http
