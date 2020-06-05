import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import People from "@/views/People.vue";
import Network from "@/views/NetworksDictionary.vue";
import About from "@/views/About.vue";
import LoginViaToken from "@/components/LoginViaToken.vue";
import Logout from "@/components/Logout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/people",
      name: "people",
      component: People
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
    },
    {
      path: "/token-login",
      name: "token-login",
      component: LoginViaToken,
      meta: {
        layout: "plain"
      }
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    }
  ]
});
