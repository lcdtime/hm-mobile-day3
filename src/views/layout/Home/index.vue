<template>
  <div class="home-container">
    <van-tabs v-model="active">
      <van-tab title="标签 1">
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 5">内容 5</van-tab>
      <van-tab title="标签 6">内容 6</van-tab>
      <van-tab title="标签 7">内容 7</van-tab>
      <van-tab title="标签 8">内容 8</van-tab>
      <van-tab title="标签 9">内容 9</van-tab>
      <van-tab title="标签 10">内容 10</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'HomeIndex',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" scoped>
// 加了scoped, 样式, 只会作用于当前组件模板
// scoped属性是保证处理当前组件的样式的, 不加scoped属性样式会作用到全局,样式污染
// 在组件中设置样式开启scoped 是默认不会向下穿透的
// 深度选择器 scss中::v-deep {}, 设置深度选择器,样式向下穿透
// less中深度选择器 是  /deep/
// css中的深度选择器 >>>
  .home-container {
    // ::v-deep 开启深度// 深度作用选择器 ::v-deep (sass)  /deep/ (less)  >>> (css)
    ::v-deep {
      .van-tabs__line {
        background-color: red;
      }
    }
  }
</style>
