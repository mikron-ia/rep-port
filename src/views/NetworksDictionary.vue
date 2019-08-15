<template>
  <div class="networks-dictionary">
    <div v-for="network in networks" :key="network.name">
      <network-description :network="network"></network-description>
    </div>
  </div>
</template>

<script>
import NetworkDescription from "../components/NetworkDescription";
export default {
  name: "NetworksDictionary",
  components: { NetworkDescription },
  data() {
    return {
      networks: this.$store.state.networkDictionary,
      chosenNetwork: null
    };
  }
};
</script>

<style scoped></style>
