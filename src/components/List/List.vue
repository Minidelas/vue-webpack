<template>
  <ul class="list-group" v-if="list.length > 0">
    <li class="list-group-item" v-for="item in list">
      {{ item.label }}
      <i class="fa fa-times pull-right" @click="deleteItemById(item)"></i>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: this.$store.state.aboutList
    };
  },
  methods: {
    deleteItemById(item) {
      this.$emit("delete-item-id", item.id);
    }
  }
};
</script>

<style lang="scss">
ul {
  margin-bottom: 10px !important;

  i {
    cursor: pointer;
  }
}
</style>
