<template>
  <div id="category">
    <NavBar class="category-bar">
      <div slot="center">商品分类</div>
    </NavBar>

    <div class="content">
      <!--左边的-->
      <TabMenu class="menu" :category="categories" 
                @selectItem="selectItem"></TabMenu>
      <!--右边的-->
      <Scroll id="tab-content" :data="[categoryData]">
        <TabContentCategory :subcategories="showSubcategory"></TabContentCategory>
      </Scroll>
    </div> 
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar'
import TabMenu from './childComps/TabMenu'
import Scroll from '../../components/common/scroll/Scroll'
import TabContentCategory from './childComps/TabContentCategory'

import { getCategory,getSubcategory } from '../../network/category'
export default {
  name:'Category',
  components:{
    NavBar,
    TabMenu,
    Scroll,
    TabContentCategory
  },
  data(){
    return {
      categories:[],
      categoryData:{},
      currentIndex: -1
    }
  },
  //创建组件
  created(){
    //创建组件时获取数据
    this._getCategory();
  },
  computed:{
    showSubcategory(){
      if(this.currentIndex === -1) return {}
      // console.log(this.categoryData[this.currentIndex].subcategories)
      return this.categoryData[this.currentIndex].subcategories
    }
  },
  methods:{
    _getCategory(){
      getCategory().then(res =>{
        console.log(res);
        //1、获取分类数据
        this.categories = res.data.category.list;
        //2、初始化每个类别的子数据
        for(let i=0;i<this.categories.length;i++){
          this.categoryData[i] = {
            subcategories:{}
          }
        }
        //3、请求第一个分类的数据
        this._getSubcategories(0)
      })
    },
    _getSubcategories(index){
      this.currentIndex = index;
      const mailKey = this.categories[index].maitKey;
      getSubcategory(mailKey).then(res => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = {...this.categoryData};
      })
    },
    selectItem(index){
      // console.log('......');
      this._getSubcategories(index);
    }
  }
}
</script>

<style scoped>
  #category {
    height: 100vh;
  }
  .category-bar{
    background-color: pink;
    color: #fff;
  }
  .content{
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom:49px;

    display: flex;
    overflow: hidden;
  }
  .menu{
    flex: 1;
  }
  #tab-content {
    height: 100%;
    flex: 3;
  }
</style>