import { createWebHistory, createRouter } from "vue-router";
import comingSoon from "../views/coming-soon.vue";
import Navbar from '../components/navbar.vue';
import Home from '../views/home.vue';
const routes = [
  {
    path: "/",
    name: "coming-soon",
    component: comingSoon,
  },
  {
    path: "/navbar",
    name: "navbar",
    component: Navbar,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;