<template>
  <div class="about">
    <h1>This is an about page</h1>
    <List v-on:delete-item-id="deleteItem($event)" />

    <BaseInputText
      v-bind:labelText="'Add items here:'"
      v-bind:valueIn="inputValue"
      v-on:value-out="onValueOut($event)"
    >
    </BaseInputText>

    <div v-if="errorMessage !== ''">{{ errorMessage }}</div>

    <BaseButton
      v-bind:btn_text="'Submit'"
      v-bind:button_type="'success'"
      @click="submit"
    >
    </BaseButton>
  </div>
</template>

<script>
import List from "@/components/List/List.vue";
import {
  ADD_ITEM_TO_ABOUT_LIST,
  DELETE_ITEM_FROM_ABOUT_LIST
} from "@/mutation-types";

export default {
  data() {
    return {
      inputValue: "",
      errorMessage: ""
    };
  },
  components: {
    List
  },
  methods: {
    onValueOut($event) {
      this.inputValue = $event;
    },

    submit() {
      this.errorMessage = "";
      if (this.inputValue !== "") {
        this.$store.commit(ADD_ITEM_TO_ABOUT_LIST, this.inputValue);
      } else {
        this.errorMessage = "Add some text";
      }
    },

    deleteItem($event) {
      this.errorMessage = "";
      this.$store.commit(DELETE_ITEM_FROM_ABOUT_LIST, $event);
    }
  }
};
</script>
