<template>
  <div class="register">
    <NavBar class="nav-bar">
      <div slot="left" @click="backClick">
        <img src="../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">注册</div>
    </NavBar>

    <RegisterList></RegisterList>
  </div>
</template>

<script>

import NavBar from '../../components/common/navbar/NavBar'
import RegisterList from './childComps/RegisterList'
export default {
  name:'Register',
  components:{
    NavBar,
    RegisterList
  },
  methods:{
    backClick(){
      return this.$router.back();
    }
  }
}
</script>

<style scoped>
  .nav-bar{
    background-color: pink;
    color: white;
    text-align: center;
  }
  .nav-bar img{
    width: 30px;
    height: 30px;
    margin-top: 5px;
  }

</style>