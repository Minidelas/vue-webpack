<template>
  <router-link class="nav-item nav-link" :to="routeLink">
    <i class="fa" :class="iconClass"></i> <span>{{ $t("navigation." + itemTitle) }}</span>
    <span v-if="badgeTitle" class="pull-right-container">
      <small class="badge badge-pill pull-right bg-green">{{
        badgeTitle
      }}</small>
    </span>
  </router-link>
</template>

<script>
export default {
  name: "NavigationMenuItem",
  props: {
    iconClass: {
      type: String,
      default: "fa-caret-right"
    },
    routeLink: {
      type: String,
      required: true
    },
    itemTitle: String,
    badgeTitle: [String, Number]
  }
};
</script>
