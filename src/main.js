import Vue from 'vue'
import App from './App.vue'

//引入路由
import router from './router/index'

//引入store
import store from './store/index'

//引入iconfont字体图标
import './assets/icon/iconfont.css'

//引入vue-lazyload进行图片懒加载
import VueLazyLoad from 'vue-lazyload' 
//使用懒加载插件
Vue.use(VueLazyLoad)

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//使用element-ui
Vue.use(ElementUI)

//创建事件总线的实例
Vue.prototype.$bus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

