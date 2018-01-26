<template>
  <div id="foot">
    <div class="foot-items">
      <router-link to="/message">消息</router-link>
    </div>
    <div class="foot-items">
      <router-link to="/work">工作</router-link>
    </div>
    <div class="foot-items">
      我的
    </div>
  </div>
  <div>
    <router-view></router-view>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">

  #foot
    position absolute
    bottom 0
    display flex
    width 100%
    height 40px
    text-align center
    border-top 1px solid #000
    .foot-items
      flex 1
      line-height 40px
</style>
