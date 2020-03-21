export const mutations = {
  // 添加全新商品到购物车
  addNewShopCart(state, payload) {
    return state.shopCartList.push(payload)
  },

  // 旧商品+1
  addCounter(state, payload) {
    payload.count++
  }
}