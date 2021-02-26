// 封装user的模块状态
// 导入方法获取token
import { setToken, getItem } from '@/utils/storage.js'

const state = {
  // token数据
  // tokenInfo: {}
  // tokenInfo: JSON.parse(localStorage.getItem('tokenInfo')) || {}
  tokenInfo: getItem()
}
const mutations = {
  getTokenInfo (state, newTokenInfo) {
    state.tokenInfo = newTokenInfo
    // 将本地token封装起来便于多次丢用修改storage
    // localStorage.setItem('tokenInfo', JSON.stringify(newTokenInfo))
    // 使用封装好的localStorage
    setToken(newTokenInfo)
  }
}
const actions = {
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
