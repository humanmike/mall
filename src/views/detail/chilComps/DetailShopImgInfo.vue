<template>
    <div v-if="Object.keys(shopDetailInfo).length != 0" class="goods-info">
        <!--商品详情的描述-->
        <div class="info-desc clear-fix">
            <!--商品详情的描述样式根据class展示-->
            <div class="start"></div>
            <!--商品详情的描述具体内容-->
            <div class="desc">{{shopDetailInfo.desc}}</div>
            <!--商品详情的描述样式根据class展示-->
            <div class="end"></div>
        </div>

        <div v-for="item in shopDetailInfo.detailImage">
            <!--商品图片的描述-->
            <div class="info-key">{{item.key}}</div>
            <!--商品图片-->
            <div class="info-list">
                <img v-for="(info,index) in item.list"
                     :src="info"
                     alt=""
                     :key="index"
                     @load="checkDetailImgLoad">
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DetailShopImgInfo",
    props:{
      shopDetailInfo:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      checkDetailImgLoad(){
        // 传递给上级组件图片加载完成
        this.$emit('detail-img-load')
      }
    }
  }
</script>

<style scoped>
    .goods-info {
        padding: 20px 0;
        border-bottom: 5px solid #f2f5f8;
    }

    .info-desc {
        padding: 0 15px;
    }

    .info-desc .start, .info-desc .end {
        width: 90px;
        height: 1px;
        background-color: #a3a3a5;
        position: relative;
    }

    .info-desc .start {
        float: left;
    }

    .info-desc .end {
        float: right;
    }

    .info-desc .start::before, .info-desc .end::after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #333;
        bottom: 0;
    }

    .info-desc .end::after {
        right: 0;
    }

    .info-desc .desc {
        padding: 15px 0;
        font-size: 14px;
    }

    .info-key {
        margin: 10px 0 10px 15px;
        color: #333;
        font-size: 15px;
    }

    .info-list img {
        width: 100%;
    }
</style>