<template>
  <div id="message">
    <div class="message-header">
      <p>信息</p>
      <i class="icon-contact"></i>
    </div>
    <div class="search">
      <div class="search-bars">
        <i class="icon-search search-logo"></i>
        <input type="select" placeholder="search">
        <i class="icon-mic search-bottom"></i>
      </div>
    </div>
    <div class="message-content" ref="wrapper">
      <ul>
        <li>
          <router-link class="message-items" to="/message/chat/1">
            <img src="../../components/message/avatar1.png" width="60px" height="60px">
            <div>
              <span class="title">如何正确使用Vue.js的组件</span>
              <span class="content">better-scroll 对外暴露了一个 BScroll 的类，我们初始化只需要 new 一个类的实例即可。第一个参数就是我们 wrapper 的 DOM 对象，第二个是一些配置参数，具体参考 better-scroll</span>
            </div>
            <div class="message-bottom">
              <span class="message-time">04:39</span>
              <span class="message-count">
                <span class="count-background">5</span>
              </span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <navIndex></navIndex>
  </div>

</template>

<script type="text/ecmascript-6">
  import navIndex from '../../components/nav/nav-index.vue'
  import BScroll from 'better-scroll'
  export default {
    components: {
      navIndex
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixin.styl"
  #message
    width 100%
    .message-header
      color white
      height 44px
      background-color #00CCFF
      & > p
        display inline-block
        line-height 44px
        text-align center
        margin-left 10px
      & > i
        float right
        margin-right 12px
        color #fff
        line-height 44px
        font-size 16px
    .search
      height 52px
      .search-bars
        background-color rgba(142, 142, 147, 0.12)
        border-radius 20px
        height 36px
        margin 8px
        display flex
        .search-logo
          font-size 14px
          color #8e8e93
          flex 0 0 30px
          text-align center
          line-height 36px
        & > input
          flex 1
          display inline-block
          font-size 16px
          background-color rgba(142, 142, 147, 0)
          outline none
        .search-bottom
          color #8e8e93
          text-align center
          line-height 36px
          font-size 14px
          flex 0 0 30px
    .message-content
      width 100%
      overflow hidden
      position absolute
      top 96px
      bottom 40px
      ul
        li
          border-1px-bottom(rgba(7, 17, 27, 0.1))
          line-height 80px
          .message-items
            display flex
            height 80px
            img
              border-radius 5px
              text-align center
              margin 10px
              flex: 0 0 60px
            & > div
              flex 1
              width 100%
              margin 10px 0px
              .title
                line-height 30px
                display block
                font-size 16px
                height 30px
                color #333
              .content
                margin-bottom 10px
                height 30px
                width 225px
                line-height 30px
                display block
                font-size 14px
                color #9f9f9f
                overflow hidden
                text-overflow ellipsis
                -o-text-overflow: ellipsis
                white-space: nowrap
                -webkit-line-clamp: 1
                -webkit-box-orient: vertical
            .message-bottom
              flex: 0 0 60px
              .message-time
                line-height 30px
                display block
                margin-right 12px
                font-size 14px
                color #7e8c8d
              .message-count
                line-height 30px
                display block
                text-align center
                font-size 14px
                color #7e8c8d
                .count-background
                  display inline-block
                  line-height 16px
                  text-align center
                  margin-right 12px
                  margin-top 7px
                  height 16px
                  width 16px
                  color #fff
                  border-radius 8px
                  background-color red


</style>
