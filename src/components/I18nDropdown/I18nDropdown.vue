<template>
  <li class="dropdown user user-menu open">
    <a class="dropdown-toggle" @click="toogleDropdown">
      <span class="hidden-xs">Internazionalization</span>
    </a>

    <ul class="dropdown-menu" :class="{ open: showDropdown }">
      <!-- Menu Body -->
      <li class="user-body">
        <div class="row">
          <div
            v-for="lang in languages"
            :key="lang.language"
            class="col-xs-4 text-center"
          >
            <button class="btn" @click="changeLocale(lang.language)">
              <flag :iso="lang.flag" :squared="false" />
              {{ lang.title }}
            </button>
          </div>
        </div>
        <!-- /.row -->
      </li>
    </ul>
  </li>
</template>

<script>
import { i18n } from "@/plugins/i18n";

export default {
  name: "I18nDropdown",
  data() {
    return {
      languages: [
        { flag: "us", language: "en", title: "English" },
        { flag: "es", language: "es", title: "Español" }
      ],
      showDropdown: false
    };
  },
  methods: {
    toogleDropdown() {
      this.showDropdown = !this.showDropdown;
    },

    changeLocale(locale) {
      i18n.locale = locale;
    }
  }
};
</script>

<style lang="scss" scoped>
.dropdown-menu.open {
  display: block;
}
</style>
