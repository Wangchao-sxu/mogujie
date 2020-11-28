export default {
  addCart(context,payload){
    return new Promise((resolve) => {
      //1、查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      //2、判断oldProduct
      if(oldProduct){//数量加1
        context.commit('addCounter',oldProduct);
        resolve('当前商品的数量加1');
      }else{//添加新的商品
        payload.count = 1;
        context.commit('addToCart',payload);
        resolve('添加到购物车成功');
      }
    })
  }
}