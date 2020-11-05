import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ShoppingMall from '@/components/ShoppingMall'
import swiperDefault from '@/components/swiperDefault'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      // path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      path: '/',
      redirect: '/ShoppingMall',
    },
    {
      path: '/ShoppingMall',
      component: ShoppingMall,
    },
    {
      path: '/swiper',
      component: swiperDefault,
    },
  ],
})
// 挂载路由守卫
// to 将要访问的路径
// from 从哪个路径跳转而来
// next 一个函数，表示放行
router.beforeEach((to, from, next) => {
  if (to.path === '/') return next('/ShoppingMall')
  else return next()
})

export default router
