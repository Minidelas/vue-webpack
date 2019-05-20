<template>
  <ul class="sidebar-menu">
    <li class="header">Navigation</li>

    <li v-for="link in links" :key="link.link">
      <NavigationMenuItem
        :iconClass="link.iconClass"
        :routeLink="link.link"
        :itemTitle="link.itemTitle"
        :badgeTitle="link.badgeTitle"
      />
    </li>
  </ul>
</template>

<script>
import NavigationMenuItem from "@/components/NavigationMenuItem/NavigationMenuItem";

export default {
  name: "NavigationMenu",
  data() {
    return {
      links: this.$store.state.routerLinks
    };
  },
  components: {
    NavigationMenuItem
  }
};
</script>
