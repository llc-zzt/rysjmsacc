<template>
  <transition name="showUser">
    <div class="username" v-show="showFlag" ref="userInfo">
      <p class="close" @click="hide">关闭</p>
      <div class="dateWrapper">
        <input name="month" v-model="month.data" class="month">
        <span>-</span>
        <input name="day" v-model="day.data" class="day">
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      userData: Object,
      month: Object,
      day: Object
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

  .username
    position fixed
    height 100px
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
    .dateWrapper
      position absolute
      line-height 100px
      width 100%
      text-align center
      .month
        position relative
        width 10%
        padding 8px
        margin-top 40px
        text-align center
        border-top 1px solid rgba(0, 0, 0, 0.1)
        border-bottom 1px solid rgba(0, 0, 0, 0.1)
      .day
        position relative
        width 10%
        padding 8px
        margin-top 40px
        text-align center
        border-top 1px solid rgba(0, 0, 0, 0.1)
        border-bottom 1px solid rgba(0, 0, 0, 0.1)
</style>
