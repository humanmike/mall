<template>
    <div class="home-nav">
        <nav-bar>
            <div slot="center">首页</div>
        </nav-bar>
    </div>
</template>

<script>
    import navBar from 'components/common/navbar/NavBar'

  export default {
    name: "HomeNavBar",
    // 注册组件
    components: {
      navBar,
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