<template>
  <div class="myself-box">
    <div class="myself-header">
      <i class="icon-arrow_left" v-show="!myself" @click="back"></i>
      <p>{{title}}</p>
      <span v-show="submit" @click="submitInfo" class="accomplish">完成</span>
    </div>
    <transition name="hideNav">
      <div class="content-wrapper" v-show="myself">
        <div class="myself-message">
          <div class="myself-message-box">
            <div class="myself-name">
              <p>{{info.data.user.username}}</p>
              <div class="myself-avatar">
                <p>{{info.data.user.age}}</p>
              </div>
            </div>
            <div class="myself-position">
              <transition name="showDept">
                <div class="position-name" v-show="phoneFlag">
                  <p>{{info.data.dept.deptName}}</p>
                  <i class="icon-arrow_right"></i>
                  <p>{{info.data.user.position}}</p>
                </div>
              </transition>
              <transition name="showIcon">
                <i v-show="phoneFlag" class="icon-phone phone-right" @click="showPhone"></i>
              </transition>
              <i v-show="!phoneFlag" class="icon-app phone-right" @click="showPhone"></i>
              <div class="phone-number" v-show="!phoneFlag">{{info.data.user.phone}}</div>
            </div>
            <div v-show="info.data.user.status===1" class="myself-work-status">
              <span class="work-status-on"></span>
              <p class="status-message">在职</p>
            </div>
            <div v-show="info.data.user.status===0" class="myself-work-status">
              <span class="work-status-off"></span>
              <p class="status-message">离职</p>
            </div>
          </div>
        </div>
        <div class="my-wrapper" ref="wrapper">
          <ul class="myself-content">
            <li class="myself-items" @click="showPer">
              <div class="functionList">
                <div class="functionImg">
                  <div class="functionImgBox">
                    <i class="icon-favorite"></i>
                  </div>
                </div>
                <div class="functionContent">
                  <p>个人信息</p>
                  <i class="icon-arrow_right"></i>
                </div>
                <div class="functionClear"></div>
              </div>
            </li>
            <li class="myself-items" @click="showDept">
              <div class="functionList">
                <div class="functionImg">
                  <div class="functionImgBox">
                    <i class="icon-favorite"></i>
                  </div>
                </div>
                <div class="functionContent">
                  <p>部门信息</p>
                  <i class="icon-arrow_right"></i>
                </div>
                <div class="functionClear"></div>
              </div>
            </li>
            <li class="myself-items" @click="showWallet">
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
            <li class="myself-items" @click="showIDCard">
              <div class="functionList">
                <div class="functionImg">
                  <div class="functionImgBox">
                    <i class="icon-favorite"></i>
                  </div>
                </div>
                <div class="functionContent">
                  <p>实名认证</p>
                  <i class="icon-arrow_right"></i>
                </div>
                <div class="functionClear"></div>
              </div>
            </li>
          </ul>
        </div>
        <navIndex></navIndex>
      </div>
    </transition>
    <personalInformation ref="perIn" :user="info.data.user" @accomplish="accomplish"></personalInformation>
    <dept_information ref="dept" :dept="info.data.dept" @accomplish="accomplish"></dept_information>
    <wallet_information ref="wallet" :user="info.data.user" @accomplish="accomplish"></wallet_information>
    <IDCard_information ref="IDCard" :IDCard="info.data.user.IDCard" @accomplish="accomplish"></IDCard_information>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import navIndex from '../nav/nav-index'
  import personalInformation from '../personal_information/personal_information'
  import dept_information from '../dept_information/dept_information'
  import wallet_information from '../wallet_information/wallet_information'
  import IDCard_information from '../IDCard_information/IDCard_information'

  export default {
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
      })
    },
    components: {
      navIndex,
      personalInformation,
      dept_information,
      wallet_information,
      IDCard_information
    },
    data() {
      return {
        info: {
          code: 0,
          msg: '成功',
          data: {
            user: {
              id: 1,
              username: 'sanye',
              phone: '18145032533',
              age: 21,
              birthday: '07-24',
              avatar: 'http://........png',
              bankInfo: [
                {
                  bank: '中国银行',
                  accountName: 'sanye',
                  bankNum: '2222'
                },
                {
                  bank: '中国银行',
                  accountName: 'sanye',
                  bankNum: '1111'
                }
              ],
              IDCard: {
                name: 'sanye',
                IDCardNum: '511000000000000',
                address: '四川**********号',
                brithDate: '1490171219',
                cardImgA: '123456.jpg',
                cardImgB: '654321.jpg'
              },
              position: '程序员',
              status: 0
            },
            dept: {
              id: 1,
              deptNo: '123',
              deptName: '开发部'
            }
          }
        },
        phoneFlag: true,
        myself: true,
        title: '成都荣耀世纪',
        submit: false
      }
    },
    methods: {
      showPhone() {
        this.phoneFlag = !this.phoneFlag
      },
      showPer(event) {
        if (!event._constructed) {
          return
        }
        this.myself = false
        this.$refs.perIn.show()
      },
      back() {
        this.myself = true
        this.$refs.perIn.hide()
        this.$refs.dept.hide()
        this.$refs.wallet.hide()
        this.$refs.IDCard.hide()
      },
      accomplish() {
        this.submit = true
      },
      submitInfo() {
        this.submit = false
        this.$refs.perIn.submit
        this.$refs.wallet.submit
      },
      showDept() {
        if (!event._constructed) {
          return
        }
        this.myself = false
        this.$refs.dept.show()
      },
      showWallet() {
        if (!event._constructed) {
          return
        }
        this.myself = false
        this.$refs.wallet.show()
      },
      showIDCard() {
        if (!event._constructed) {
          return
        }
        this.myself = false
        this.$refs.IDCard.show()
      }
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
      .icon-arrow_left
        position absolute
        top 0
        left 0
        color #ffffff
        line-height 44px
        margin-left 10px
      .accomplish
        position absolute
        top 0
        right 10px
        line-height 44px
        color #ffffff
        font-size 14px
    .content-wrapper
      width 100%
      &.hideNav-enter-active, &.hideNav-leave-active
        transition all 0.5s
        margin-left 0px
      &.hideNav-enter, &.hideNav-leave-to
        margin-left -100%
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
              opacity 1
              &.showDept-enter-active, &.showDept-leave-active
                transition all 0.2s
              &.showDept-enter, &.showDept-leave-to
                margin-left -100%
                opacity 0
              & > p
                display inline-block
            .phone-right
              float right
              line-height 40px
              text-align center
              opacity 1
              &.showIcon-enter-active, &.showIcon-leave-active
                transition all 0.02s
              &.showIcon-enter, &.showIcon-leave-to
                opacity 0
            .phone-number
              display inline-block
              position absolute
              margin-top 12px
              letter-spacing 1px
              opacity 1
          .myself-work-status
            height 45px
            line-height 45px
            margin 0 20px
            .work-status-on
              height 16px
              width 16px
              display inline-block
              border-radius 8px
              background-color #009fed
            .work-status-off
              height 16px
              width 16px
              display inline-block
              border-radius 8px
              background #FF3232
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
