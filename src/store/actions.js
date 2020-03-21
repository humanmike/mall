export const actions = {
  // 处理新商品
  optionShopCart(context, payload) {
    return new Promise((resolve, rejected) => {
      let oldProduct = context.state.shopCartList.find(n => n.iid == payload.iid)
      if (oldProduct) {
        context.commit('addCounter', oldProduct)
        resolve('添加旧商品+1')
      }else {
        payload.isChecked = true
        payload.count = 1
        context.commit('addNewShopCart', payload)
        resolve('添加新商品成功')
      }
    })

  }
}