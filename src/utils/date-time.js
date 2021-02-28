// 2 封装模块, 对日期进行格式化是一个非常常见的功能（与axios一样），所以我们进行封装
// 导入dayjs,进行封装
import dayjs from 'dayjs'
// 引入dayjs的一个插件， 在 yarn add dayjs 就已经将这个插件下载
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
// 创建构造器
dayjs.extend(relativeTime)
// 提供了一个全局配置参数叫 “locale”,通过改变 locale 的值可以实现不同语言的切换
dayjs.locale('zh-cn') // 全局使用
// 28/02/2021
export const formatTime = (val) => {
  return dayjs(val).format('YYYY/DD/MM')
}
// 几秒前
export const getRelativeTime = (yourTime) => {
  return dayjs(yourTime).fromNow()
}
