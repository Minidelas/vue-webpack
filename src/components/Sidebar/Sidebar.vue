<template>
  <aside class="main-sidebar">
    <section class="sidebar">
      <UserPanel />
      <NavigationMenu />
    </section>
  </aside>
</template>

<script>
import UserPanel from "@/components/UserPanel/UserPanel.vue";
import NavigationMenu from "@/components/NavigationMenu/NavigationMenu.vue";

export default {
  name: "Sidebar",
  components: {
    UserPanel,
    NavigationMenu
  }
};
</script>
