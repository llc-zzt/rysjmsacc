<template>
  <div id="header">
    <div class="back_logo" @click="backUrl"><i class="icon-arrow_left"></i></div>
    <div class="header_content">{{HData.title}}</div>
    <div class="header_bottom"><span v-if="HData.name != null" @click="go('/'+HData.url)">{{HData.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      HData: {
        default: 'null'
      }
    },
    methods: {
      backUrl() {
        this.$router.go(-1)
      },
      go(url) {
        this.$router.push({path: url})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  #header
    color white
    height 44px
    background-color #00ccff
    display flex
    line-height 44px
    text-align center
    .back_logo
      flex: 0 0 40px
    .header_content
      flex: 1
    .header_bottom
      flex: 0 0 60px
</style>
