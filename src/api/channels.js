// 封装获取频道列表请求接口
import http from '@/utils/request'
// 到入库的实例
// import store from '@/store'
// 导出请求方法
export const reqGetChannels = () => {
//   const token = store.state.user.tokenInfo.token
  return http({
    url: 'v1_0/user/channels',
    method: 'get'
    // headers: {
    //   Authorization: `Bearer ${token}`
    // }
  })
}
