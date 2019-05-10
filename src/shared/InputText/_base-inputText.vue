<template>
  <div class="form-group">
    <label>{{ labelText }}</label>
    <input
      class="form-control"
      type="text"
      v-model="value"
      v-on:input="valueOut"
    />
  </div>
</template>

<script>
export default {
  props: {
    labelText: {
      type: String,
      required: true
    },
    valueIn: String
  },
  data() {
    return {
      value: this.valueIn
    };
  },
  methods: {
    valueOut() {
      this.$emit("value-out", this.value);
    }
  }
};
</script>
