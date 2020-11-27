<template>
    <div>
      <CartListItem 
            v-for="(item,index) in cartList" 
            :key="index" 
            :itemInfo="item">{{item}}</CartListItem>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListItem from './CartListItem'

export default {
  name:'CartList',
  components:{
    CartListItem
  },
  computed:{
    ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>
  /* .content{
    height: calc(100% - 44px -49px);
  } */
</style>