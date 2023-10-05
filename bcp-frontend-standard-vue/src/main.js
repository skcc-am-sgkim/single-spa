import "./set-public-path";
import { h, createApp } from "vue";
import * as VueRouter from "vue-router";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";

// 1. Define route components.
// These can be imported from other files
const Home = { template: "<h1>Home</h1>" };
const About = { template: "<h1>About</h1>" };

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: "/frontend-standard-vue", component: Home },
  { path: "/frontend-standard-vue/about", component: About },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  base: "/frontend-standard-vue",
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
});

const vueLifecycles = singleSpaVue({
  createApp,
  handleInstance(app) {
    app.use(router);
  },
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
      });
    },
    router,
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
