<template>
  <div class="box box-primary">
    <div class="box-header with-border">
      <h3 class="box-title">Quick Example</h3>
    </div>
    <!-- /.box-header -->

    <!-- form start -->
    <form role="form">
      <div class="box-body">
        <BaseInputText
          v-bind:labelText="'My Custom input text'"
          v-bind:valueIn="inputValue"
          v-on:value-out="onValueOut($event)"
        >
        </BaseInputText>
      </div>
      <!-- /.box-body -->

      <div class="box-footer">
        <BaseButton
          v-bind:btn_text="'Click aquí!'"
          v-bind:button_type="'success'"
          v-on:click="onSubmit"
        >
        </BaseButton>
      </div>
    </form>
  </div>
  <!-- /.box -->
</template>

<script>
export default {
  data() {
    return {
      inputValue: "Lorem ipsum dolor"
    };
  },
  methods: {
    onSubmit() {
      console.log(this.inputValue);
    },
    onValueOut($event) {
      this.inputValue = $event;
      console.log($event);
    }
  }
};
</script>
