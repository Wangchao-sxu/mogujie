<template>
   <TabBar>
      <TabBarItem path='home' activeColor='pink'>
        <img slot="item-icon" src="../../../assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/home-active.png" alt="">
        <div slot="item-text">首页</div>
      </TabBarItem>
       <TabBarItem path='category' activeColor='pink'>
        <img slot="item-icon" src="../../../assets/img/tabbar/category.png" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/category-active.png" alt="">
        <div slot="item-text">分类</div>
      </TabBarItem>
       <TabBarItem path='cart' activeColor='pink'>
        <img slot="item-icon" src="../../../assets/img/tabbar/cart.png" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/cart-active.png" alt="">
        <div slot="item-text">购物车</div>
      </TabBarItem>
       <TabBarItem path='profile' activeColor='pink'>
        <img slot="item-icon" src="../../../assets/img/tabbar/profile.png" alt="">
        <img slot="item-icon-active" src="../../../assets/img/tabbar/profile-active.png" alt="">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar'
import TabBarItem from  '../../common/tabbar/TabBarItem'
export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
  
</style>