<template>
  <div class="bottom-bar">
    <div class="check-content">
      <!--监听组件的点击需要加native-->
      <CheckButton 
                  :isChecked="isSelectAll" 
                  class="check-button"
                  @click.native="checkClick"></CheckButton>
      <span>全选</span>
    </div>

    <div class="price">
      合计：{{totalPrice}}
    </div>

    <div class="calculate" @click="calc">
      去计算({{checkedLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton'

export default {
  name:"CartBottomBar",
  components:{
    CheckButton
  },
  computed:{
    //fliter进行过滤，reduce将数组元素进行合并，0是preValue的初始值，toFixed(2)是保留两位小数
    totalPrice(){
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue + item.price * item.count; 
      },0).toFixed(2)
    },

    checkedLength(){
      return this.$store.state.cartList.filter(item =>item.checked).length;
    },

    isSelectAll(){
      if(this.$store.state.cartList.length === 0) return false;
      //使用find方法，数组的高阶函数
      // return !this.$store.state.cartList.find(item => !item.checked);

      //普通遍历
      for(let item of this.$store.state.cartList){
        if(!item.checked){
          return false;
        }
      }
      return true;
    }
  },
  methods:{
    checkClick(){
      if(this.isSelectAll){//全部选中
        return this.$store.state.cartList.forEach(item => item.checked = false);
      }else{
        return this.$store.state.cartList.forEach(item => item.checked = true);
      }
    },
    calc(){
      return this.$emit('calc')
    }
  }
}
</script>

<style scoped>
  .bottom-bar{
    position: relative;
    height: 40px;
    line-height: 40px;
    background-color: #eee;
    display: flex;
    font-size: 14px;
  }
  .check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .check-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
  }
  .price{
    margin-left: 20px;
  }
  .calculate{
    margin-left: auto;
    background-color: red;
    color: #fff;
    text-align: center;
  }
</style>