<template>
  <div class="login">
    <NavBar class="nav-bar">
      <div slot="left" @click="backClick">
        <img class="back" src="../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">登录/注册</div>
    </NavBar>

    
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
export default {
  name:"Login",
  components:{
    NavBar
  },
  methods:{
    backClick(){
      // return this.$router.go(-1);
      return this.$router.back();
    }
  }
}
</script>

<style scoped>
  .nav-bar{
    background-color:pink;
    color:white;
    text-align: center;
  }
  .back{
    margin-top: 5px;
    width: 30px;
    height: 30px;
  }
</style>