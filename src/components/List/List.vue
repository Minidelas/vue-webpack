<template>
  <ul class="list-group" v-if="list.length > 0">
    <li class="list-group-item" v-for="(item, index) in list" :key="item.label">
      <div class="row">
        <span class="col" @click="itemSelected(item)">{{ item.label }}</span>
        <i
          v-if="deleteable"
          class="fa fa-times col-auto"
          @click="deleteItemByIndex(index)"
        ></i>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    list: Array,
    deleteable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    itemSelected(item) {
      this.$emit("item-clicked", item);
    },

    deleteItemByIndex(index) {
      this.$emit("delete-item-id", index);
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  margin-bottom: 10px !important;

  li {
    cursor: pointer;

    &:hover {
      background-color: #f8f9fa;
    }

    i {
      cursor: pointer;
    }
  }
}
</style>
