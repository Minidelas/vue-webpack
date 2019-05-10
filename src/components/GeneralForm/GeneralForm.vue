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
          v-on:value-out="onValueOut($event)"
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
              v-bind:btn_text="'Add'"
              v-bind:button_type="'success'"
              v-on:click="increment"
            >
            </BaseButton>
          </div>    
        
          <div class="col-auto">
            <BaseButton 
              v-bind:btn_text="' - '"
              v-bind:button_type="'danger'"
              v-on:click="decrease"
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
export default {
  data() {
    return {};
  },
  methods: {
    increment() {
      this.$store.commit('increment');
    },

    decrease() {
      this.$store.commit('decrease');
    },

    onValueOut($event) {
      this.$store.commit('setUsername', $event);
    }
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
