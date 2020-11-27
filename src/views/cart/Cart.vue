<template>
  <div class="cart">
    <NavBar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar' 

import {mapGetters} from 'vuex'
export default {
  name:'Cart',
  components:{
    NavBar
  },
  computed:{
    //mapGetters辅助函数仅仅是将store中的getters映射到局部计算属性
    ...mapGetters([
      'cartLength'
    ])
  }
}
</script>

<style scoped>
  .nav-bar{
    background-color: pink;
    color: #ffffff;
  }
</style>