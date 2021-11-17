const state = {
  productsListInBasket: [],
};
const mutations = {
  addToBasket(state, payload, test) {
    console.log(state, test);
    const includeElement = state.productsListInBasket.findIndex(
      (item) => item.id === payload.id
    );
    if (includeElement >= 0) {
      const totalCost =
        state.productsListInBasket[includeElement].totalCost +
        state.productsListInBasket[includeElement].cost;
      const newElement = {
        ...state.productsListInBasket[includeElement],
        count: state.productsListInBasket[includeElement].count + 1,
        totalCost: Math.floor(totalCost * 100) / 100,
      };
      state.productsListInBasket = [
        ...state.productsListInBasket.slice(0, includeElement),
        ...state.productsListInBasket.slice(includeElement + 1),
        newElement,
      ];
      return;
    }
    state.productsListInBasket.push({
      ...payload,
      count: 1,
      totalCost: payload.cost,
    });

    // state.productsListInBasket = [...state.productsListInBasket, payload];
  },
  removeFromBasket(state, payload) {
    state.productsListInBasket = state.productsListInBasket.filter(
      (item) => item.id !== payload.id
    );
  },
};

const getters = {
  getBasketTotal(state) {
    const value = state.productsListInBasket.reduce((prev, current) => {
      return prev + current.totalCost;
    }, 0);

    return Math.floor(value * 100) / 100;
  },
};

export default {
  state,
  mutations,
  getters,
};
