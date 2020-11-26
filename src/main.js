import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from './router/index'

//引入store
import store from './store/index'

//引入iconfont字体图标
import './assets/icon/iconfont.css'

//创建事件总线的实例
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

