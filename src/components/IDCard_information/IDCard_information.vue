<template>
  <div class="showPer">
    <transition name="showPer">
      <div class="per-wrapper" v-show="showFlag">
        <form method="post" action="#" enctype="multipart/form-data">
          <title_line title_font="实名认证"></title_line>
          <div class="per border-1px-bottom">
            <div class="title">姓名</div>
            <div class="name">
              <input class="val" name="name" value="" placeholder="姓名:">
            </div>
          </div>
          <div class="per border-1px-bottom">
            <div class="title">身份证号码</div>
            <div class="name">
              <input class="val" name="name" value="" placeholder="身份证号码:">
            </div>
          </div>
          <div class="per border-1px-bottom">
            <div class="title">地址</div>
            <div class="name">
              <input class="val" name="name" value="" placeholder="地址:">
            </div>
          </div>
          <div class="per border-1px-bottom">
            <div class="title">出生日期</div>
            <div class="content">
              <input class="birthday" name="name" value="" placeholder="年">
              <span>-</span>
              <input class="birthday" name="name" value="" placeholder="月">
              <span>-</span>
              <input class="birthday" name="name" value="" placeholder="日">
            </div>
          </div>
          <div class="IDImg">
            <div class="title">身份证照片</div>
            <div class="imgA">
              <input v-show="showImgA" ref="imgA" name="imgA" type="file" accept="image/*" @change="getImgA">
              <img v-show="!showImgA" :src="IDImgA">
            </div>
            <div class="imgB">
              <input v-show="showImgB" ref="imgB" name="imgA" type="file" accept="image/*" @change="getImgB">
              <img v-show="!showImgB" :src="IDImgB">
            </div>
          </div>
          <div class="submit">
            <button type="submit">提交</button>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import title_line from '../model/title_line'

  export default {
    props: {
      IDCard: {
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
      },
      accomplish(event) {
        this.$emit('accomplish', event.target)
      },
      getImgA() {
        this.IDImgA = this.$refs.imgA.value
        this.showImgA = false
      },
      getImgB() {
        this.IDImgB = this.$refs.imgB.value
        this.showImgB = false
      }
    },
    data() {
      return {
        showFlag: false,
        IDImgA: String,
        IDImgB: String,
        showImgA: true,
        showImgB: true
      }
    },
    components: {
      title_line
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
      .IDImg
        width 90%
        display flex
        height 50px
        position relative
        padding-top 10px
        margin 0 auto
        margin-top 10px
        .imgA
          position absolute
          left 0
          top 45px
          width 100%
          height 100px
          background #f3f5f7
          border-radius 10px
          font-size 12px
          & > input
            margin-left 42%
            line-height 100px
            width 65px
            z-index 2
          & > img
            position absolute
            top 0
            left 0
            border-radius 10px
            width 100%
            height 100%
            border 0
            z-index 1
        .imgB
          position absolute
          left 0
          top 165px
          width 100%
          height 100px
          border-radius 10px
          background #f3f5f7
          font-size 12px
          & > input
            margin-left 42%
            line-height 100px
            width 65px
            z-index 2
          & > img
            position absolute
            top 0
            left 0
            border-radius 10px
            width 100%
            height 100%
            border 0
            z-index 1
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
        .content
          flex 1
          display inline-block
          position absolute
          height 40px
          line-height 40px
          right 30px
          .val
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
        .icon-arrow_right
          position absolute
          line-height 40px
          height 40px
          right 0px
          font-size 20px
      .submit
        position relative
        top 230px
        left 0
        width 100%
        height 40px
        background #00ccff
        text-align center
        line-height 40px
        & > button
          width 100%
          height 40px
          font-size 18px
          color #ffffff

</style>
