<template>
  <div class="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'Toast',
  props:{
    message:{
      type:String,
      default:''
    },
    show:{
      type:Boolean,
      default:false
    }
  } 
}
</script>

<style scoped>

</style>