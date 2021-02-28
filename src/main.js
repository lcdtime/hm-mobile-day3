import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入全局公共样式文件 --这块有个遗留问题
import '@/styles/index.scss'
// 导入vant-uijs模块--只执行这个文件 @路径提示配置
import '@/utils/vant-ui'
// Vant 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法。
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant)
// 导入自动设置html font-size的处理文件
import 'amfe-flexible'
// 导入axios实例并挂载给vue原型
import http from '@/utils/request'
Vue.prototype.$http = http
// 全局过滤器
import { getRelativeTime } from '@/utils/date-time'
Vue.filter('relative', getRelativeTime)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
