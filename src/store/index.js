import Vue from "vue";
import Vuex from "vuex";
import products from "@/store/modules/products";
import basket from "@/store/modules/basket";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { products, basket },
});
