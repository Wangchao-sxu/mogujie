<template>
  <div id='detail'>
    <DetailNavBar class="detail-nav"
                  @titleClick="titleClick"
                  ref="nav"></DetailNavBar>
    <Scroll class="content" 
            ref="scroll" 
            :probeType='3'
            @scroll="contentScroll">
      <DetailSwiper :topImage="topImage"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo" 
                        @imageLoad="imageLoad"></DetailGoodsInfo>
      <DetailParamInfo ref="param" :paramInfo="paramInfo"></DetailParamInfo>
      <DetailCommentInfo ref="comment" :commentInfo="commentInfo"></DetailCommentInfo>
      <GoodsList ref="recommend" :goods="recommends"></GoodsList>
    </Scroll>
    <DetailBottomBar @addToCart="addToCart"></DetailBottomBar>
    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'
import BackTop from '../../components/content/backTop/BackTop'

import Scroll from '../../components/common/scroll/Scroll'
import GoodsList from '../../components/content/goods/GoodsList'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '../../network/detail'
export default {
  name:'Detail',
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop
  },
  data(){
    return {
      iid:null,
      topImage:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopYs:[],
      currentIndex:0,
      isShowBackTop:false, 
    }
  },
  created(){
    //1、保存传入的iid
    this.iid = this.$route.params.iid
    //2、根据iid请求详情数据
    getDetail(this.iid).then(res =>{
      console.log(res);
      //1、获取返回的数据
      const data = res.result;
      //2、获取顶部的图片轮播数据
      this.topImage = data.itemInfo.topImages
      //3、获取商品信息的数据（通过es6类的方法对需要的数据进行整合）
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //4、获取商家信息的数据
      this.shop = new Shop(data.shopInfo)
      //5、获取商品详细信息
      this.detailInfo = data.detailInfo
      //6、获取商品参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
      //7、获取评论信息
      if(data.rate.cRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
    })
    //3、请求推荐的数据
    getRecommend().then(res=>{
      console.log(res);
      this.recommends = res.data.list;
    })
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0);
    },
    imageLoad(){
      this.$refs.scroll.refresh();
    },
    debounce(func,delay){
      let timer = null;

      return function(...args){
        if(timer){clearTimeout(timer)}

        timer = setTimeout(()=>{
          func.apply(this,args)
        },delay)
      }
    },
    titleClick(index){
      console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
    },
    contentScroll(position){
      // console.log(position);
      this.isShowBackTop = (-position.y) > 1000
      //1、获取Y值
      const positionY = -position.y;
      //2、positonY和主题中的y值进行对比
      /*
        [0，7938，9120，9452，Number.MAX_VALUE]
        positionY在0和7938之间，index=0
        positionY在7938和9120之间，index=1
        positionY在9120和9452之间，index=2
        positionY在9452和一个非常大的值之间，index=3
      */ 
      let length = this.themeTopYs.length;
      for(let i=0;i<length-1;i++){
        if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    addToCart(){
      //1、获取购物车需要展示的信息
      const product = {}
      product.image = this.topImage[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      //2、将商品加入到购物车（从当前页面提交数据到vuex中的store的state）
      this.$store.dispatch('addCart',product)
    },
    getOffsetTop(){
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopYs.push(Number.MAX_VALUE)
    }
  },
  updated(){
    this.getOffsetTop();
  },
  mounted(){
    const refresh = this.debounce(this.$refs.scroll.refresh)
    this.$bus.$on('itemImageLoad',()=>{
      refresh()
      // console.log(this.themeTopYs);
    })
  }
}
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 11;
    background-color: #fff;
    height: 100vh;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>