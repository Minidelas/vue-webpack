<template>
  <div class="about">
    <div class="row">
      <h1 class="col-12">{{ $t("about.title") }}</h1>
    </div>
    <div class="row no-gutters">
      <List class="col-3" :list="list" />
    </div>
  </div>
</template>

<script>
import List from "@/components/List/List.vue";

export default {
  data() {
    return {
      inputValue: "",
      errorMessage: ""
    };
  },

  components: {
    List
  },

  computed: {
    list() {
      return this.$store.state.aboutList;
    }
  },
  
  methods: {}
};
</script>
