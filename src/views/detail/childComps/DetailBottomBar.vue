<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon iconfont icon-kefu"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon iconfont icon-dianpu"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon iconfont icon-shoucang1"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailBottomBar',
  methods:{
    addToCart(){
      // console.log('点击添加到购物车');
      this.$emit('addToCart');
    }
  }
}
</script>

<style scoped>
  .bottom-bar{
    height: 49px;
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    text-align: center;
  }
  .bar-item{
    flex: 1;
    display: flex;
  }
  .bar-item div{
    flex: 1;
  }
  .bar-item div i{
    display: block;
    width: 22px;
    height: 22px;
    margin: 3px auto;
    font-size: 22px;
  }
  .bar-right{
    font-size: 16px;
    color: #fff;
    line-height: 49px;
  }
  .bar-right .cart{
    background-color: #ffe817;
    color: #333;
  }
  .bar-right .buy{
     background-color: #f69;
  }
</style>