<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    },
    data:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      scroll:null
    }
  },
  mounted(){
    //1、创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    //2、监听滚动的位置
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scroll',position);
    })
    //3、监听上拉事件（监听滚动的位置）
    this.scroll.on('pullingUp',()=>{
      // console.log('上拉加载更多')
      this.$emit('pullingUp')
    })
  },
  methods:{
    scrollTo(x,y,time=1000){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp();
    },
    refresh(){
      this.scroll && this.scroll.refresh();
    },
    getScrollY(){
      return this.scroll ? this.scroll.y : 0;
    }
  },
  //监听的数据变化时都会执行回调进行后续操作
  watch:{
    data(){
      setTimeout(this.refresh,20);
    }
    
  }
}
</script>

<style scoped>

</style>