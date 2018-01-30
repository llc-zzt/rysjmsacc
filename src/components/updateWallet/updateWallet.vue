<template>
  <transition name="showUser">
    <div class="wallet" v-show="showFlag">
      <p class="close" @click="hide">关闭</p>
      <p class="bank">银行卡号</p>
      <input name="bankNum" v-model.trim="bankInfo.bankNum" class="content">
      <p class="bank">银行</p>
      <input name="bank" v-model.trim="bankInfo.bank" class="content">
      <p class="bank">账户名</p>
      <input name="bank" v-model.trim="bankInfo.accountName" class="content">
      <p class="bank">本月工资</p>
      <input name="wages" class="content">
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      bankInfo: {}
    },
    data() {
      return {
        showFlag: false
      }
    },
    methods: {
      show() {
        this.showFlag = true
      },
      hide(event) {
        this.showFlag = false
        this.$emit('accomplish', event.target)
      },
      hidden() {
        this.showFlag = false
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixin.styl"

  .wallet
    position fixed
    height 390px
    width 100%
    bottom 0
    left 0
    background #f3f5f7
    border-top 1px solid rgba(0, 0, 0, 0.1)
    &.showUser-enter-active, &.showUser-leave-active
      transition all 0.2s
    &.showUser-enter, &.showUser-leave-to
      margin-bottom -100%
    .close
      position absolute
      top 10px
      right 10px
      color #000
      z-index 2
      font-size 14px
    .bank
      display inline-block
      margin-top 30px
      margin-left 8px
    .content
      position relative
      width 100%
      padding 8px
      margin-top 10px
      border-top 1px solid rgba(0, 0, 0, 0.1)
      border-bottom 1px solid rgba(0, 0, 0, 0.1)
</style>
