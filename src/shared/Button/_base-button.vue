<template>
  <div>
    <button
      class="btn"
      v-if="button_emisor == 'CLICK'"
      v-bind:class="[buttonClass]"
      @click="onClick"
    >
      {{ button_text }}
    </button>

    <button
      class="btn"
      v-if="button_emisor == 'MOUSEDOWN'"
      v-bind:class="[buttonClass]"
      @mousedown="mousedown"
      @mouseup="mouseup"
    >
      {{ button_text }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    button_emisor: {
      type: String,
      default: "CLICK"
    },
    button_text: String,
    button_type: String
  },
  data() {
    return {
      mousedownID: -1
    };
  },
  methods: {
    onClick() {
      this.$emit("emitted");
    },

    mousedown(event) {
      if (this.mousedownID == -1) {
        //Prevent multimple loops!
        this.mousedownID = setInterval(
          this.onClick,
          100 /*execute every 100ms*/
        );
      }
    },

    mouseup(event) {
      if (this.mousedownID != -1) {
        //Only stop if exists
        clearInterval(this.mousedownID);
        this.mousedownID = -1;
      }
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
