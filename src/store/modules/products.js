import productsApi from "@/api/products";
import { getIcons } from "@/helpers";
const icons = getIcons();

const state = {
  productsList: [],
};
const mutations = {
  productsSuccess(state, payload) {
    state.productsList = payload.map((item) => ({
      name: item.dish,
      cost: Math.round(Math.random() * 10 * 100) / 100,
      id: item.uid,
      image: icons[Math.floor(Math.random() * icons.length)],
    }));
  },
};

const actions = {
  products(context) {
    return new Promise(() => {
      // context.commit("registerStart");
      productsApi
        .products()
        .then((responce) => {
          const { data } = responce;
          console.log(data);
          //  console.log(resolve);
          context.commit("productsSuccess", data);
        })
        .catch((result) => {
          console.log(result, "resultErrors", result.responce.data.errors);
        });
    });
  },
};

export default {
  state,
  actions,
  mutations,
};
