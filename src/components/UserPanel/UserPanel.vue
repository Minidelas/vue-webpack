<template>
  <!-- Sidebar user panel -->
  <div class="user-panel">
    <div class="pull-left image">
      <img src="./../../assets/logo.png" class="img-circle" alt="User Image" />
    </div>
    <div class="pull-left info">
      <p>{{ getUsername }}</p>
      <p>
        <i
          class="fa fa-circle"
          :class="{ 'text-success': connection, 'text-danger': !connection }"
        ></i>
        Online
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserPanel",
  data() {
    return {
      connection: false
    };
  },
  computed: {
    getUsername() {
      return this.$store.state.username;
    }
  },
  sockets: {
    clientConnected(data) {
      this.connection = data.connection;
    }
  }
};
</script>
