<template>
  <div class="check-button" :class="{check:isChecked}"></div>
</template>

<script>
export default {
  name:"CheckButton",
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
  .check-button{
    border-radius: 50%;
    border: 2px solid #aaa;
    width: 20px;
    height:20px;
    overflow: hidden;
  }
  .check{
    background-color: pink;
    border-color: pink;
  }
</style>