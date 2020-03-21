<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar-item/>
  </div>
</template>

<script>
  import mainTabBarItem from 'components/content/mainTabBar/MainTabBarItem'
export default {
  name: 'App',
  components: {
    mainTabBarItem
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
