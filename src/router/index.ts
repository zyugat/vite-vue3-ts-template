import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from './root'
// import NProgress from 'nprogress'
// import 'nprogress/nprogress.css'
// import routes from 'virtual:generated-pages'

// 导入生成的路由数据
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 1. 始终滚动到顶部
    return {
      top: 0,
    }

    // 2. 滚动到元素
    // return {
    //   // 也可以这么写
    //   // el: document.getElementById('main'),
    //   el: '#main',
    //   top: -10,
    // }

    // 3.返回 false 值或空对象则不变化，返回 `savedPosition`,
    // 在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
    // if (savedPosition) {
    //   return savedPosition
    // } else {
    //   return { top: 0 }
    // }

    // 4. 滚动到锚点
    // if (to.hash) {
    //   return {
    //     el: to.hash,
    //   }
    // }

    // 5. 延迟滚动
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({ left: 0, top: 0 })
    //   }, 500)
    // })
  },
})

// router.beforeEach(async (_to, _from, next) => {
//   NProgress.start()
//   next()
// })

// router.afterEach(_to => {
//   NProgress.done()
// })

export default router
