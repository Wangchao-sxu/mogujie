export default {
  addCounter(state,payload){
    payload.count++
  },
  addToCart(state,payload){
    payload.checked = true;//设置默认是选中的
    state.cartList.push(payload)
  }
}