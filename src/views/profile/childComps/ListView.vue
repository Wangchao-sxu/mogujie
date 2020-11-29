<template>
  <div id="list-view">
    <div class="list-item" v-for="(item,index) in listData" :key="index">
      <img src="../../../assets/img/common/xin.png" alt="">
      {{item.content}}
    </div>
  </div>
</template>

<script>
export default {
  name:"ListView",
  props:{
    listData:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .list-item:first-child{
    margin-top: 20px;
  }
  .list-item{
    background-color: #fff;
    height: 50px;
    padding-left: 10px;
    line-height: 50px;
    border-bottom: 1px solid #ccc;
  }
  .list-item img{
    width: 20px;
    height: 20px;
    line-height: 50px;
  }
  #list-view .list-item:last-child{
    border: none;
  }
</style>
