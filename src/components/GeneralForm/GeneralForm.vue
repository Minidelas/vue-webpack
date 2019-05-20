<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">{{ $t("general_form.title") }}</h3>
    </div>
    <!-- /.box-header -->

    <!-- form start -->
    <div role="form">
      <div class="box-body">
        <BaseInputText
          :labelText="'general_form.username.label'"
          :placeholderText="'general_form.username.placeholder'"
          :valueIn="getUsername"
          @value-out="setUsername($event)"
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
              @emitted="increment"
            >
            </BaseButton>
          </div>

          <div class="col-auto">
            <BaseButton
              :button_emisor="'MOUSEDOWN'"
              :button_text="' - '"
              :button_type="'danger'"
              @emitted="decrease"
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
  // beforeCreate() {
  //   console.log("BeforeCreate");
  // },
  created() {
    console.log("created");
  },
  // beforeMount() {
  //   console.log("beforeMount");
  // },
  mounted() {
    console.log("mounted");
  },
  // beforeUpdate() {
  //   console.log("beforeUpdate");
  // },
  updated() {
    console.log("update");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  // beforeDestroy() {
  //   console.log("beforeDestroy");
  // },
  destroyed() {
    console.log("destroyed");
  },
  errorCaptured: (err, vm, info) => {
    console.log(err);
    console.log(vm);
    console.log(info);
  },
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
