export default [
  {
    path: '/hello',
    component: () => import('@/views/hello/index.vue'),
  },
  {
    path: '/word',
    component: () => import('@/views/word/index.vue'),
  },
]
