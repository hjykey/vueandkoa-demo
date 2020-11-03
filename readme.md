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

## [user guide](https://jspang.com/detailed?id=61#toc312)

```bash
1.建立前端文件夹(******) mkdir ******
2.全局安装vue-cli，在终端里输入，npm install vue-cli -g
3.vue init webpack
4.安装vant:npm i vant -S：这是简写形式。 npm install vant --save:这是完整写法。实际中用npm install vant --save --registry=https://registry.npm.taobao.org，不建议cnpm安装
5.安装babel-plugin-import，它可以让我们按需引入vant组件模块。npm i babel-plugin-import -D或完整写法npm install babel-plugin-import --save-dev
6.在.babelrc中配置plugins（插件）
"plugins": [
    "transform-vue-jsx",
    "transform-runtime",
    ["import",{"libraryName":"vant","style":true}]
  ]
7.避免ESLint和Prettier冲突，在.eslintrc.js文件的extends里加入 'Prettier'
```
