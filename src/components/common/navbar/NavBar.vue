<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>

        <div class="center">
            <slot name="center"></slot>
        </div>

        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
    .nav-bar {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #ffffff;
        background-color: var(--color-tint);
    }

    .left,.right {
        float: left;
        width: 20%;
        height: 40px;
    }

    .center {
        float: left;
        width: 60%;
    }
</style>