<template>
  <div>
    <v-header :HData="HData"></v-header>
    <div class="notice" ref="wrapper">
      <div class="noticeTitle">
        <input type="text" placeholder="公告标题"/>
      </div>
      <div class="noticeAuthor">
        <input type="text" placeholder="作者（选填）">
      </div>
      <div class="noticeContent">
        <textarea></textarea>
      </div>
    </div>
    <div class="noticeNav">
      <label><i class="icon-box-add"></i></label>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '@/components/header/header.vue'
  export default {
    components: {
      'v-header': header
    },
    data() {
      return {
        HData: {
          name: '下一步', // 下一步
          title: '发公告',
          url: null
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixin.styl"
  .notice
    position absolute
    top 44px
    bottom 44px
    width 100%
    .noticeTitle
      line-height 40px
      margin 20px 10px 10px 10px
      border-1px-bottom(rgba(7, 17, 27, 0.2))
      & > input
        width 100%
    .noticeAuthor
      margin 20px 10px 10px 10px
      border-1px-bottom(rgba(7, 17, 27, 0.2))
      line-height 40px
      & > input
        width 100%
    .noticeContent
      margin 20px 10px 10px 10px
      border-1px-bottom(rgba(7, 17, 27, 0.2))
      height auto
      & > textarea
        width 100%
        resize none
        border none
        font-size 16px
        height auto
        height 300px

  .noticeNav
    border-1px-top(rgba(7, 17, 27, 0.2))
    position absolute
    bottom 0px
    height 43px
    line-height 43px
    width 100%
    color #00ccff
    & > label
      margin 0 10px
</style>
