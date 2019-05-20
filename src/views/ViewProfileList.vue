<template>
  <div>
    <h1>{{ $t("user_list.title") }}</h1>
    <List :list="userList" @item-clicked="itemClicked($event)" />
  </div>
</template>

<script>
import List from "@/components/List/List.vue";

export default {
  data() {
    return {
      userList: this.$store.state.users
    };
  },
  methods: {
    itemClicked($event) {
      this.$router.push({ name: "profileID", params: { id: $event.id } });
    }
  },
  components: {
    List
  }
};
</script>
