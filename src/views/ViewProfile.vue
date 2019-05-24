<template>
  <div>
    <span class="back-button" @click="goBack">
      <i class="fa fa-chevron-left"></i>
      {{ $t("general.back") }}
    </span>
    <h2>{{ $t("profile.current_user") }} {{ user.name }}</h2>

    <div class="nav-tabs-custom">
      <ul class="nav nav-tabs">
        <li :class="{ active: checkRoute(data_route_name) }">
          <router-link
            class="nav-link"
            :to="{
              name: data_route_name,
              params: {
                id: $route.params.id
              }
            }"
          >
            {{ $t("profile.data") }}
          </router-link>
        </li>
        <li :class="{ active: checkRoute(task_route_name) }">
          <router-link
            class="nav-link"
            :to="{
              name: task_route_name,
              params: {
                id: $route.params.id
              }
            }"
          >
            {{ $t("profile.tasks") }}
          </router-link>
        </li>
      </ul>
    </div>

    <div class="tab-content">
      <div class="tab-pane active">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/user.service";
import {
  PROFILE_DATA_ROUTE,
  PROFILE_TASK_ROUTE,
  PROFILES_ROUTE
} from "@/routes-names";

export default {
  data() {
    return {
      user: {},
      data_route_name: PROFILE_DATA_ROUTE.name,
      task_route_name: PROFILE_TASK_ROUTE.name
    };
  },

  mounted() {
    UserService.getUser(this.$route.params.id).then(response => {
      this.user = response.data.user;
    });
  },

  methods: {
    goBack() {
      this.$router.push({ name: PROFILES_ROUTE.name });
    },

    checkRoute(route) {
      return this.$route.name === route;
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
