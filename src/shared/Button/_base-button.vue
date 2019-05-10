<template>
  <button class="btn" v-bind:class="[buttonClass]" @click="onClick">
    {{ btn_text }}
  </button>
</template>

<script>
export default {
  props: {
    btn_text: String,
    button_type: String
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  },
  computed: {
    buttonClass() {
      switch (this.button_type) {
        case "primary":
          return "btn-primary";

        case "secondary":
          return "btn-secondary";

        case "success":
          return "btn-success";

        case "danger":
          return "btn-danger";

        case "warning":
          return "btn-warning";

        case "info":
          return "btn-info";

        case "light":
          return "btn-light";

        case "dark":
          return "btn-dark";

        default:
          return "btn-primary";
      }
    }
  }
};
</script>
