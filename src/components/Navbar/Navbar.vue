<template>
  <header class="main-header">
    <!-- Logo -->
    <div class="logo">
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Ciber</b>Experis</span>
    </div>

    <nav class="navbar navbar-static-top">
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <I18nDropdown />
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import I18nDropdown from "@/components/I18nDropdown/I18nDropdown.vue";

export default {
  name: "Navbar",
  components: {
    I18nDropdown
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  justify-content: flex-end;
}
</style>
