<template>
  <div class="showPer">
    <transition name="showPer">
      <div class="per-wrapper" v-show="showFlag">
        <form method="post" action="#" enctype="multipart/form-data">
          <title_line title_font="个人信息"></title_line>
          <div class="per border-1px-bottom">
            <div class="title">头像</div>
            <div class="name" v-show="user.avatar">
              <img for="avatar" class="avatar" :src="user.avatar">
              <input type="file" name="avatar">
            </div>
            <div class="name" v-show="!user.avatar">
              <span v-show="FlagAvatar">未设置</span>
              <img v-show="!FlagAvatar" for="avatar" class="avatar" :src="showAvatar">
              <input ref="avatar" type="file" name="avatar" @change="getAvatar">
            </div>
            <i class="icon-arrow_right"></i>
          </div>
          <div class="per border-1px-bottom" @click="showUsername">
            <div class="title">姓名</div>
            <div class="name">{{user.username}}</div>
            <i class="icon-arrow_right"></i>
          </div>
          <div class="per border-1px-bottom">
            <div class="title">年龄</div>
            <div class="name">{{user.age}}</div>
          </div>
          <div class="per border-1px-bottom" @click="showPhone">
            <div class="title">手机</div>
            <div class="name">{{user.phone}}</div>
            <i class="icon-arrow_right"></i>
          </div>
          <div class="per border-1px-bottom" @click="showBirthday">
            <div class="title">生日</div>
            <div class="name">{{user.birthday}}</div>
            <i class="icon-arrow_right"></i>
          </div>
          <div class="per border-1px-bottom">
            <div class="title">职称</div>
            <div class="name">{{user.position}}</div>
          </div>
        </form>
      </div>
    </transition>
    <updatePersonal ref="updatePersonal" :userData="userData" @accomplish="accomplish"
                    :updateName="updateName"></updatePersonal>
    <scroll_date ref="scrollDate" :month="month" :day="day" @accomplish="accomplish"></scroll_date>
  </div>
</template>

<script type="text/ecmascript-6">
  import title_line from '../model/title_line'
  import updatePersonal from '../updatePersonal/updatePersonal'
  import scroll_date from '../scroll_date/scroll_date'
  import BScroll from 'better-scroll'

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
        this.$refs.updatePersonal.hidden()
        this.$refs.scrollDate.hidden()
      },
      showUsername() {
        /*if (!event._constructed) {
         return
         }*/
        this.updateName.data = 'username'
        this.userData.data = this.user.username
        this.$refs.updatePersonal.show()
        this.$refs.scrollDate.hidden()
      },
      showPhone() {
        /*if (!event._constructed) {
         return
         }*/
        this.updateName.data = 'phone'
        this.userData.data = this.user.phone
        this.$refs.updatePersonal.show()
        this.$refs.scrollDate.hidden()
      },
      showBirthday() {
        /*if (!event._constructed) {
         return
         }*/
        this.month.data = this.user.birthday.split('-')[0]
        this.day.data = this.user.birthday.split('-')[1]
        this.$refs.scrollDate.show()
        this.$refs.updatePersonal.hidden()
      },
      accomplish(event) {
        this.$emit('accomplish', event.target)
      },
      getAvatar() {
        this.showAvatar = this.$refs.avatar.value
        this.FlagAvatar = false
        this.$emit('accomplish', event.target)
      }
    },
    data() {
      return {
        showFlag: false,
        userData: {
          data: String
        },
        month: {
          data: String
        },
        day: {
          data: String
        },
        updateName: {
          data: String
        },
        showAvatar: String,
        FlagAvatar: true
      }
    },
    components: {
      title_line,
      updatePersonal,
      scroll_date
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
          flex 0 0 40px
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
            z-index 1
          & > input
            font-size 0
            position absolute
            width 100%
            height 100%
            top 0
            left 0
            z-index 10
        .icon-arrow_right
          position absolute
          line-height 40px
          height 40px
          right 0px
          font-size 20px
</style>
