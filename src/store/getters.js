export const getters = {
  showShopCartList(state){
    return state.shopCartList
  },

  showShopCartListLength(state) {
    return state.shopCartList.reduce((totalVal, currentVal) => {
      return totalVal + currentVal.count
    },0)
  }
}