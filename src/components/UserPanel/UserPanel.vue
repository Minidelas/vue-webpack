<template>
  <!-- Sidebar user panel -->
  <div class="user-panel">
    <div class="pull-left image">
      <img src="./../../assets/logo.png" class="img-circle" alt="User Image" />
    </div>
    <div class="pull-left info">
      <p>{{ username }}</p>
      <p><i class="fa fa-circle text-success"></i> Online</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPanel",
  data() {
    return {
      username: "My username"
    };
  }
};
</script>
