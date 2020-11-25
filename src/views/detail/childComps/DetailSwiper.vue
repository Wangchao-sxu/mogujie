<template>
    <Swiper class="detail-swiper">
      <SwiperItem v-for="(item,index) in topImage" :key="index">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
export default {
  name:'DetailSwiper',
  props:{
    topImage:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>