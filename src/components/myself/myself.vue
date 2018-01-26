<template>
  <div class="myself-box">
    <div class="myself-header">
      <p>我的</p>
    </div>
    <div class="myself-message">
      <div class="myself-message-box">
        <div class="myself-name">
          <p>程序员</p>
          <div class="myself-avatar">
            <p>码农</p>
          </div>
        </div>
        <div class="myself-position">
          <div class="position-name">
            <p>开发部</p>
            <i class="icon-arrow_right"></i>
            <p>程序员</p>
          </div>
          <i class="icon-phone phone-right"></i>
        </div>
        <div class="myself-work-status">
          <span class="work-status"></span>
          <p class="status-message">在职</p>
        </div>
      </div>
    </div>
    <div class="my-wrapper" ref="wrapper">
      <ul class="myself-content">
        <li class="myself-items">
          <div class="functionList">
            <div class="functionImg">
              <div class="functionImgBox">
                <i class="icon-favorite"></i>
              </div>
            </div>
            <div class="functionContent">
              <p>我的钱包</p>
              <i class="icon-arrow_right"></i>
            </div>
            <div class="functionClear"></div>
          </div>
        </li>
        <li class="myself-items">
          <div class="functionList">
            <div class="functionImg">
              <div class="functionImgBox">
                <i class="icon-favorite"></i>
              </div>
            </div>
            <div class="functionContent">
              <p>我的钱包</p>
              <i class="icon-arrow_right"></i>
            </div>
            <div class="functionClear"></div>
          </div>
        </li>
        <li class="myself-items">
          <div class="functionList">
            <div class="functionImg">
              <div class="functionImgBox">
                <i class="icon-favorite"></i>
              </div>
            </div>
            <div class="functionContent">
              <p>我的钱包</p>
              <i class="icon-arrow_right"></i>
            </div>
            <div class="functionClear"></div>
          </div>
        </li>
        <li class="myself-items">
          <div class="functionList">
            <div class="functionImg">
              <div class="functionImgBox">
                <i class="icon-favorite"></i>
              </div>
            </div>
            <div class="functionContent">
              <p>我的钱包</p>
              <i class="icon-arrow_right"></i>
            </div>
            <div class="functionClear"></div>
          </div>
        </li>
        <li class="myself-items">
          <div class="functionList">
            <div class="functionImg">
              <div class="functionImgBox">
                <i class="icon-favorite"></i>
              </div>
            </div>
            <div class="functionContent">
              <p>我的钱包</p>
              <i class="icon-arrow_right"></i>
            </div>
            <div class="functionClear"></div>
          </div>
        </li>
        <li class="myself-items">
          <div class="functionList">
            <div class="functionImg">
              <div class="functionImgBox">
                <i class="icon-favorite"></i>
              </div>
            </div>
            <div class="functionContent">
              <p>我的钱包</p>
              <i class="icon-arrow_right"></i>
            </div>
            <div class="functionClear"></div>
          </div>
        </li>
        <li class="myself-items">
          <div class="functionList">
            <div class="functionImg">
              <div class="functionImgBox">
                <i class="icon-favorite"></i>
              </div>
            </div>
            <div class="functionContent">
              <p>我的钱包</p>
              <i class="icon-arrow_right"></i>
            </div>
            <div class="functionClear"></div>
          </div>
        </li>
        <li class="myself-items">
          <div class="functionList">
            <div class="functionImg">
              <div class="functionImgBox">
                <i class="icon-favorite"></i>
              </div>
            </div>
            <div class="functionContent">
              <p>我的钱包</p>
              <i class="icon-arrow_right"></i>
            </div>
            <div class="functionClear"></div>
          </div>
        </li>
        <li class="myself-items">
          <div class="functionList">
            <div class="functionImg">
              <div class="functionImgBox">
                <i class="icon-favorite"></i>
              </div>
            </div>
            <div class="functionContent">
              <p>我的钱包</p>
              <i class="icon-arrow_right"></i>
            </div>
            <div class="functionClear"></div>
          </div>
        </li><li class="myself-items">
          <div class="functionList">
            <div class="functionImg">
              <div class="functionImgBox">
                <i class="icon-favorite"></i>
              </div>
            </div>
            <div class="functionContent">
              <p>我的钱包</p>
              <i class="icon-arrow_right"></i>
            </div>
            <div class="functionClear"></div>
          </div>
        </li>
        <li class="myself-items">
        <div class="functionList">
          <div class="functionImg">
            <div class="functionImgBox">
              <i class="icon-favorite"></i>
            </div>
          </div>
          <div class="functionContent">
            <p>我的钱包</p>
            <i class="icon-arrow_right"></i>
          </div>
          <div class="functionClear"></div>
        </div>
      </li>
      </ul>
    </div>
    <navIndex></navIndex>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import navIndex from '@/components/nav/nav-index.vue'
  export default {
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {})
      })
    },
    components: {
      navIndex
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixin.styl"
  .myself-box
    width 100%
    .myself-header
      width 100%
      height 44px
      background-color #00ccff
      text-align center
      & > p
        color #fff
        line-height 44px
    .myself-message
      margin 15px 0
      padding 0 10px

      .myself-message-box
        box-shadow 2px 3px 20px 3px rgba(7, 17, 27, 0.2)
        border-radius 4px
        border 1px solid rgba(7, 17, 27, 0.1)
        height 173px
        .myself-name
          height 48px
          margin 20px
          & > p
            font-size 24px
            display inline-block
          .myself-avatar
            float right
            height 48px
            width 48px
            border-radius 24px
            background-color rgb(105, 174, 255)
            & > p
              line-height 48px
              text-align center
              color #ffffff
        .myself-position
          margin 0 20px
          height 40px
          border-1px-bottom(rgba(rgba(7, 17, 27, 0.1)))
          .position-name
            display inline-block
            line-height 40px
            text-align center
            & > p
              display inline-block
          .phone-right
            float right
            line-height 40px
            text-align center
        .myself-work-status
          height 45px
          line-height 45px
          margin 0 20px
          .work-status
            height 16px
            width 16px
            display inline-block
            border-radius 8px
            background-color #009fed
          .status-message
            display inline-block
            margin-left 5px
            font-size 16px

    .my-wrapper
      width 100%
      overflow hidden
      position absolute
      top 242px
      bottom 40px
      .myself-items
        line-height 40px
        .functionList
          height 40px
          display flex
          .functionImg
            flex 0 0 40px
            line-height 30px
            text-align center
            .functionImgBox
              margin 10px
              height 20px
              width 20px
              text-align center
              line-height 20px
              background-color #00ccff
              border-radius 2px
              & > i
                color #ffffff
                line-height 20px
          .functionContent
            flex 1
            border-1px-bottom(rgba(rgba(7, 17, 27, 0.1)))
            & > p
              font-size 14px
              display inline-block
            & > i
              font-size 20px
              line-height 40px
              float right
          .functionClear
            flex 0 0 10px

</style>
