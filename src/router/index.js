import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


export default new VueRouter({
  mode:'history',//模式为history模式。HTML5新增
  routes:[
    {
      path:'',
      redirect:'/home'//重定向
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
    },
    {
      path:'/detail/:iid',
      component:()=>import('../views/detail/Detail.vue')
    },
    {
      path:'/login',
      component:()=>import('../views/login/Login.vue')
    },
    {
      path:'/register',
      component:()=>import('../views/register/Register.vue')
    }
  ]
})