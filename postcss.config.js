module.exports = {
  plugins: {
    'postcss-pxtorem': { // 我们书写的是px单位,插件帮我们转换成rem单位
      // 依据37.5分配 ,默认是以375设计稿分成了10份
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
