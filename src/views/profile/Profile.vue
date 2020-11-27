<template>
  <div id="profile">
    <NavBar class="profile-bar">
      <div slot="center">我的</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
export default {
  name:'Profile',
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .profile-bar{
    background-color: pink;
    color: #fff;
  }
</style>