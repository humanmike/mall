<template>
    <div class="home-swiper">
        <swiper :banners="banners"></swiper>
    </div>
</template>

<script>
    import swiper from 'components/common/swiper/Swiper'
  export default {
    name: "HomeSwiper",
    props:{
      banners: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components:{
      swiper,
    }
  }
</script>

<style scoped>

</style>