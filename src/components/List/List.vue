<template>
  <ul class="list-group" v-if="list.length > 0">
    <li class="list-group-item" v-for="item in list">
      <span @click="itemSelected(item)">{{ item.label }}</span>
      <i class="fa fa-times pull-right" @click="deleteItemById(item)"></i>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: Array
  },
  methods: {
    itemSelected(item) {
      this.$emit("item-clicked", item);
    },
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
