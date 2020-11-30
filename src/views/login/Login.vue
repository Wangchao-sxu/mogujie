<template>
  <div class="login">
    <NavBar class="nav-bar">
      <div slot="left" @click="backClick">
        <img class="back" src="../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center">登录</div>
    </NavBar>

    <LoginList></LoginList>

    <div class="register" @click="registerClick">
      <p>尚未注册？请先进行注册</p>
    </div>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import LoginList from './childComps/LoginList'
export default {
  name:"Login",
  components:{
    NavBar,
    LoginList
  },
  methods:{
    backClick(){
      // return this.$router.go(-1);
      return this.$router.back();
    },
    registerClick(){
      return this.$router.push('/register')
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
  .register{
    text-align: center;
  }
  .register p{
    text-align: center;
    text-decoration: underline;
  }
</style>