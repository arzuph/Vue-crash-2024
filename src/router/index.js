import Vue from "vue";
import Router from "vue-router";
import HomePage from "../views/HomePage.vue"; // Correct path and name
import AboutPage from "../views/AboutPage.vue"; // Correct path and name

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/about",
      name: "AboutPage",
      component: AboutPage,
    },
  ],
});
