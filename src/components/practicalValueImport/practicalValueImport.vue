<template>
  <div class="per-wrapper">
    <div class="per border-1px-bottom">
      <div class="title">{{title}}</div>
      <div class="content">
        <input ref="pla" class="val" :name="name" value="" placeholder="请输入">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: String,
      name: String,
      placeholder: String
    },
    data () {
      return {
        pla: this.placeholder
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$refs.pla.placeholder = this.placeholder
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixin.styl"

  .per-wrapper
    position relative
    top 10px
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
        flex 0 0 80px
        height 40px
        line-height 40px
      .content
        flex 1
        display inline-block
        position absolute
        height 40px
        line-height 40px
        right 0px
        .val
          flex 1
          width 100%
          display inline-block
        .birthday
          width 40px
          text-align center
        .avatar
          border-radius 50%
          width 40px
          height 40px
      .number
        flex 1
        display inline-block
        position relative
        height 40px
        line-height 40px
        left 5px
</style>
