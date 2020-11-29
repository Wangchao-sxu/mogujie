<template>
  <div class="cart">
    <!--顶部导航-->
    <NavBar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <!--商品的列表-->
    <Scroll class="content" ref="scroll">
      <CartList></CartList>
    </Scroll>
    

    <!--底部结算-->
    <BottomBar @calc="calc"></BottomBar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar' 
import CartList from './childComps/CartList'
import BottomBar from './childComps/CartBottomBar'

import Scroll from '../../components/common/scroll/Scroll'

import {mapGetters} from 'vuex'
export default {
  name:'Cart',
  components:{
    NavBar,
    CartList,
    Scroll,
    BottomBar
  },
  computed:{
    //mapGetters辅助函数仅仅是将store中的getters映射到局部计算属性
    ...mapGetters([
      'cartLength'
    ])
  },
  activated(){
    this.$refs.scroll.refresh();
  },
  methods:{
    calc(){
      console.log('--------------');
    }
  }
}
</script>

<style scoped>
  .nav-bar{
    background-color: pink;
    color: #ffffff;
  }
  .cart{
    height: 100vh;
    /* position: relative; */
  }
  .content{
    /* position: absolute;
    top: 44px;
    bottom:49px;
    left: 0;
    right: 0; */
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }
</style>