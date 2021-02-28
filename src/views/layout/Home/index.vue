<template>
  <div class="home-container">
    <van-tabs v-model="active" >
      <van-tab v-for="item in channels" :title="item.name" :key="item.id">
        <!-- 单独抽成一个组件显示内容 -->
        <article-list :channel="item"></article-list>
        <!-- 添加弹框组件点击图片时 -->
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
// 导入请求方法
import { reqGetChannels } from '@/api/channels'
import ArticleList from './component/article-list.vue'
// import ArticleList from './component/article-list'
export default {
  name: 'HomeIndex',
  components: {
    ArticleList
  },
  data () {
    return {
      active: 0,
      channels: []
    }
  },
  // 发送请求获取内容并渲染页面
  // 初始化视图获取数据
  created () {
    this.reqChannels()
  },
  methods: {
    // 用户登陆是两种数据显示效果的，有无请求token本地
    // 每次请求都携带的有请求头验证
    async reqChannels () {
      // 请求失败是由于携带token
      const { data } = await reqGetChannels()
      console.log(data.data)
      // 添加到数据列表
      this.channels = data.data.channels
    }
  }
  // 页面初始化完成就渲染页面
}
</script>

<style lang="scss" scoped>
// 加了scoped, 样式, 只会作用于当前组件模板
// scoped属性是保证处理当前组件的样式的, 不加scoped属性样式会作用到全局,样式污染
// 在组件中设置样式开启scoped 是默认不会向下穿透的
// 深度选择器 scss中::v-deep {}, 设置深度选择器,样式向下穿透
// less中深度选择器 是  /deep/
// 计算函数calc(),css3方法 vh wh视口相对单位
// css中的深度选择器 >>>
  .home-container {
      padding-top: 44px;
      // 因为tab__wrap加了固定定位脱标了内容显示的高度
      height: calc(100vh - 46px - 50px);
      box-sizing: border-box;
      // 视口的高 100vh - navbar的高 - tabbar的高
      // padding-bottom: 50px;
    // ::v-deep 开启深度// 深度作用选择器 ::v-deep (sass)  /deep/ (less)  >>> (css)
    ::v-deep {
      .van-tabs__line {
        background-color: #3296fa;
      }
      // 给整个home结构设置一个高否者home沾满整个页面
      .van-tabs {
        height: 100%;
      }
      // tab栏
      .van-tabs__wrap {
        position: fixed;
        top: 46px;
        left: 0;
        width: 100%;
      }
      // 内容部分文章组件自动生成的超出隐藏
      .van-tabs__content {
        height: 100%;
        // overflow: auto;
        // 为每一个pane面板有自己的滚动条-单独给自己设置滚顶滚动
        // 每一个tab下的容器
        .van-tab__pane {
          height: 100%;
          overflow: auto;
        }
      }
    }
  }
</style>
