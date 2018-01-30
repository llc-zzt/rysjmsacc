<template>
  <transition name="showUser">
    <div class="username" v-show="showFlag">
      <p class="close" @click="hide">关闭</p>
      <input :name="updateName.data" v-model.trim="userData.data" class="content">
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      userData: Object,
      updateName: Object
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
    .content
      position absolute
      width 100%
      padding 8px
      margin-top 40px
      border-top 1px solid rgba(0, 0, 0, 0.1)
      border-bottom 1px solid rgba(0, 0, 0, 0.1)
</style>
