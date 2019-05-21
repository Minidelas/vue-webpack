<template>
  <div>
    <h1>{{ $t("user_list.title") }}</h1>
    <List :list="profilesList" @item-clicked="itemClicked($event)" />
  </div>
</template>

<script>
import List from "@/components/List/List.vue";
import $_axios from "@/axios-config";
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
      console.log(list);
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
      console.log(this.$store);
    }
  },
  mounted() {
    $_axios.get("/users/").then(response => {
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
