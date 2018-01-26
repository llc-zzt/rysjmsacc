import Vue from 'vue'
import Router from 'vue-router'
import message from '../components/message/message.vue'
import work from '../components/work/work.vue'
import myself from '../components/myself/myself.vue'
import approval from '../components/approval/approval.vue'
import chat from '@/components/message/chat/chat.vue'
import notice from '../components/notice/Notice.vue'
import noticeList from '../components/notice/list/list.vue'
import noticeListModel from '../components/model/NoticeList.vue'
import detail from '../components/notice/detail/detail.vue'
import login from '../components/Login/in/login.vue'
import personnelList from '../components/personnel/list/list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/message'
    },
    {
      // 消息
      path: '/message',
      component: message
    }, {
      // 应用
      path: '/work',
      component: work
    }, {
      // 我的
      path: '/myself',
      component: myself
    }, {
      // 审核
      path: '/approval',
      component: approval
    },
    {
      // 聊天
      path: '/message/chat/:id',
      name: 'chat',
      component: chat
    },
    {
      // 通知 发布
      path: '/notice',
      name: 'notice',
      component: notice
    },
    {
      // 通知列表
      name: 'noticeList',
      path: '/notice/list',
      component: noticeList,
      redirect: '/notice/list/read',
      children: [{
        name: 'read',
        path: 'read',
        component: noticeListModel
      },
        {
          name: 'unread',
          path: 'unread',
          component: noticeListModel
        }
      ]
    },
    {
      name: 'detail',
      path: '/notice/detail/:id',
      component: detail
    },
    {
      name: 'login',
      path: '/login/in',
      component: login
    },
    {
      // 人员
      name: 'personnel',
      path: '/personnel/list',
      component: personnelList
    }
  ]
})
