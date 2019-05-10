import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    username: "My username"
  },
  mutations: {
    increment(state) {
      state.count++;
    },

    decrease(state) {
      if (state.count > 0) {
        state.count--;
      }
    },

    setUsername(state, data) {
      state.username = data;
    }
  },
  actions: {}
});
