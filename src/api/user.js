// 封装了关于用户相关请求,登录,获取个人信息,修改个人信息....
// 导入axios实例
import http from '@/utils/request'
// 导入库store
import store from '@/store/index'
// 用户登录api
export const reqLogin = (mobile, code) => {
  return http({
    method: 'POST',
    url: 'v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}
// 获取个人信息
export const getproInfo = () => {
  // 从vues-user模块中获取token
  const token = store.state.user.tokenInfo.token
  return http({
    method: 'get',
    url: '/v1_0/user/profile',
    headers: {
      // Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTQzMDkwMjYsInVzZXJfaWQiOjEzMTk5OTI5Njk3NzE2MTQyMDgsInJlZnJlc2giOmZhbHNlfQ.NijnO4tk3qCPjoqv36v22cViUjG9JA9aFSNfu05TBWk'
      Authorization: 'Bearer ' + token
    }
  })
}
// 获取个人列表
export const reqGetFollowings = () => {
  const token = store.state.user.tokenInfo.token
  return http({
    method: 'get',
    url: 'v1_0/user/followings',
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
}
