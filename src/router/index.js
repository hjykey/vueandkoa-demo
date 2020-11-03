import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ShoppingMall from '@/components/ShoppingMall'

Vue.use(Router)

export default new Router({
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
  ],
})
