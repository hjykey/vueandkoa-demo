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

## vue-cli 版本 2.0 和 3.0 的区别

```bash
> vue-cli2.0
安装：npm install vue-cli -g;
初始化项目：vue init webpack(模板类型) 项目名称;
运行：npm install; //安装依赖项
      npm run dev; //开发模式启动
> vue-cli3.0
安装：npm install @vue/cli -g;
初始化项目：vue create 项目名称
运行项目：npm install; //安装依赖
          npm run serve;
要安装vue-cli3.0，如果本地已经全局安装了vue-cli2.0的情况下，需要先卸载，再安装vue-cli3.0

此外，关于创建项目后的配置
vue-cli3.0有默认配置和手动配置，手动配置类似于一列复选框，根据自己喜好进行勾选

```
