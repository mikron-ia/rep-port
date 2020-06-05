<template>
  <p>Signing in...</p>
</template>

<script>
export default {
  name: "LoginViaToken",
  created() {
    this.$store.commit("setSessionToken", true); // todo: add proper verification
    this.$store.commit("setUsername", "User"); // todo: add proper verification
    this.$router.push({ name: "home" });
  }
};
</script>
