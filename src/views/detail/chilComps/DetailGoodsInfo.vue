<template>
    <div v-if="Object.keys(goods).length != 0" class="base-info">
        <!--设置标题-->
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <!--新价格-->
            <span class="n-price">{{goods.newPrice}}</span>
            <!--老价格-->
            <span class="o-price">{{goods.oldPrice}}</span>
            <!--折扣信息-->
            <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <!--销量-->
            <span>{{goods.columns[0]}}</span>
            <!--收藏-->
            <span>{{goods.columns[1]}}</span>
            <!--发货时间-->
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <!--遍历services数组获取包邮退货信息-->
        <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props:{
      goods: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
    .base-info {
        width: 384px;
        height: 185px;
    }

    .info-title {
        height: 36px;
        margin-top: 5px;
        color: #222;
    }

    .info-price {
        height: 27px;
        margin-top: 10px;
    }

    .info-other {
        font-size: 13px;
        height: 31px;
        margin-top: 15px;
        line-height: 30px;
        border-bottom: 1px solid #808080;
    }


    .info-service {
        height: 61px;
        font-size: 13px;
        line-height: 60px;
        border-bottom: 1px solid #808080;
    }

    .info-service img {
        width: 10px;
        height: 10px;
        position: relative;
        top: 2px
    }

    .info-price .n-price {
        font-size: 24px;
        color: var(--color-high-text);
    }

    .info-price .o-price {
        font-size: 13px;
        margin-left: 5px;
        text-decoration: line-through;
    }

    .info-other span {
        display: inline-block;
        width: 128px;
        text-align: center;
    }

    .info-service .info-service-item {
        display: inline-block;
        margin-right: 20px;
        text-align: center;
    }
</style>