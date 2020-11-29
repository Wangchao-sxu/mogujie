<template>
  <div id="profile">
    <!--导航-->
    <NavBar class="profile-bar">
      <div slot="center">我的</div>
    </NavBar>
    <!--个人信息，登录/注册-->
    <UserInfo></UserInfo>

    <!--个人积分栏-->
    <div class="myMoney">
      <div class="money">
        <p>
          <span class="bgRed">0.00</span><span>元</span>
        </p>
        <span>我的余额</span>
      </div>
      <div class="youhui">
        <p>
          <span class="bgRed">0</span><span>个</span>
        </p>
        <span>我的优惠</span>
      </div>
      <div class="jifen">
        <p>
          <span class="bgRed">0</span>分<span></span>
        </p>
        <span>我的积分</span>
      </div>
    </div>

    <!--列表展示-->
    <ListView :listData="myNews"></ListView>
    <ListView :listData="myCart"></ListView>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import UserInfo from './childComps/UserInfo'
import ListView from './childComps/ListView'
export default {
  name:'Profile',
  components:{
    NavBar,
    UserInfo,
    ListView
  },
  data(){
    return {
      myNews:[
        {content:'我的消息'},
        {content:'积分商城'},
        {content:'会员卡'}
      ],
      myCart:[
        {content:'我的购物车'},
        {content:'下载购物APP'}
      ]
    }
  }
}
</script>

<style scoped>
  #profile{
    background-color: #f4f4f4;
  }
  .profile-bar{
    background-color: pink;
    color: #fff;
  }
  .myMoney{
    display: flex;
    justify-content: space-around;
    text-align: center;
    height: 80px;
  }
  .money,.youhui,.jifen{
    flex: 1;
    margin-right: 1px;
    background-color: #fff;
  }
  .myMoney p{
    margin-bottom: 5px;
  }
  .bgRed{
    color: red;
    font-size: 18px;
    font-weight: 700;
  }
</style>