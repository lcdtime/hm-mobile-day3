// 文章接口 导入http文件来获取文章数据
import http from '@/utils/request'
// 封装接口
export const reqGetArticles = (channelId, timestamp) => {
  // 请求完后将结果导出------------------bug-----return
  return http({
    method: 'get',
    url: 'v1_1/articles',
    params: {
      with_top: 1, // 1 包含置顶文章，0不包含置顶文章
      channel_id: channelId, // 频道id
      timestamp // 时间戳都是由文章列表channel传过来的
    }
  })
}
// export const reqGetArticles = (channel_id, timestamp) => {
//     return http({
//       method: 'GET',
//       url: 'v1_1/articles',
//       // params get请求携带参数的配置项
//       params: {
//         channel_id, // channel_id 频道ID
//         timestamp, // 时间戳  timestamp 就是来做移动端的分页的 timestamp 获取最新的数据传递当前时间戳,请求历史推荐传指定的时间戳(指定时间戳后台会返回)
//         with_top: 1 // 置顶项文章 1-包含置顶，0-不包含
//       }
//     })
//   }
