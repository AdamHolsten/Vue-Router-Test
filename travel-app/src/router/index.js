import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Brazil from "@/views/Brazil.vue"
import Hawaii from "@/views/Hawaii.vue"
import Jamaica from "@/views/Jamaica.vue"
import Panama from "@/views/Panama.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/brazil",
    name: "Brazil",
    component: Brazil
  },
  {
    path: "/hawaii",
    name: "Hawaii",
    component: Hawaii
  },
  {
    path: "/jamaica",
    name: "Jamaica",
    component: Jamaica
  },
  {
    path: "/panama",
    name: "Panama",
    component: Panama
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
