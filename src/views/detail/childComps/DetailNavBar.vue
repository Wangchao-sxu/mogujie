<template>
  <div>
    <NavBar>
      <div class="back" slot="left" @click="backClick">
        <img src="../../../assets/img/common/back.png" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="index"
          class="title-item"
          :class="{active: index === currentIndex}"
          @click="titleClick(index)">{{item}}</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar'
export default {
  name:'DetailNavBar',
  components:{
    NavBar
  },
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    titleClick(index){
      this.currentIndex = index;
      this.$emit('titleClick',index)
    },
    backClick(){
      this.$router.back();
      // this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 13px;
  }
  .title-item{
    flex: 1;
  }
  .active{
    color: pink;
  }
  .back img{
    margin-top: 10px;
    width: 20px;
    height: 20px;
  }
</style>