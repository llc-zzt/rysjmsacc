<template>
  <div class="per-wrapper" @click="show">
    <div class="per border-1px-bottom">
      <div class="title">{{title}}</div>
      <div class="name">{{value}}</div>
      <i v-show="showIcon" class="icon-arrow_right"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: String,
      value: String,
      showIcon: false,
      butt: String
    },
    data () {
      return {}
    },
    methods: {
      show (event) {
        this.$emit(this.butt,event.target)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixin.styl"

  .per-wrapper
    position relative
    top 44px
    left 0
    width 100%
    .per
      width 90%
      display flex
      height 50px
      position relative
      padding-top 10px
      margin 0 auto
      border-1px-bottom rgb(170, 170, 170)
      .title
        display inline-block
        flex 0 0 40px
        height 40px
        line-height 40px
      .name
        flex 1
        display inline-block
        position absolute
        height 40px
        line-height 40px
        right 20px
        .avatar
          border-radius 50%
          width 40px
          height 40px
          z-index 1
        & > input
          font-size 0
          position absolute
          width 100%
          height 100%
          top 0
          left 0
          z-index 10
      .icon-arrow_right
        position absolute
        line-height 40px
        height 40px
        right 0px
        font-size 20px
</style>
