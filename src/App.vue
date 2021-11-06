<template>
  <div id="app">
    <PreLoader></PreLoader>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
body,
html {
  overflow-x: hidden;
  padding-right: 0 !important;
  &::-webkit-scrollbar {
    width: 8px;
    background: transparent;
    box-shadow: 3px 0 5px rgba($color: $mc, $alpha: 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background-color: #183052;
  }
}
</style>

<script>
import Navbar from "./components/Navbar.vue";
import PreLoader from "./components/PreLoader.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    PreLoader
  }
};
</script>
