import './mock'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import './assets/style/global.less'
import router from './router'
import {message} from './common/util.js'
import './eventBus.js'
// import defaultVal from '@/assets/default.gif';
// import VueLazyload from 'vue-lazyload'  // 图片懒加载
store.dispatch('setting/fetchSetting')
Vue.prototype.$message = message;

 
// or with options
// Vue.use(VueLazyload, {
//   preLoad: 1.3,
//   // error: 'dist/error.png',
//   loading: defaultVal,
//   attempt: 1
// })

import '@/api/banners'

// 注册全局指令
import vLoading from './directives/loading.js'
import vLazy from './directives/lazy.js'
Vue.directive('loading', vLoading)
Vue.directive('lazy', vLazy)

window.vm = new Vue({
  router,
	store,
  render: h => h(App)
}).$mount('#app')
