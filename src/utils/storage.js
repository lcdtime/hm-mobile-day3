// 封装关于本地存储便于多次使用调用
// 定义token的键名---------impotent---方便修改
const tokenKey = 'hm-yi-token-77'
// 存储token
export const setToken = (objtoken) => {
  return localStorage.setItem(tokenKey, JSON.stringify(objtoken))
}
// 获取token
export const getItem = () => {
  // 获取的对象不为0 或者为{} 空对象
  return JSON.parse(localStorage.getItem(tokenKey)) || {}
}
// 删除token
export const removeItem = () => {
  localStorage.removeItem(tokenKey)
}
