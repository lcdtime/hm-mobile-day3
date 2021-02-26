import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入登录组件
import Login from '@/views/Login'
import LayoutIndex from '@/views/layout'
// tab-home组件
import HomeIndex from '@/views/layout/Home'
import QuestionIndex from '@/views/layout/Question'
import VideoIndex from '@/views/layout/Video'
import UserIndex from '@/views/layout/User'
// 搜素路由
import Search from '@/views/search'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 配置登录组件的路由规则
    { path: '/login', component: Login },
    // 配置首页路由
    {
      path: '/',
      component: LayoutIndex,
      children: [
        { path: '', component: HomeIndex },
        { path: '/question', component: QuestionIndex },
        { path: '/video', component: VideoIndex },
        { path: '/user', component: UserIndex }
      ]
    },
    { path: '/search', component: Search }
  ]
})

export default router
