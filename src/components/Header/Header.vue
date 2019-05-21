<template>
  <section class="content-header">
    <h1>
      {{ $t("header.title") }}
      <small>{{ $t("header.subtitle") }}</small>
    </h1>
    <HeaderBreadcrumbs />
  </section>
</template>

<script>
// @ is an alias to /src
import HeaderBreadcrumbs from "@/components/HeaderBreadcrumbs/HeaderBreadcrumbs.vue";

export default {
  name: "Header",
  components: {
    HeaderBreadcrumbs
  }
};
</script>
