<template>
  <div>
    <v-header :HData="HData"></v-header>
    <div ref="wrapper">
      <div class="approvalTab">
        <div class="approvalTab-items">
          <i class="icon-message"></i>
          <span>我审批的</span>
        </div>
        <div class="approvalTab-items">
          <i class="icon-message"></i>
          <span>我发起的</span>
        </div>
        <div class="approvalTab-items">
          <i class="icon-message"></i>
          <span>抄送我的</span>
        </div>
      </div>
      <div class="approval-content">
        <ul>
          <li class="approval-items" v-for="items in AppList">
            <AppList :AppList="items"></AppList>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import header from '@/components/header/header.vue'
  import AppList from '@/components/model/AppList.vue'
  export default {
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true
        })
      })
    },
    components: {
      'v-header': header,
      AppList
    },
    data() {
      return {
        AppList: [{
          name: '财务',
          list: [
            {
              name: '报销',
              goToUrl: 'approval',
              key: '报',
              color: 1
            },
            {
              name: '报销',
              goToUrl: 'approval',
              key: '报',
              color: 2
            },
            {
              name: '报销',
              goToUrl: 'approval',
              key: '报',
              color: 3
            }
          ]
        },
          {
            name: '人事',
            list: [
              {
                name: '转正',
                goToUrl: 'approval',
                key: '转',
                color: 2
              },
              {
                name: '转正',
                goToUrl: 'approval',
                key: '转',
                color: 3
              },
              {
                name: '转正',
                goToUrl: 'approval',
                key: '转',
                color: 4
              }
            ]
          }
        ],
        HData: {
          name: null,
          url: null,
          title: '审批'
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .approvalTab
    height 65px
    width 100%
    display flex
    .approvalTab-items
      flex 1
      & > i
        margin-top 5px
        line-height 40px
        display block
        text-align center
        font-size 30px
      & > span
        line-height 20px
        display block
        text-align center
        font-size 12px
      .approval-content
        .approvalTab-items
          margin 10px 0px
</style>
