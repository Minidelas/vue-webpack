<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">Quick Example</h3>
    </div>
    <!-- /.box-header -->

    <!-- form start -->
    <div role="form">
      <div class="box-body">
        <BaseInputText
          v-bind:labelText="'Change your username here:'"
          v-bind:valueIn="getUsername"
          v-on:value-out="setUsername($event)"
        >
        </BaseInputText>

        <div class="row">
          <div class="col">
            {{ count }}
          </div>
        </div>
      </div>
      <!-- /.box-body -->

      <div class="box-footer">
        <div class="row">
          <div class="col-auto">
            <BaseButton
              :button_emisor="'MOUSEDOWN'"
              :button_text="'Add'"
              :button_type="'success'"
              v-on:emitted="increment"
            >
            </BaseButton>
          </div>

          <div class="col-auto">
            <BaseButton
              :button_emisor="'MOUSEDOWN'"
              :button_text="' - '"
              :button_type="'danger'"
              v-on:emitted="decrease"
            >
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /.box -->
</template>

<script>
import { INCREMENT, DECREASE, SET_USERNAME } from "@/mutation-types";
import { mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations([INCREMENT, DECREASE, SET_USERNAME])
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    getUsername() {
      return this.$store.state.username;
    }
  }
};
</script>
