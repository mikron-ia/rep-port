<template>
  <div class="networks-dictionary">
    <h1>Available reputation networks</h1>
    <div v-if="!areNetworksLoaded" class="error">
      No networks available
    </div>
    <div v-for="network in networks" :key="network.name">
      <network-description :network="network"></network-description>
    </div>
  </div>
</template>

<script>
import NetworkDescription from "../components/NetworkDescription";
import { mapGetters } from "vuex";

export default {
  name: "NetworksDictionary",
  components: { NetworkDescription },
  computed: {
    ...mapGetters(["networks", "areNetworksLoaded"])
  },
  created() {
    if (!this.areNetworksLoaded) {
      this.$store.dispatch("loadNetworkDictionary");
    }
  },
  data() {
    return {
      chosenNetwork: null
    };
  }
};
</script>

<style scoped></style>
