import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Profile from "@/views/Profile.vue";
import Payments from "@/views/Payments.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "profile",
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/payments",
    name: "Payments",
    component: Payments,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
