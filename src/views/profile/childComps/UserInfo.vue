<template>
  <div id="user-info">
    <div class="user" href="">
      <div class="left">
        <img src="../../../assets/img/common/photo.png" alt="">
      </div>
      <div class="login">
        <div class="user-login">
          <span class="Login">登录/注册</span> 
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <div class="back">
        <img src="../../../assets/img/common/next.png" alt="">
      </div>
    </div>   
  </div>
</template>

<script>
export default {
  name:'UserInfo'
}
</script>

<style scoped>
  #user-info{
    height: 100px;
    background-color: pink;
  }
  #user-info a{
    text-decoration: none;
    color: white;
  }
  .user{
    display: flex;
  }
  .left,.back{
    flex: 1;
  }
  .login{
    flex: 3;
    padding: 20px 10px 10px;
  }
  .user-login{
    padding: 10px 0 10px;
  }
  .user-login span{
    display: block;
    font-size: 16px;
    color: #f4f4f4;
  }
  .user-login span.Login{
    font-size: 18px;
  }
  .left img{
    width: 80px;
    height: 80px;
    margin-top: 10px;
  }
  .back{
    text-align: center;
  }
  .back img{
    margin-top: 40px;
    width: 30px;
    height: 30px;
  }
</style>