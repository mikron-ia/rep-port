<template>
  <div class="home">
    <h1>People</h1>
    <div v-if="isUserValid">
      <p>Not yet implemented</p>
      <p>Intended content: list of people with their scores</p>
    </div>
    <div v-else class="error">
      <p>
        You are accessing the service anonymously. To access the list and
        reputations of the people you know, please log in.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  name: "People",
  computed: {
    ...mapGetters(["isUserValid"])
  }
})
export default class People extends Vue {}
</script>
