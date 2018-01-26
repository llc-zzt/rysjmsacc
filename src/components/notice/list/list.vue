<template>
  <div>
    <div>
      <v-header :HData="HData"/>
    </div>
    <div class="noticeNav">
      <div class="noticeNavTab">
        <router-link to="/notice/list/read" active-class="active" replace>已读</router-link>
      </div>
      <div class="noticeNavTab">
        <router-link to="/notice/list/unread" active-class="active" replace>未读</router-link>
      </div>
    </div>
    <div class="noticeWrapper" ref="wrapper">
      <router-view></router-view>
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
          name: '新建',
          title: '公告',
          url: 'notice'
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/styl/mixin.styl"
  .noticeNav
    width 100%
    height 40px
    display flex
    .noticeNavTab
      flex 1
      line-height 40px
      text-align center
      border-1px-bottom(rgba(7, 17, 27, 0.1))
      & > a
        display block
        color rgb(77, 85, 93)
        &.active
          color #00CCFF
          border-1px-bottom(#00CCFF)
    .noticeWrapper
      position absolute
      top 85px
</style>
