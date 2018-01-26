<template xmlns:v-if="http://www.w3.org/1999/xhtml">
  <div id="app">
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/styl/mixin.styl"
  #app
    .router-view
      background-color #fff
</style>
