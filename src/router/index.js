import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/cart',
      component:()=>import('../views/cart/Cart.vue')
    },
    {
      path:'/category',
      component:()=>import('../views/category/Category.vue')
    },
    {
      path:'/home',
      component:()=>import('../views/home/Home.vue')
    },
    {
      path:'/profile',
      component:()=>import('../views/profile/Profile.vue')
    }
  ]
})