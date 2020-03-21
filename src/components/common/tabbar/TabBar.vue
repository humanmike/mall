<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
    #tab-bar {
        height: 49px;
        width: 100%;
        position: fixed;
        bottom: 0;
        text-align: center;
        z-index: 9999;
        background-color: #fff;
    }

</style>