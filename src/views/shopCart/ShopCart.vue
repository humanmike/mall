<template>
    <div id="cart">
        <cart-nav-bar/>
        <cart-bottom-bar/>
        <cart-list></cart-list>
    </div>
</template>

<script>
    // 导入子组件
    // 导入顶部导航栏
    import cartNavBar from './childComps/CartNavBar'
    // 导入底部导航栏
    import cartBottomBar from './childComps/CartBottomBar'
    // 导入购物车展示
    import cartList from './childComps/CartList'

  export default {
    name: "ShopCart",
    // 混入
    mixins: [],
    // 注册组件
    components: {
      cartNavBar,
      cartBottomBar,
      cartList,
    },
    // 数据存放
    data(){
      return {

      }
    },
    // 计算属性
    computed: {

    },
    // 函数
    methods:{

    },
    // 挂载前执行
    created() {
    },
    // 挂载后执行
    mounted() {
    },
  }
</script>

<style scoped>

</style>