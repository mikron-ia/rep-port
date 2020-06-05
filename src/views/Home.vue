<template>
  <div class="home">
    <h1>News</h1>
    <div v-if="isUserValid">
      <p>Not yet implemented</p>
      Intended content: list of notable changes and news
    </div>
    <div v-else class="error">
      <p>
        You are accessing the service anonymously. To access the personalized
        news feed, please log in.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  components: {},
  computed: {
    ...mapGetters(["isUserValid"])
  }
})
export default class Home extends Vue {}
</script>
