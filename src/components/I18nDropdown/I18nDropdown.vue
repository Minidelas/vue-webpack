<template>
  <li class="dropdown user user-menu open">
    <button
      class="dropdown-toggle btn btn-outline-light"
      @click="toogleDropdown"
    >
      <span class="hidden-xs">{{ $t("internazionalization.title") }}</span>
    </button>

    <ul class="dropdown-menu" :class="{ open: showDropdown }">
      <!-- Menu Body -->
      <li class="user-body">
        <div class="row">
          <div
            v-for="lang in languages"
            :key="lang.language"
            class="col-12 text-center"
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
.dropdown-menu {
  max-width: 160px;

  &.open {
    display: block;
  }
}
</style>
