<template>
  <div>
    <div class="messageModel">
      <div class="textMessageBox" v-if="item.type == 1">
        <div class="avatar" :class="'float_'+item.direction"><img :src="item.avatar" height="60px" width="60px"></div>
        <div class="textMessageContent" :class="'float_'+item.direction">{{item.content}}</div>
      </div>
      <div class="noticeMessageBox" v-if="item.type == 2">
        <div class="noticeAvatar">
          <img :src="item.avatar" height="60px" width="60px">
        </div>
        <div class="noticeMessageContent" @click="go(item.url)">
          <label>{{item.direction}}</label>
          <p>{{item.content}}</p>
        </div>
        <div></div>
      </div>
    </div>
  </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    props: ['item'],
    methods: {
      go(url) {
        console.log(url)
        this.$router.push({path: url})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixin.styl"
  .messageModel
    margin-top 5px
    min-height 70px
    .textMessageBox
      .avatar
        margin-top 5px
        margin-left 5px
        margin-right 5px
        display block
        & > img
          border-radius 4px
      .textMessageContent
        padding 5px
        display block
        font-size 16px
        min-height 16px
        max-width 230px
        color #333333
        background-color white
        border 1px solid rgba(7, 17, 27, 0.2)
        border-radius 4px
        margin-top 5px
        height auto
      .float_left
        float left
      .float_right
        float right

    .noticeMessageBox
      .noticeAvatar
        margin-top 5px
        margin-left 5px
        margin-right 5px
        display block
        float left
        & > img
          border-radius 4px
      .noticeMessageContent
        padding 5px
        display block
        font-size 16px
        min-height 16px
        max-width 230px
        color #333333
        background-color white
        border 1px solid rgba(7, 17, 27, 0.2)
        border-radius 4px
        margin-top 5px
        height auto
        float left


</style>
