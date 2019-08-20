import Vue from "vue";
import Vuex from "vuex";
import uplink from "./uplink";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    networkDictionary: [],
    people: {}
  },
  getters: {
    areNetworksLoaded: state => {
      return state.networkDictionary.length > 0;
    },
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
  actions: {
    loadNetworkDictionary({ commit }) {
      uplink.getNetworks(response => {
        commit("setNetworkDictionary", response.data);
      });
    }
  }
});
