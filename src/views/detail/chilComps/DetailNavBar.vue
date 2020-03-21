<template>
    <div class="detail-nav">
        <nav-bar>
            <div slot="left" @click="backPage">
                <img src="~assets/img/common/back.svg" alt="">
            </div>

            <div slot="center" class="title">
                <div class="title-item"
                     v-for="(item,index) in titles"
                     :class="{active: index === currentIndex}"
                     :key="index" @click="detailNavClick(index)">{{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import navBar from 'components/common/navbar/NavBar'
  export default {
    name: "DetailNavBar",
    data(){
      return {
        currentIndex: 0,
        titles: ['商品','参数','评论','推荐']
      }
    },
    components:{
      navBar
    },
    methods:{
      // 返回上一页
      backPage(){
        this.$router.back()
      },
      // 用户点击
      detailNavClick(index){
        this.currentIndex = index
        // 传递给上级组件点击索引
        this.$emit('detail-nav-click', index)
      }
    }
  }
</script>

<style scoped>
    /*微调箭头图标*/
    .detail-nav img {
        position: relative;
        top: 5px;
        height: 20px;
        width: 20px;
    }

    /*设置每个item样式*/
    .title-item {
        width: 25%;
        display: inline-block;
        font-size: 10px;
    }

    .active {
        text-decoration: underline;
    }
</style>