<template>
  <div class="form-group">
    <label v-if="labelText">{{ $t(labelText) }}</label>
    <input
      class="form-control"
      type="text"
      v-model="value"
      @input="valueOut"
      :placeholder="$t(placeholderText)"
    />
  </div>
</template>

<script>
export default {
  props: {
    labelText: {
      type: String
    },
    placeholderText: {
      type: String,
      required: false,
      default: ""
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
