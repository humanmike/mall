<template>
    <div class="goods-item" @click="goodItemsClick">
        <img :src="showImg" alt="" @load="checkImgLoad">
        <div class="goods-info">
            <p>{{goodItems.title}}</p>
            <span class="price">价格: {{goodItems.price}}</span>
            <span class="collect">收藏: {{goodItems.cfav}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "GoodItems",
    props:{
      goodItems: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    computed: {
      showImg(){
        if (this.goodItems.hasOwnProperty('show')) return this.goodItems.show.img
        return this.goodItems.image
      }
    },
    methods:{
      // 图片加载完成
      checkImgLoad(){
        this.$bus.$emit('img-load')
      },
      // 跳转详情页
      goodItemsClick(){
        this.$router.push('/detail/'+ this.goodItems.iid)
      }
    }
  }
</script>

<style scoped>
    .goods-item {
        display: inline-block;
        width: 45%;
        height: 280px;
        margin-left: 5px;
    }


    .goods-item img {
        display: block;
        width: 100%;
    }

    .goods-item p {
        font-size: 13px;
        font-weight: 700;
    }

    .goods-item span {
        margin-left: 4px;
        font-size: 13px;
    }

    .goods-item .price {
        color: var(--color-tint);
    }
</style>