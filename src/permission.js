import router from '@/router'
import store from '@/store'
import nprogress from 'nprogress' // 引入进度条
import 'nprogress/nprogress.css'
const whiteList = ['/login', '/404']
// 前置守卫
router.beforeEach(async (to, from, next) => {
  // next(),next(false),next(地址)
  nprogress.start() // 开启进度条
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 只有放行用户过去的时候才需要获取用户资料
      if (!store.getters.userId) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
  // 解决手动切换地址时进度条不关闭的问题
  nprogress.done()
})
router.afterEach(() => {
  nprogress.done()
})
