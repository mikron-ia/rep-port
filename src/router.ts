import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Network from "./views/NetworksDictionary.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/network",
      name: "network",
      component: Network
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
