<template>
    <div class="goods">
        <good-items v-for="(item, index) in goods" :goodItems="item" :key="index"/>
    </div>
</template>

<script>
    import goodItems from './GoodItems'
  export default {
    name: "Goods",
    components: {
      goodItems
    },
    props:{
      goods: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>