import { createRouter, createWebHistory } from "vue-router";

const Home = { template: "<h1>Home</h1>" };
const About = { template: "<h1>About</h1>" };

const routes = [
  { path: "/vue/test1", component: Home },
  { path: "/vue/test2", component: About },
];

const router = createRouter({
  base: "/vue",
  history: createWebHistory(),
  routes,
});

export default router;
