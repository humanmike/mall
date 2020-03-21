<template>
    <div class="tab-bar-item" @click="tabBarItemClick">
        <div v-if="isActive">
            <slot name="item-icon-active"></slot>
        </div>
        <div v-else>
            <slot name="item-icon"></slot>
        </div>
        <div :style="isColor">
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path: String,
      fontColorStyle: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.includes(this.path) != false
      },
      isColor() {
        return this.isActive ? {color: this.fontColorStyle} : {}
      }
    },
    methods: {
      tabBarItemClick(){
        this.$router.push(this.path)
      }
    }

  }
</script>

<style scoped>
    .tab-bar-item {
        display: inline-block;
        width: 80px;
        margin-left: 10px;
    }
</style>