import type { RouteRecordRaw } from 'vue-router'
import left from '@/views/RouterTemplate/Left/index.vue'
import main from '@/views/RouterTemplate/Main/index.vue'
import right from '@/views/RouterTemplate/Right/index.vue'

export default [
  {
    path: '/',
    name: 'Home',
    // 别名
    alias: '/home',
    component: () => import('@/views/Home/index.vue'),
  },
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('@/views/demo/index.vue'),
  },
  {
    path: '/todolist',
    name: 'TodoList',
    component: () => import('@/views/TodoList/index.vue'),
  },
  {
    path: '/RouterTemplate',
    // 命名路由
    // use: :to="{ name: 'RouterTemplate' }
    name: 'RouterTemplate',
    component: () => import('@/views/RouterTemplate/index.vue'),
    meta: { RouterTemplateMetaData: 'RouterTemplateMetaData' },
    children: [
      {
        path: 'children1',
        component: () => import('@/views/RouterTemplate/Children1/index.vue'),
      },
      {
        path: 'children2',
        component: () => import('@/views/RouterTemplate/Children2/index.vue'),
      },
      {
        path: 'nameLeft',
        // 命名视图
        // use: <router-view name="main" />
        components: {
          default: left,
          main,
          change: right,
        },
      },
      {
        path: 'nameRight',
        components: {
          default: right,
          main,
          change: left,
        },
      },
    ],
  },
  {
    // 路由传参 params 方式
    // use: $route.params.abc
    path: '/RouterTemplate/:abc',
    name: 'RouterTemplate2',
    component: () => import('@/views/RouterTemplate/index.vue'),
  },
  {
    // 1) 路由匹配正则, 匹配所有
    // use: $route.params.pathMatch
    path: '/RouterTemplate/reg/:pathMatch(.*)',
    name: 'RouterTemplate3',
    component: () => import('@/views/RouterTemplate/index.vue'),
  },
  {
    // 2) 路由匹配正则, 匹配 abc- 之后的内容
    // use: $route.params.afterUser
    path: '/RouterTemplate/reg/abc-:afterUser(.*)',
    name: 'RouterTemplate4',
    component: () => import('@/views/RouterTemplate/index.vue'),
  },
  {
    // 3) 路由匹配正则, 匹配 cba- 之后的内容, 返回数组
    // use: $route.params.afterAll
    path: '/RouterTemplate/reg/cba-:afterAll(.*)*',
    name: 'RouterTemplate5',
    component: () => import('@/views/RouterTemplate/index.vue'),
  },
  {
    // /RouterTemplate/redirect/123 -> /RouterTemplate/redirect?searchText=redirect!
    path: '/RouterTemplate/redirect/:searchText',
    name: 'RouterTemplate6',
    redirect: to => {
      // 方法接收目标路由作为参数
      // return 重定向的字符串路径/路径对象
      return {
        path: '/RouterTemplate/redirect',
        query: { searchText2: to.params.searchText },
      }
    },
    component: () => import('@/views/RouterTemplate/index.vue'),
  },
] as RouteRecordRaw[]
