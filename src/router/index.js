import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ShoppingMall from '@/components/ShoppingMall' // @在webpack.base.conf.js下定义，src目录的别名， extensions定义了当无后缀时自动查找的后缀名
import swiperDefault from '@/components/swiperDefault'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import Goods from '@/components/Goods'
import CategoryList from '@/components/CategoryList'

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
    { path: '/register', name: 'Register', component: Register },
    { path: '/login', name: 'Login', component: Login },
    { path: '/Goods', name: 'Goods', component: Goods },
    { path: '/CategoryList', name: 'CategoryList', component: CategoryList },
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
