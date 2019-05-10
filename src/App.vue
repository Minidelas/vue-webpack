<template>
  <div>
    <MaskLayout />
    <MainContent />
  </div>
</template>

<script>
// @ is an alias to /src
import MaskLayout from "@/components/MaskLayout/MaskLayout.vue";
import MainContent from "@/components/MainContent/MainContent.vue";

export default {
  name: "App",
  components: {
    MaskLayout,
    MainContent
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
