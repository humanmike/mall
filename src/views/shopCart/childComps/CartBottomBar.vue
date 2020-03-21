<template>
    <div class="bottom-menu">
        <check-button class="select-all" :isCheck="cartSelectType" @click.native="clickSelectAll"></check-button>
        <span class="select-btn">全选</span>
        <span class="total-price">合计: ¥{{totalPrice.toFixed(2)}}</span>
        <span class="buy-product">去计算({{showShopCartListLength}})</span>
    </div>
</template>

<script>
    import checkButton from 'components/content/checkButton/CheckButton'
    import {mapGetters} from 'vuex'
  export default {
    name: "CartBottomBar",
    components:{
      checkButton,
    },
    computed:{
      ...mapGetters(['showShopCartList','showShopCartListLength']),
      totalPrice(){
        return this.showShopCartList.filter(n => n.isChecked == true)
            .reduce((totalVal, currentVal) => {
              return totalVal + currentVal.count * currentVal.price
            },0)
      },
      cartSelectType(){
        if (this.showShopCartList.length == 0) return false
        return !this.showShopCartList.find(n => n.isChecked == false)
      }
    },
    methods:{
      clickSelectAll(){
        if (this.cartSelectType) {
          this.showShopCartList.forEach(n => n.isChecked = false)
        }else {
          this.showShopCartList.forEach(n => n.isChecked = true)
        }
      }
    }
  }
</script>

<style scoped>
    .bottom-menu {
        position: fixed;
        width: 400px;
        height: 44px;
        bottom: 50px;
        background-color: #eee;
        border: 1px solid #808080;
    }

    .select-all,.select-btn,.total-price {
        margin-top: 10px;
        margin-right: 10px;
        float: left;
    }

    .buy-product {
        margin-top: 5px;
        float: right;
        padding: 5px;
        color: #fff  ;
        background-color: #ff4500;
    }
</style>