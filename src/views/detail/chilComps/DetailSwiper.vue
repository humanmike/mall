<template>
    <div class="detail-swiper">
        <swiper :banners="detailBanners"></swiper>
    </div>
</template>

<script>
    import swiper from 'components/common/swiper/Swiper'

  export default {
    name: "DetailSwiper",
    props:{
      detailBanners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      swiper
    }
  }
</script>

<style scoped>
    /*设置整个detail轮播图样式,图片超出部分直接截取*/
    .detail-swiper {
        width: 100%;
        height: 212px;
        overflow: hidden;
    }
</style>