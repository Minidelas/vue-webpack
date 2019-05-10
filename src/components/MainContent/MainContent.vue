<template>
  <div class="content-wrapper">
    <Header />
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";

export default {
  name: "MainContent",
  components: {
    Header
  }
};
</script>
