import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import CochesComponent from "./components/CochesComponent.vue";

const myRoutes = [{ path: "/", component: CochesComponent }];

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes,
});

export default router;
