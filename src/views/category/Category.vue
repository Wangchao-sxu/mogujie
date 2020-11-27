<template>
  <div id="category">
    <NavBar class="category-bar">
      <div slot="center">商品分类</div>
    </NavBar>

    
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
export default {
  name:'Category',
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .category-bar{
    background-color: pink;
    color: #fff;
  }
</style>