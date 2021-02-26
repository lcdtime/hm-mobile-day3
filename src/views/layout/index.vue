<template>
  <div class="layout-container">
      <!-- fixed开始头部定位 头部区域 fixed 开启固定定位  placeholder属性会生成占位的等高的元素 -->
    <van-nav-bar fixed>
        <template #left>
          <div class="logo"></div>
        </template>
        <template #right>
          <van-button
          round
          class="search-btn"
          type="info"
          icon="search"
          size="samll"
          @click="searchIndex"
          >
            搜索
          </van-button>
        </template>
    </van-nav-bar>
    <!-- 内容区域放置路由出口 -->
    <router-view></router-view>
    <!-- 底部tabbar区域 -->
    <div>
      <van-tabbar v-model="active" route>
          <!-- replace是替换的意思，在路由中默认路由地址记录会被缓存，添加replace不会进行路由记录缓存 -->
        <van-tabbar-item to='/' icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to='/question' icon="chat-o">问答</van-tabbar-item>
        <van-tabbar-item to='/video' icon="video-o">视频</van-tabbar-item>
        <van-tabbar-item to='/user' icon="user-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'Layout',
  data () {
    return {
      active: 0 // 定义激活状态第一个
    }
  },
  methods: {
    searchIndex () {
      // 点击搜素按钮跳转到页面
      router.push('search')
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout-container {
    // 图片logo
    .logo {
        // @ 在css中不识别 ~@ 才会找到src
    //   background: url('~@/assets/logo.png') no-repeat;
      background: url('../../assets/logo.png') no-repeat;
      background-size: cover;
      width: 100px;
      height: 30px;
    }
    // 搜索框按钮
    .search-btn {
      background-color: #5babfb;
      width: 100px;
      font-size: 14px;
      .van-icon {
          color: #fff;
      }
    }
  }
</style>
