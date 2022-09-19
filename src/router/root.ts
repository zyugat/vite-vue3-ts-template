import type { RouteRecordRaw } from 'vue-router'
export default [
  {
    path: '/',
    component: () => import('@/views/Home/index.vue'),
  },
  {
    path: '/demo',
    component: () => import('@/views/demo/index.vue'),
  },
  {
    path: '/todolist',
    component: () => import('@/views/TodoList/index.vue'),
  },
] as RouteRecordRaw[]
