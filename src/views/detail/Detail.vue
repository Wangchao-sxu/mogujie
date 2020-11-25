<template>
  <div id='detail'>
    <DetailNavBar class="detail-nav"></DetailNavBar>
    <Scroll class="content" ref="scroll">
      <DetailSwiper :topImage="topImage"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo" 
                        @imageLoad="imageLoad"></DetailGoodsInfo>
      <DetailParamInfo :paramInfo="paramInfo"></DetailParamInfo>
      <DetailCommentInfo :commentInfo="commentInfo"></DetailCommentInfo>
      <GoodsList :goods="recommends"></GoodsList>
    </Scroll>
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
    GoodsList
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
      recommends:[]
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
  },
  mounted(){
    const refresh = this.debounce(this.$refs.scroll.refresh)
    this.$bus.$on('itemImageLoad',()=>{
      console.log('------------')
      refresh();
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
    height: calc(100% - 44px);
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>