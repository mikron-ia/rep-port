<template>
  <p>You have been logged out</p>
</template>

<script>
export default {
  name: "Logout",
  created() {
    this.$store.commit("setSessionToken", null);
    this.$store.commit("setUsername", null);
    this.$router.push({ name: "home" });
  }
};
</script>
