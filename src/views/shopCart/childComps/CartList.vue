<template>
    <scroll ref="scroll" class="content" :setClick="true">
        <div class="cart-list">
            <div>
                <cart-list-item v-for="(item,index) in showShopCartList" :cartListItems="item" :key="index"></cart-list-item>
            </div>
        </div>
    </scroll>
</template>

<script>
    import scroll from 'components/common/scroll/Scroll'
    import {mapGetters} from "vuex";
    import cartListItem from './CartListItem'
  export default {
    name: "CartList",
    components:{
      scroll,
      cartListItem,
    },
    computed:{
      ...mapGetters(['showShopCartList','showShopCartListLength']),

    }
  }
</script>

<style scoped>
    .cart-list {
        height: calc(100%- 44px - 49px);
    }
    .content{
        height: 100%;
        overflow: hidden;
    }
</style>