<template>
  <div>
    <div class="header">
      <p>成都荣耀世纪</p>
      <i class="icon-message"></i>
    </div>
    <div class="notice">
      <i class="icon-bullhorn"></i>
      <span>乐乐直播工资安排：按小时计算工资，分为两个工资档，根据主播自身条件定档</span>
    </div>
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li>
          <div class="work">
            <div class="work-title">
              <p>人员管理</p>
            </div>
            <div class="work-content">
              <a class="work-items" @click="goTo('/approval')">
                <div class="color_1"><p>加</p></div>
                <span>人员添加</span>
              </a>
              <a class="work-items" @click="goTo('/notice/list')">
                <div class="color_2"><p>编</p></div>
                <span>人员编辑</span>
              </a>
              <a class="work-items" @click="goTo('/approval')">
                <div class="color_3"><p>查</p></div>
                <span>人员查询</span>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="work">
            <div class="work-title">
              <p>部门管理</p>
            </div>
            <div class="work-content">
              <a class="work-items" @click="goTo('/approval')">
                <div class="color_1"><p>加</p></div>
                <span>添加部门</span>
              </a>
              <a class="work-items" @click="goTo('/notice/list')">
                <div class="color_2"><p>查</p></div>
                <span>查询部门</span>
              </a>
              <a class="work-items" @click="goTo('/approval')">
                <div class="color_3"><p>编</p></div>
                <span>编辑部门</span>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="work">
            <div class="work-title">
              <p>报销</p>
            </div>
            <div class="work-content">
              <a class="work-items" @click="goTo('/approval')">
                <div class="color_1"><p>发</p></div>
                <span>发起报销</span>
              </a>
              <a class="work-items" @click="goTo('/notice/list')">
                <div class="color_2"><p>预</p></div>
                <span>工资预支</span>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="work">
            <div class="work-title">
              <p>考勤</p>
            </div>
            <div class="work-content">
              <a class="work-items" @click="goTo('/approval')">
                <div class="color_1"><p>卡</p></div>
                <span>主播直播打卡</span>
              </a>
              <a class="work-items" @click="goTo('/notice/list')">
                <div class="color_2"><p>假</p></div>
                <span>请假</span>
              </a>
              <a class="work-items" @click="goTo('/approval')">
                <div class="color_3"><p>卡</p></div>
                <span>工作人员打卡</span>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="work">
            <div class="work-title">
              <p>人事</p>
            </div>
            <div class="work-content">
              <a class="work-items" @click="goTo('/approval')">
                <div class="color_1"><p>离</p></div>
                <span>离职申请</span>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="work">
            <div class="work-title">
              <p>业务</p>
            </div>
            <div class="work-content">
              <a class="work-items" @click="goTo('/approval')">
                <div class="color_1"><p>报</p></div>
                <span>日报周报月报</span>
              </a>
              <a class="work-items" @click="goTo('/notice/list')">
                <div class="color_2"><p>绩</p></div>
                <span>绩效自评</span>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div class="work">
            <div class="work-title">
              <p>物品借记</p>
            </div>
            <div class="work-content">
              <a class="work-items" @click="goTo('/approval')">
                <div class="color_1"><p>借</p></div>
                <span>借记</span>
              </a>
            </div>
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
    methods: {
      goTo(url) {
        this.$router.push({path: url})
      }
    },
    components: {
      navIndex
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/styl/mixin.styl"
  .header
    width 100%
    height 44px
    display flex
    background-color #00ccff
    color #ffffff
    & > p
      flex 1
      margin-left 5px
      display inline-block
      line-height 44px
    & > i
      line-height 44px
      flex 0 0 26px

  .notice
    display flex
    height 20px
    border-1px-bottom(rgba(7, 17, 27, 0.1))
    & > i
      text-align center
      flex 0 0 25px
      margin-top 2px
      color #00ccff
    & > span
      line-height 20px
      text-align center
      font-size 14px
      flex 1
      color #7e8c8d
      overflow hidden

  .wrapper
    position absolute
    top 64px
    bottom 48px
    width 100%
    overflow hidden
    ul
      li
        .work
          width 100%
          border-1px-bottom(rgba(7, 17, 27, 0.1))
          .work-title
            height 40px
            & > p
              line-height 40px
              margin-left 10px
              font-size 14px
              font-weight bold
          .work-content
            display flex
            flex-flow wrap
            margin 0 20px
            .work-items
              display block
              width 83px
              margin 5px 0px
              z-index 100
              text-align center
              .color_1
                background-color rgb(255, 180, 68)
              .color_2
                background-color rgb(80, 227, 194)
              .color_3
                background-color rgb(105, 174, 255)
              .color_4
                background-color rgb(255, 76, 153)
              & > div
                height 40px
                width 40px
                color #ffffff
                display inline-block
                border-radius 3px
                & > p
                  line-height 40px
                  font-size 20px
                  text-align center
              & > span
                line-height 20px
                font-size 12px
                display block


</style>
