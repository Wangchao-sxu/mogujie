<template>
  <div id="app">
    <MainTabBar></MainTabBar>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar'
export default {
  name: 'App',
  components:{
    MainTabBar
  },
  created(){
    //解决vuex中的数据刷新丢失问题
    //在页面加载的时候读取sessionStorage里的状态信息
    if(sessionStorage.getItem('store')){
      this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem('store'))))
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload',()=>{
      sessionStorage.setItem('store',JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style scoped>
  @import './assets/css/base.css'
</style>
