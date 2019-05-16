import Vue from "vue";
import Vuex from "vuex";
import {
  ADD_ITEM_TO_ABOUT_LIST,
  DELETE_ITEM_FROM_ABOUT_LIST,
  INCREMENT,
  DECREASE,
  SET_USERNAME
} from "@/mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    count: 0,
    username: "My username",
    aboutList: [
      { id: 0, label: "Rápida elaboración." },
      { id: 1, label: "Sencillo y ágil." },
      { id: 2, label: "Máximo rendimiento." }
    ],
    routerLinks: [
      { link: "/", itemTitle: "Dashboard", badgeTitle: "New" },
      { link: "/form", itemTitle: "Form", badgeTitle: "" },
      { link: "/profiles", itemTitle: "Profiles", badgeTitle: "*" },
      { link: "/about", itemTitle: "About", badgeTitle: "" }
    ],
    users: [
      { id: 0, label: "Ismael" },
      { id: 1, label: "Samuel" },
      { id: 2, label: "Karina" },
      { id: 3, label: "Elena" }
    ]
  },
  mutations: {
    [ADD_ITEM_TO_ABOUT_LIST](state, label) {
      const aux = {
        id: state.aboutList.length,
        label: label
      };
      state.aboutList.push(aux);
    },

    [DELETE_ITEM_FROM_ABOUT_LIST](state, id) {
      state.aboutList.splice(id, 1);
    },

    [INCREMENT](state) {
      state.count++;
    },

    [DECREASE](state) {
      if (state.count > 0) {
        state.count--;
      }
    },

    [SET_USERNAME](state, data) {
      state.username = data;
    }
  }
});
