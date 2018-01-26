<template>
  <div class="appList">
    <div class="appList-title">
      <p>{{AppList.name}}</p>
    </div>
    <div class="appList-content">
      <a class="appList-items" v-for="item in AppList.list" @click="goTo('/'+item.goToUrl)">
        <div :class="'color_'+item.color"><p>{{item.key}}</p></div>
        <span>{{item.name}}</span>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['AppList'],
    methods: {
      goTo(url) {
        this.$router.push({path: url})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixin.styl"
  .appList
    width 100%
    border-1px-bottom(rgba(7, 17, 27, 0.1))
    .appList-title
      height 40px
      & > p
        line-height 40px
        margin-left 10px
        font-size 14px
        font-weight bold
    .appList-content
      display flex
      flex-flow wrap
      margin 0 20px
      .appList-items
        display block
        width 83px
        margin 5px 0px
        z-index 100
        text-align center
        .color_1
          background-color rgb(255, 180, 68)
        .color_2
          background-color rgb(80, 227, 194)
        .color_3
          background-color rgb(105, 174, 255)
        .color_4
          background-color rgb(255, 76, 153)
        & > div
          height 40px
          width 40px
          color #ffffff
          display inline-block
          border-radius 3px
          & > p
            line-height 40px
            font-size 20px
            text-align center
        & > span
          line-height 20px
          font-size 12px
          display block
</style>
