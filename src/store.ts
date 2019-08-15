import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    networkDictionary: {
      "@-rep": {
        name: "@-rep"
      }
    },
    people: {}
  },
  mutations: {
    setNetworkDictionary(state, dictionary) {
      state.networkDictionary = dictionary;
    },
    setPeople(state, people) {
      state.people = people;
    }
  },
  actions: {}
});
