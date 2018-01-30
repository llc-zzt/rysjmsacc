<template>
  <div class="showPer">
    <transition name="showPer">
      <div class="per-wrapper" v-show="showFlag">
        <title_line title_font="部门信息"></title_line>
        <div class="per border-1px-bottom" @click="showUsername">
          <div class="title">所属部门</div>
          <div class="name">{{dept.deptName}}</div>
        </div>
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
      dept: {
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
        }
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
        .icon-arrow_right
          position absolute
          line-height 40px
          height 40px
          right 0px
          font-size 20px
</style>
