<template>
  <div>
    <span class="back-button" @click="goBack">
        <i class="fa fa-chevron-left"></i> 
        BACK
    </span>
    <h2>Welcome user {{ userName }}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    },
    computed: {
        userName() {
            return this.$store.state.users[this.$route.params.id].label; 
        }
    },
};
</script>

<style lang="scss" scoped>
.back-button {
    cursor: pointer;

    &:hover {
        border-bottom: 1px solid black;
    }
}
</style>