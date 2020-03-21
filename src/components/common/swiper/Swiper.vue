<template>
    <div class="swiper">
        <swiper-item v-for="(item, index) in banners" :key="index" v-show="index === currentIndex">
            <img :src="showBannerImg(item)" alt="" @load="CheckSwiperImg">
        </swiper-item>
        <div class="icon-list">
            <div class="icon"
                 :class="{active: index===currentIndex}"
                 v-for="(iindex,index) in banners.length" :key="index" @click="changeBanner(index)"/>
        </div>
    </div>
</template>

<script>
    import swiperItem from './SwiperItem'
  export default {
    name: "Swiper",
    components: {
      swiperItem
    },
    props:{
      banners: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex: 0,
      }
    },
    methods: {
      showBannerImg(item) {
        if (item.hasOwnProperty('image')) return item.image
        return item
      },
      changeBanner(index) {
          this.currentIndex = index
        },
      CheckSwiperImg(){
        // 校验图片是否加载
        this.$bus.$emit('swiper-img-load')
      }
    },
    created() {
      setInterval(() => {
        if (this.currentIndex == this.banners.length - 1) {
          this.currentIndex = 0
        }else {
          this.currentIndex++
        }
      },3000)
    }
  }
</script>

<style scoped>
    /*设置swiper releatve辅助icon-list微调位置*/
    .swiper {
        position: relative;
        text-align: center;
    }

    /*设置图片展示全部*/
    .swiper img {
        width: 100%;
    }

    /*icon-list位置调试*/
    .icon-list {
        position: absolute;
        top: 190px;
        left: 0;
        right: 0;
        margin: 0 auto;
    }

    /*小图标样式*/
    .icon {
        display: inline-block;
        margin-left: 3px;
        width: 10px;
        height: 10px;
        background-color: #ffffff;
        border-radius: 50%;
    }

    .active {
        background-color: #ff5777;
    }
</style>