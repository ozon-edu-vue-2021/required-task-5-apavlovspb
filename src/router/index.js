import Vue from "vue";
import VueRouter from "vue-router";
import Basket from "@/views/Basket/Basket.vue";
import Store from "@/views/Store/Store.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "store",
    component: Store,
  },
  {
    path: "/basket",
    name: "basket",
    component: Basket,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
