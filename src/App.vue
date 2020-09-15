<template>
  <div>
    <!--
     <router-view></router-view> -->
    <div id="app">
 <!--     <header-nav></header-nav> -->
      <router-view class="main"></router-view>
    </div>
  </div>
</template>

<script>
  // import HeaderNav from "./components/header-nav";

  export default {
    components: {
      // HeaderNav,
      name: 'app'
    }
  }
</script>

<style>

</style>
