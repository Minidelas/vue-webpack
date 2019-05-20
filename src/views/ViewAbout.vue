<template>
  <div class="about">
    <div class="row">
      <h1 class="col-12">{{ $t("about.title") }}</h1>
    </div>
    <List :list="list" />
  </div>
</template>

<script>
import List from "@/components/List/List.vue";
import {
  ADD_ITEM_TO_ABOUT_LIST,
  DELETE_ITEM_FROM_ABOUT_LIST
} from "@/mutation-types";

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
