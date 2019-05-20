<template>
  <ol class="breadcrumb">
    <li><i class="fa fa-dashboard"></i> <span>Dashboard</span></li>
    <li v-for="route in routesSplitted" :key="route.label">
      <span>
        {{ route.label }}
      </span>
    </li>
  </ol>
</template>

<script>
export default {
  name: "HeaderBreadcrumbs",
  data() {
    return {
      routesSplitted: []
    };
  },
  watch: {
    $route(to) {
      this.routesSplitted = [];

      to.path.split("/").forEach(elem => {
        if (elem !== "") {
          const aux = {
            label: elem
          };

          this.routesSplitted.push(aux);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
ol {
  li {
    padding-right: 9px;

    i {
      padding-right: 5px;
    }

    &:last-child {
      padding-right: 0;
    }

    span:hover {
      text-decoration: underline;
    }
  }
}
</style>
