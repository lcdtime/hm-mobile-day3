<template>
  <div id="app">
    <!-- 路由出口 -->
    <router-view />
    <!-- <div id="box">
    </div> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
  // 接口测试
  // created () {
  //   this.$http('/').then(res => {
  //     console.log(res)
  //   })
  // }
}
</script>

<style lang="scss" scoped>
// scss 是新语法  sass是旧语法(旧语法书写不能加;不能加{} 和 styules类似)
// scss 和 less类似,变量的定义($变量名),函数的定义有些不一样....
// $color: green;
// #app {
//   #box {
//     width: 375px;
//     height: 375px;
//     background-color: pink;
//     p {
//       color: $color;
//     }
//   }
// }
// #app
//   p
//     background-color: pink
//     width: 200px
//     height: 200px
</style>
