<template>
  <div>
    <List 
        :list="userList" 
        v-on:item-clicked="itemClicked($event)" />
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
      console.log($event.id);
      this.$router.push({ name: 'profileID', params: { id: $event.id } });
    }
  },
  components: {
      List
  }
};
</script>
