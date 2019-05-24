import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    about: {
      title: "About us"
    },
    general: {
      back: "Back",
      search: "Search"
    },
    general_form: {
      button_add: "Add",
      button_decrease: "Decrease",
      title: "Example of form",
      username: {
        label: "Write here your username",
        placeholder: "Type here something..."
      }
    },
    header: {
      subtitle: "Little description of application",
      title: "Main title of application"
    },
    internazionalization: {
      title: "Language"
    },
    navigation: {
      dashboard: "Dashboard",
      form: "Form",
      profiles: "Profiles",
      about: "About us"
    },
    profile: {
      current_user: "Currently visualizing",
      data: "User data",
      tasks: "User tasks"
    },
    profile_list: {
      search_bar_placeholder: "Type the name to search..."
    },
    user_list: {
      title: "User list"
    },
    welcome: {
      description:
        "This is an example of SPA to scaffolding and testing the features of VUE",
      title: "Welcome to this APP!"
    }
  },

  es: {
    about: {
      title: "Sobre nosotros"
    },
    general: {
      back: "Volver",
      search: "Buscar"
    },
    general_form: {
      button_add: "Añadir",
      button_decrease: "Sustraer",
      title: "Ejemplo de formulario",
      username: {
        label: "Escribe aquí tu nombre de usuario",
        placeholder: "Escribe algo aquí..."
      }
    },
    header: {
      subtitle: "Pequeña descripción de la aplicación",
      title: "Título principal de la aplicación"
    },
    internazionalization: {
      title: "Idioma"
    },
    navigation: {
      dashboard: "Panel de control",
      form: "Formulario",
      profiles: "Perfiles",
      about: "Sobre nosotros"
    },
    profile: {
      current_user: "Visualizando actualmente",
      data: "Datos de usuario",
      tasks: "Tareas de usuario"
    },
    profile_list: {
      search_bar_placeholder: "Escriba el nombre que quiera buscar..."
    },
    user_list: {
      title: "Listado de usuarios"
    },
    welcome: {
      description:
        "Esto es un ejemplo de SPA para estructurar y testear funcionalidades de VUE",
      title: "Bienvenido a esta APP!"
    }
  }
};

export const i18n = new VueI18n({
  locale: "en", // set locale
  fallbackLocale: "es", // set fallback locale
  messages // set locale messages
});
