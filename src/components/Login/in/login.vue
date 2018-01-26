<template>
  <div>
    <div class="header">
      <div class="header_content">登录</div>
    </div>
    <div class="login">
      <div class="username">
        <input type="text" v-model="username" placeholder="用户名">
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="请输入密码">
      </div>

      <div class="loginButton">
        <a class="">忘记密码？</a>
        <button>登录</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        username: null,
        password: null
      }
    },
    methods: {
      login() {
        if (this.password == null) {
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    color white
    height 44px
    background-color #00ccff
    display flex
    line-height 44px
    text-align center
    margin-bottom 90px
    .header_content
      flex: 1

  .username, .password
    margin-top 30px
    padding 0px 10px
    height 40px
    & > input
      border-radius 5px
      border 1px solid rgba(7, 17, 27, 0.2)
      line-height 40px
      width 100%

  .loginButton
    margin-top 50px
    padding 0px 10px
    height 44px
    & > button
      color white
      background-color #00ccff
      border-radius 22px
      line-height 44px
      width 100%
      outline none
      border 1px solid #00ccff
    & > a
      display block
      float right
      margin-bottom 20px


</style>
