import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    general: {
      back: "Back"
    },
    welcome: {
      title: "Welcome to this APP!",
      description:
        "This is an example of SPA to scaffolding and testing the features of VUE"
    },
    about: {
      title: "About us"
    },
    profile: {
      current_user: "Currently visualizing",
      data: "User data",
      tasks: "User tasks"
    },
    user_list: {
      title: "User list"
    },
    general_form: {
      title: "Example of form",
      username: {
        label: "Write here your username",
        placeholder: "Type here something..."
      }
    }
  },
  es: {}
};

export const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "es", // set fallback locale
  messages // set locale messages
});
