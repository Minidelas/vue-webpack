<template>
  <div>
    <Navbar />
    <Sidebar />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";

export default {
  name: "MaskLayout",
  components: {
    Navbar,
    Sidebar
  }
};
</script>
