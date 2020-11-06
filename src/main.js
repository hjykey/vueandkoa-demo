// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 全局引用，组件局部引用请去组件中查看
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// // require styles
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper /* { default global options } */)
import {
  Button,
  Row,
  Col,
  Swipe,
  SwipeItem,
  Lazyload,
  Icon,
  List,
  Field,
  NavBar,
} from 'vant'
Vue.use(Button)
  .use(Row)
  .use(Col)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .use(Icon)
  .use(List)
  .use(Field)
  .use(NavBar)
// Vue.use(Lazyload, {
//   lazyComponent: true,
// });

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  // template: '<App/>' //完整写法如下
  template: '<App> </App>',
})
