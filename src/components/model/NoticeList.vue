<template>
  <router-link class="message-items" to="/notice/detail/1">
    <img src="../../components/message/avatar1.png" width="60px" height="60px">
    <div>
      <span class="title">公告</span>
      <span class="content">三爷很累</span>
    </div>
    <div class="message-bottom">
      <span class="message-time">04:39</span>
    </div>
  </router-link>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixin.styl"
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
        line-height 60px
        display block
        margin-right 12px
        font-size 14px
        color #7e8c8d


</style>
