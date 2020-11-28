<template>
  <Scroll class="tab-menu">
    <div class="item-list">
      <div class="item-list-item" v-for="(item,index) in category" 
          :key="index"
          :class="{active: index === currentIndex}"
          @click="itemClick(index)">
          {{item.title}}
      </div>
    </div>
  </Scroll>  
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll'
export default {
  name:"TabMenu",
  components:{
    Scroll
  },
  props:{
    category:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
      this.$emit('selectItem',index)
    }
  }
}
</script>

<style scoped>
  #tab-menu{
    background-color: #ccc;
    width: 100px;
    height:100%;
    box-sizing: border-box;
  }
  .item-list-item{
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
  .item-list-item.active{
    color: pink;
    background-color: #fff;
    border-left: 3px solid pink;
  }
</style>