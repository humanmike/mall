<template>
    <div class="swiper-item">

        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "SwiperItem"
  }
</script>

<style scoped>
    /*设置每个item宽度,和固定高度保证图片不变形*/
    .swiper-item {
        width: 100%;
        height: 212px;
    }

</style>