<template>
  <div>
    <v-header :HData="HData"></v-header>
    <div class="detail" ref="wrapper">
      <div>
        <div class="detailTitle">
          <p>开会</p>
        </div>
        <div class="detailDescription">
          <span class="sendName">SANYE</span>
          <span class="sendTime">2018.1.8</span>
        </div>
        <div class="detailContent">
          <div class="detailImg">
            <img src="http://oa.cdrysj.com:8888/upload/2017-06-30/1498814272259-d1237ca84bf19adb0ed7ae2eb8d14cff.png"
                 height="100%" :width="getWiths()" @click="getWiths">
          </div>
          <div class="detailText">
            <p>早上10点开会</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import header from '@/components/header/header.vue'
  export default {
    props: {
      detail: {
        title: '',
        img: [{}],
        content: ''
      }
    },
    components: {
      'v-header': header
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
      })
    },
    data() {
      return {
        HData: {
          name: null,
          url: null,
          title: '公告'
        }
      }
    },
    methods: {
      getWiths() {
        console.log(screen.availWidth)
        let width = screen.availWidth - 10
        return width + 'px'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .detail
    position absolute
    top 44px
    bottom 0px
    overflow hidden
    padding 0 5px
    .detailTitle
      & > P
        height 40px
        line-height 40px
    .detailDescription
      height 30px
      & > span
        font-size 14px
        color rgba(7, 17, 27, 0.6)
      .sendName
        display inline-block
    .detailContent
      .detailText
        margin 10px 0
  


</style>
