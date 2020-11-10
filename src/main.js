// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// npm i @vant/touch-emulator -S
// 直接在代码中引入模块即可CDN引入<script src="https://cdn.jsdelivr.net/npm/@vant/touch-emulator"></script>，模块会自动完成初始化并生效,即可实现vant在PC端上模拟移动端 touch 事件
import '@vant/touch-emulator'
// 全局引用，组件局部引用请去组件中查看
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// // require styles
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper /* { default global options } */)
// 类似vant的UI组件还有elementUI,vuetify
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
  Tab,
  Tabs,
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
  .use(Tab)
  .use(Tabs)

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
