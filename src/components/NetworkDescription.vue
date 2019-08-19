<template>
  <div
    class="networks-description-box"
    @click="descriptionVisible = !descriptionVisible"
  >
    <h2>
      {{ network.tag }}: {{ network.name }}
      <span class="label" :class="network.type">
        {{ network.type.toUpperCase() }}
      </span>
    </h2>
    <div v-show="descriptionVisible">{{ network.description }}</div>
  </div>
</template>

<script>
export default {
  name: "NetworkDescription",
  props: ["network"],
  data() {
    return {
      descriptionVisible: false
    };
  }
};
</script>
