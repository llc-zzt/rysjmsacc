<template>
  <div>
    <v-header :HData="HData"></v-header>
    <div class="chat-box" ref="wrapper">
      <ul>
        <li class="chat-items" v-for="item in messageData">
          <ChartContent :item="item"></ChartContent>
        </li>
      </ul>
    </div>
    <div class="chat-inputBox">
      <div class="input-add"></div>
      <div class="input-box">
        <textarea rows="1" v-model="message"></textarea>
      </div>
      <div class="input-submit">
        <button @click="submitMessage">发送</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import header from '@/components/header/header.vue'
  import ChartContent from '@/components/model/ChartContent.vue'
  export default {
    components: {
      'v-header': header,
      ChartContent
    },
    data() {
      return {
        HData: {
          title: '机器人',
          name: null, // 列表
          url: '/'
        },
        message: null,
        messageData: [{
          type: 1,
          content: '你好，三爷！',
          avatar: 'http://oa.cdrysj.com:8888/upload/2017-06-30/1498814272259-d1237ca84bf19adb0ed7ae2eb8d14cff.png',
          direction: 'left'
        }, {
          type: 2,
          content: '你好，三爷！',
          avatar: 'http://oa.cdrysj.com:8888/upload/2017-06-30/1498814272259-d1237ca84bf19adb0ed7ae2eb8d14cff.png',
          direction: 'left',
          url: '/work'
        }]
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
      })
    },
    methods: {
      // 发送消息
      submitMessage() {
        this.messageData.push({
          type: 1,
          content: this.message,
          avatar: 'http://oa.cdrysj.com:8888/upload/2017-06-30/1498814272259-d1237ca84bf19adb0ed7ae2eb8d14cff.png',
          direction: 'right'
        })
        this.message = null
        this.$nextTick(() => {
          this.scroll.refresh()
          this.scroll.scrollTo(0, this.scroll.maxScrollY, 100)
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/styl/mixin.styl"
  .chat-box
    background-color #EDEDED
    position absolute
    top 44px
    bottom 60px
    width 100%
    overflow hidden
    .chat-items
      display block

  .chat-inputBox
    border-1px-top(rgba(7, 17, 27, 0.1))
    position absolute
    bottom 0
    height 60px
    width 100%
    display flex
    background-color #EDEDED
    .input-add
      flex 0 0 52px
      line-height 60px
    .input-box
      flex 1
      height 60px
      text-align center
      textarea
        margin-top 10px
        height 40px
        line-height 40px
        font-size 16px
        resize none
        width 100%
        border none
        border-radius 4px
        padding 0
        outline none
    .input-submit
      flex 0 0 95px
      line-height 60px
      text-align center
      & > button
        height 40px
        width 85px
        color #ffffff
        background-color #00CCFF
        border none
        outline none
        box-shadow none
        border-radius 4px


</style>
