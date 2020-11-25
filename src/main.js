import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 加载 element 组件库
import ElementUI from 'element-ui'
import { ElementTiptapPlugin } from 'element-tiptap'
// 加载 element 组件库的样式
import 'element-ui/lib/theme-chalk/index.css'
// import element-tiptap 样式
import 'element-tiptap/lib/index.css'
// 加载全局样式文件
import './styles/index.less'

// 全局注册 element 组件库
Vue.use(ElementUI)
// 安装 element-tiptap 插件
Vue.use(ElementTiptapPlugin, {
  lang: 'zh'
})
// 现在你已经在全局注册了 `el-tiptap` 组件。
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
