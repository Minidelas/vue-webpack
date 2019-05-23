<template>
  <div>
    <h1>{{ $t("user_list.title") }}</h1>
    <div class="row no-gutters">
      <List class="col-6" :list="profilesList" @item-clicked="itemClicked($event)" />
    </div>
  </div>
</template>

<script>
import List from "@/components/List/List.vue";
import UserService from "@/services/user.service";
import { mapState, mapMutations } from "vuex";

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
    return {};
  },

  created() {
    if (!this.$store.state[ns]) {
      this.$store.registerModule(ns, ProfilesModule);
    }
  },

  mounted() {
    UserService.getUsers().then(response => {
      var userList = response.data.map(elem => {
        return {
          id: elem.id,
          label: elem.name
        };
      });

      this.$store.commit("profiles/setProfilesList", userList);
    });
  },

  methods: {
    itemClicked($event) {
      this.$router.push({ name: "PROFILE_ID", params: { id: $event.id } });
    }
  },

  computed: {
    ...mapState(ns, ["profilesList"])
  },

  mutations: {
    ...mapMutations(ns, ["setProfilesList"])
  },
  
  components: {
    List
  }
};
</script>
