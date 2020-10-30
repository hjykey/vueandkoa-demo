# vueandkoa-demo

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---

## Private Descriptions

```html
<!--安装 npm 后，全局安装 vue-cli-->
1. npm install vue-cli -g
<!--用一个全面的 webpack+vue-loader 的模板，功能包括热加载，linting,检测和 CSS 扩展，初始化项目-->
2. vue init webpack
<!--测试安装是否成功-->
3. npm run dev
<!--引入vant：尽量用npm，源用淘宝的（cnpm 尽量少用防 bug）-->
4. npm install vant --save --registry=https://registry.npm.taobao.org
<!--安装babel-plugin-import,优雅的按需引用vant模块-->
5. npm i babel-plugin-import -D（完整版：npm install babel-plugin-import
--save-dev）<br />
6. 在.babelrc中配置plugins（插件）实现第5步
```

---
