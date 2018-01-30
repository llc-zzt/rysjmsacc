<template>
  <div class="showPer">
    <transition name="showPer">
      <div class="per-wrapper" v-show="showFlag">
        <form method="post" action="#" enctype="multipart/form-data">
          <title_line title_font="银行卡信息"></title_line>
          <div v-for="(wallet,index) in user.bankInfo" class="per border-1px-bottom" @click="showBank(index)">
            <div class="title">{{wallet.bank}}</div>
            <div class="name">{{wallet.accountName}}</div>
            <div class="number">尾号{{wallet.bankNum}}</div>
            <i class="icon-arrow_right"></i>
          </div>
        </form>
      </div>
    </transition>
    <updateWallet ref="updateWallet" :bankInfo="bankInfo" @accomplish="accomplish"></updateWallet>
  </div>
</template>

<script type="text/ecmascript-6">
  import title_line from '../model/title_line'
  import updateWallet from '../updateWallet/updateWallet'

  export default {
    props: {
      user: {
        type: Object
      }
    },
    mounted() {

    },
    methods: {
      show() {
        this.showFlag = true
      },
      hide() {
        this.showFlag = false
        this.$refs.updateWallet.hidden()
      },
      showBank(index) {
        this.bankInfo = this.user.bankInfo[index]
        this.$refs.updateWallet.show()
      },
      accomplish(event) {
        this.$emit('accomplish', event.target)
      }
    },
    data() {
      return {
        showFlag: false,
        bankInfo: {}
      }
    },
    components: {
      title_line,
      updateWallet
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixin.styl"

  .showPer
    .per-wrapper
      position absolute
      top 44px
      left 0
      width 100%
      margin-bottom 30px
      &.showPer-enter-active, &.showPer-leave-active
        transition all 0.5s
      &.showPer-enter, &.showPer-leave-to
        left 100%
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
        .name
          flex 1
          display inline-block
          position absolute
          height 40px
          line-height 40px
          right 20px
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
        .icon-arrow_right
          position absolute
          line-height 40px
          height 40px
          right 0px
          font-size 20px
</style>
