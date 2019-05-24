<template>
  <div>
    <h1>{{ $t("user_list.title") }}</h1>
    <div class="row">
      <div class="col-6">
        <BaseInputText
          :placeholderText="'profile_list.search_bar_placeholder'"
          @value-out="setUsername($event)"
        />
      </div>
      <div class="col-auto">
        <BaseButton
          :button_text="'general.search'"
          :button_type="'success'"
          @emitted="something"
        />
      </div>
    </div>
    <div class="row">
      <List
        class="col-6 list"
        :list="userList"
        @item-clicked="itemClicked($event)"
      />
    </div>
  </div>
</template>

<script>
import List from "@/components/List/List.vue";
import UserService from "@/services/user.service";

const ProfilesModule = {
  namespaced: true,

  state() {
    return {
      profilesList: []
    };
  },

  mutations: {
    setProfilesList(state, list) {
      state.profilesList = list;
    }
  }
};

const ns = "profiles";

export default {
  data() {
    return {
      userList: [],

      username: ""
    };
  },

  created() {
    if (!this.$store.state[ns]) {
      this.$store.registerModule(ns, ProfilesModule);
    }
  },

  mounted() {
    UserService.getUsers().then(response => {
      this.userList = response.data.users.map(this._mappingUsers);
    });
  },

  methods: {
    itemClicked($event) {
      this.$router.push({ name: "PROFILE_DATA", params: { id: $event.id } });
    },

    setUsername($event) {
      this.username = $event;
    },

    something() {
      UserService.searchUser(this.username).then(response => {
        this.userList = response.data.users.map(this._mappingUsers);
      });
    },

    _mappingUsers(elem) {
      return {
        id: elem._id,
        label: elem.name + " " + elem.lastname
      };
    }
  },

  components: {
    List
  }
};
</script>

<style lang="scss" scoped>
.list {
  padding-left: 15px;
}
</style>
