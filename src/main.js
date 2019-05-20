import Vue from "vue";
import "@/plugins/bootstrap-vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "@/shared/_globals";
import { i18n } from "@/plugins/i18n";
import FlagIcon from "vue-flag-icon";
import VueSocketIO from "vue-socket.io";

/*
 *
 */
Vue.use(FlagIcon);

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "localhost:3000",
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    },
    options: {
      path: "/appcom/"
    }
  })
);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
