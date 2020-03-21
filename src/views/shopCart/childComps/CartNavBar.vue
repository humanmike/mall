<template>
    <div class="cart-nav-bar">
        <nav-bar>
            <div slot="center">
                <div>购物车({{showShopCartListLength}})</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import navBar from 'components/common/navbar/NavBar'
    import {mapGetters} from 'vuex'
  export default {
    name: "CartNavBar",
    components: {
      navBar
    },
    computed:{
      ...mapGetters(['showShopCartList','showShopCartListLength'])
    }
  }
</script>

<style scoped>

</style>