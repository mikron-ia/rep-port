import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    networkDictionary: [],
    people: {}
  },
  getters: {
    networks: state => {
      let networks: any = {};
      state.networkDictionary.forEach(function(item: any) {
        networks[item.tag] = item;
      });
      return networks;
    }
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
