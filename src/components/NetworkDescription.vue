<template>
  <div class="networks-description-box">
      {{ network.name }}
  </div>
</template>

<script>
export default {
  name: "NetworkDescription",
  props: ["network"],
  data() {
    return {};
  }
};
</script>
