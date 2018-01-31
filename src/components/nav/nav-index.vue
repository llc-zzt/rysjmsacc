<template>
  <div id="nav">
    <div class="nav-items">
      <router-link to="/message" active-class="active" replace>
        <div class="nav-bottom">
          <i class="icon-message"></i>
          <span class="nav-message">信息</span>
        </div>
      </router-link>
    </div>
    <div class="nav-items">
      <router-link to="/work" active-class="active" replace>
        <div class="nav-bottom">
          <i class="icon-app"></i>
          <span class="nav-message">工作</span>
        </div>
      </router-link>
    </div>
    <div class="nav-items">
      <router-link to="/myself" active-class="active" replace>
        <div class="nav-bottom">
          <i class="icon-myhome"></i>
          <span class="nav-message">我的</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixin.styl"

  #nav
    border-1px-top(rgba(7, 17, 27, 0.1))
    position absolute
    bottom 0
    display flex
    width 100%
    background-color #fff
    height 50px
    .nav-items
      flex 1
      text-align center
      .nav-bottom
        height 48px
        i
          font-size 26px
          padding-top 5px
          display block
        .nav-message
          line-height 17px
          text-align center
          font-size 12px
          display block
      & > a
        display block
        color rgb(77, 85, 93)
        &.active
          color #00CCFF
          .nav-message
            font-size 14px
</style>
