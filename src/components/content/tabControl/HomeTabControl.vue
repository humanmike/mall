<template>
    <div class="tab-control">
        <div class="tab-control-item"
             v-for="(item, index) in titles"
             :class="{active: index === currentIndex}" @click="tabControlClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "HomeTabControl",
    data(){
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      tabControlClick(index){
        this.currentIndex = index
        // 把首页选项传递给上级组件
        this.$emit('tab-control-click', index)
      }
    }
  }
</script>

<style scoped>
    .tab-control {
        width: 100%;
        text-align: center;
    }

    .tab-control-item {
        display: inline-block;
        width: 30%;
        height: 40px;
        line-height: 40px;
    }

    .active {
        text-decoration: underline;
        color: var(--color-tint);
    }
</style>