<template>
  <div>
    <span class="back-button" @click="goBack">
      <i class="fa fa-chevron-left"></i>
      {{ $t("general.back") }}
    </span>
    <h2>{{ $t("profile.current_user") }} {{ userName }}</h2>

    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{
            name: 'user-data',
            params: {
              id: $route.params.id
            }
          }"
        >
          {{ $t("profile.data") }}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{
            name: 'user-tasks',
            params: {
              id: $route.params.id
            }
          }"
        >
          {{ $t("profile.tasks") }}
        </router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push({ name: "profile" });
    }
  },

  computed: {
    userName() {
      return this.$store.state.users[this.$route.params.id].label;
    }
  }
};
</script>

<style lang="scss" scoped>
.back-button {
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid black;
  }
}
</style>
