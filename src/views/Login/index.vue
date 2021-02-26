<template>
  <div class="login">
    <!-- 导航条 -->
    <van-nav-bar title="登录" />
    <!-- 输入框
    error-message="验证码格式错误" 校验失败的错误提示
    -->
    <van-cell-group>
      <van-field
        v-model="mobile"
        required
        label="手机号"
        placeholder="请输入手机号"
        :error-message="errorMobileText"
        @input="validate"
      />
      <van-field
        v-model="code"
        required
        label="验证码"
        placeholder="请输入验证码"
        :error-message="errorCodeText"
        @input="validate"
      />
    </van-cell-group>
    <!-- 提交按钮 -->
    <div class="login-wrap">
      <van-button class="login-btn" type="info" @click="login">登录</van-button>
    </div>
    <van-button @click="getinfo">获取信息</van-button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
// 导入登录模块api
import { reqLogin, getproInfo, reqGetFollowings } from '@/api/user'
export default {
  // 组件添加name属性方便后期调试工具中查找
  name: 'Login',
  data () {
    return {
      mobile: '17611183627',
      code: '246810',
      errorMobileText: '', // 手机号验证失败的提示文本
      errorCodeText: '' // 验证码验证失败的提示文本
    }
  },
  methods: {
    // ----可以通过映射方法----mapMutation(模块名，[]mutations名)
    ...mapMutations('user', ['getTokenInfo']),
    // 表单验证
    validate () {
      // 手机号非空校验
      if (this.mobile.trim().length === 0) {
        this.errorMobileText = '手机号不能为空'
        return false
      }
      // 验证码的非空校验 放到手机号码验证完之后，否者但他们为空时，直接执行这一步
      // 手机号的合法(11位)
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.errorMobileText = '请输入合法的手机号'
        return false
      }
      // 清空报错
      this.errorMobileText = ''
      // 验证码非空验证
      if (this.code.trim().length === 0) {
        this.errorCodeText = '验证码不能为空'
        return false
      }
      // 验证码的合法(6位数字)
      if (!/^\d{6}$/.test(this.code)) {
        this.errorCodeText = '请输入正确的验证码'
        return false
      }
      // 输入框输入实时校验 如果以上4个分支都没有经过,输入的是合法,直接将提示文本清空
      this.errorCodeText = ''
      return true
      // validate最终给一个返回值, 判断这个返回值是否true,如果是true,发送请求,反之,就不发送
    },
    // 登录功能
    async login () {
      // 不要让用户频繁点击登录按钮
      this.$toast.loading({
        message: '登录中...', // 提示文本
        forbidClick: true, // 禁止背景点击
        overlay: true, // 显示遮罩
        duration: 0 // 展示时长(ms)，值为 0 时，toast 不会消失,默认显示2s
      })
      // 在发送请求之前输入框值得合法验证
      if (this.validate()) {
        // 携带参数,发送请求
        // const data = await this.$http({
        //   method: 'POST',
        //   url: 'v1_0/authorizations',
        //   data: {
        //     mobile: this.mobile,
        //     code: this.code
        //   }
        // })
        // console.log(data)
        const { data } = await reqLogin(this.mobile, this.code)
        console.log(data)
        // 提交一下token给模块库 提交给mutations
        // this.$store.commit('getTokenInfo', data.data)
        this.getTokenInfo(data.data)
        // 再去开启一个toast将第一个toast层叠 toast 默认采用单例模式，即同一时间只会存在一个 Toast
        this.$toast.success('登录成功')
        // 跳转页面
        this.$router.push('/')
      }
    },
    // 测试获取个人信息
    async getinfo () {
      const resinfo = await getproInfo()
      console.log(resinfo)
    },
    // 测试关注列表
    async getFollowings () {
      const data = await reqGetFollowings()
      console.log(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  padding: 20px;
  .login-btn {
    width: 100%;
    border-radius: 5px;
  }
}
</style>
