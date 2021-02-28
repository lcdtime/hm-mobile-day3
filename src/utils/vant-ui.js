// 保证main.js的精简,单独的将vant组件导入注册放在一个新的模块中
import Vue from 'vue'
// 按需导入组件并注册
import { Button, Icon, Switch, NavBar, Field, CellGroup, Cell, Toast, Tabbar, TabbarItem, Tab, Tabs, List, Grid, GridItem, Image, Lazyload } from 'vant'
// Vue.use(Button, Icon, Switch) // 错误的写法
// 支持链式操作
// Vue
//   .use(Button)
//   .use(Icon)
//   .use(Switch)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Switch)
Vue.use(NavBar)
Vue.use(Field)
Vue.use(CellGroup)
Vue.use(Toast) // 引入 Toast 组件后，会自动在 Vue 的 prototype 上挂载 $toast 方法，便于在组件内调用
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(List)
Vue.use(Cell)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Image)
Vue.use(Lazyload)
