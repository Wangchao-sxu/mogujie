<template>
  <div id="home">  
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    
    <Scroll class="content" 
            ref="scroll" 
            :probeType='3' 
            @scroll='contentScroll'
            :pullUpLoad="true"
            @pullingUp="loadMore">
      <HomeSwiper :banners='banners'></HomeSwiper><!--父传子，动态属性，传递一个banners数组-->
      <RecommendView :recommends='recommends'></RecommendView>
      <Feature></Feature>
      <TabControl class="tab-control" 
                  :titles="['流行','新款','精选']"
                  @tabClick="tabClick"></TabControl>
      <GoodsList :goods="showGoods"></GoodsList>
    </Scroll>

    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
  </div>
</template>

<script>
import HomeSwiper from './childComps/homeSwiper'
import RecommendView from './childComps/RecommendView'
import Feature from './childComps/Feature'

import NavBar from '../../components/common/navbar/NavBar'
import TabControl from '../../components/content/tabControl/TabControl'
import GoodsList from '../../components/content/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll'
import BackTop from '../../components/content/backTop/BackTop'

import {getHomeMultidata} from '../../network/home'
import {getHomeGoods} from '../../network/home'

export default {
  name:'Home',
  components:{
    HomeSwiper,
    RecommendView,
    Feature,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  //保存到data中的数据就不会被销毁了
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      isShowBackTop:true
    }
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  //创建时就请求数据
  created(){
    //1、请求多个数据
    this.getHomeMultidata();
    //2、请求商品数据(传递类型)
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods:{
    /*事件监听相关的方法 */
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0);
    },
    contentScroll(position){
      // console.log(position)
      this.isShowBackTop = (-position.y) > 1000
    },
    loadMore(){
      // console.log('上拉加载更多')
      setTimeout(()=>{
        this.getHomeGoods(this.currentType)
        this.$refs.scroll.scroll.refresh()//加载完成后刷新一次，重新计算高度
      },2000)
    },

    /**网络请求的方法 */
    getHomeMultidata(){
      getHomeMultidata().then(res =>{
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
    },

    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res =>{
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
    /* position: relative; */
  }
  .home-nav{
    background-color:pink;
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;/*粘滞定位 */
    top: 44px;
    background-color: #fff;
    z-index: 9;
  }
  .content{
    margin-top: 44px;
    height: calc(100% - 93px);
    /* position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0; */
    /* overflow: hidden; */
  }
</style>