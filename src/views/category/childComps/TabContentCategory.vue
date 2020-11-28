<template>
  <div class="category">
    <div class="category-list" v-for="(item,index) in subcategories.list" :key="index">
        <img :src="item.image" alt="">
        <p><a :href="item.link">{{item.title}}</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabContentCategory',
  props:{
    subcategories:{
      type:Object,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>

  .category{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
  }
  .category-list{
    flex: 5;
  }
  .category-list img{
    width:100px;
    height: 100px;
  }
  .category-list p a{
    text-decoration: none;
    color: black;
  }
</style>