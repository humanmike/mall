<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item, index) in recommends" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommends: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
    .recommend {
        width: 100%;
        height: 135px;
        text-align: center;
    }

    .recommend-item {
        display: inline-block;
        width: 25%
    }

    .recommend-item img {
        width: 80%;
    }
</style>