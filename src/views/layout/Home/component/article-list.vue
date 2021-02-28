<template>
<!-- 大数字问题 js丢失精度,处理大数字也会有这个问题 js处理的最大的返回的数字是 2的53次方
   9007199254740992+1 == Math.pow(2,53)  js中 结果是true
   axios 会处理响应数据的时候, 默认会进行JSON.parse()的处理 丢失精度,不让aioxs帮我们处理了,自己来处理
 -->
<!-- 在home中封装的子组件自己调用，导入挂载插入home -->
  <div class="articlelist">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
    <!-- list没有请求之前是一个:key可以绑定一个item请求渲染之后items是一个对象的id所以要存储一个虚拟dom -->
    <van-cell v-for="item in list" :key="item.art_id.toString()" >
      <!-- 标题使用插槽slot -->
      <template #title>
        <span class="custom-title">{{item.title}}</span>
      </template>
      <!-- 标题下放的内容插槽 -->
      <template #label>
        <!-- 通过宫格grid来摆放图片 -->
        <van-grid :column-num="item.cover.images.length">
         <van-grid-item v-for="(img, index) in item.cover.images" :key="index" icon="photo-o" text="文字" >
           <!-- 图片路径是遍历得到的所以src要加v-bind动态属性 -->
           <!-- 使用图片赖加载 只有当这张图片处于可见区域（或者是快了接近）时，才去设置src属性去求图片。-->
           <van-image lazy-load :src="img" />
         </van-grid-item>
        </van-grid>
        <!-- 放内容评论 -->
        <div class="meta">
          <span>{{item.aut_name}}</span>
          <span>{{item.comm_count}}评论</span>
          <span>{{ item.pubdate | relative }}</span>
          <span>{{updatetime}}</span>
        </div>
      </template>
    </van-cell>
    <!-- 根据请求的数据图片文字通过宫格渲染Gird-image -->
    <!-- <p>文章列表信息--{{channel}}--{{Math.random()}}</p> -->
   </van-list>
      <!-- list的vant组件
      1，页面一进来就加载。判断当前的数据是否沾满整个屏幕
      2，如果屏幕没有被数据沾满，会立即执行load事件，当loading事件触发时会自动将loading设置为true, 一次@load事件执行完之后，需要手动设置成false
      3,：finished 判断数据是否加载完毕 如果加载完毕将false 变成true
      4；finished-text 数据加载完毕后的提示文本
       -->
  </div>
</template>

<script>
import { reqGetArticles } from '@/api/article'
import { getRelativeTime, formatTime } from '@/utils/date-time'
export default {
  // 接受home组件传递过来的item数据
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  name: 'ArticleList',
  data () {
    return {
      list: [], // 数据流
      loading: false, // 控制加载
      finished: false, // 控制加载提示
      timestamp: null, // 时间戳
      updatetime: ''
    }
  },
  created () {
    console.log(getRelativeTime(+new Date())) // 几秒前
    console.log(formatTime(+new Date())) // 28/02/2021
    this.updatetime = formatTime(+new Date())
  },
  methods: {
    // 演示代码
    // onLoad () {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1)
    //     }
    //     // 加载状态结束
    //     this.loading = false
    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true
    //     }
    //   }, 1000)
    // }
    // 请求文章列表渲染列表 onLoad加载执行
    async onLoad () {
      // 异步更新数据
      console.log('当前数据的条数', this.list.length, '加载新数据')
      // 判断
      if (!this.timestamp) {
        this.timestamp = +new Date()
      }
      // 报错由于时间戳太大用vue的
      const { data } = await reqGetArticles(this.channel.id, this.timestamp)
      console.log(data) // [1,2] [3,4]   [1,2,[3,4],[5,6]]
      // 1,更新时间戳 第一次请求结束之后,返回结果中会有历史指定的时间戳,将指定的时间戳赋值给this.timestamp
      this.timestamp = data.data.pre_timestamp
      // 2将结果推送给list列表
      const listarr = data.data.results
      // 通过展开运算符追加更新的数组项到数据流列表中
      this.list = [...this.list, ...listarr]
      console.log(this.list)
      //  3. 判断是否完全加载完了, 如果是, 把finished改成true
      this.loading = false
      if (listarr.length === 0) {
        this.finished = true
      }
    }
  }
}
</script>

<style lang='scss' scoped>
  .articlelist {
    ::v-deep {
      .van-cell {
        .custom-title {
          font-family: 700;
          font-size: 15px;
          color: green;
       }
      }
      .meta {
        span {
         margin-right: 10px;
        }
     }
    }
  }
</style>
