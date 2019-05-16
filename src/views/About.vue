<template>
  <div class="about">
    <h1>This is an about page</h1>
    <List :list="list" v-on:delete-item-id="deleteItem($event)" />

    <BaseInputText
      :labelText="'Add items here:'"
      :valueIn="inputValue"
      v-on:value-out="onValueOut($event)"
    >
    </BaseInputText>

    <div v-if="errorMessage !== ''">{{ errorMessage }}</div>

    <BaseButton
      :button_text="'Submit'"
      :button_type="'success'"
      v-on:emitted="submit"
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
  computed: {
    list() {
      return this.$store.state.aboutList;
    } 
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
