<template>
  <div>
    <router-link to="/">Store</router-link>
    <div class="basket">
      <template v-if="basketList.length">
        <div class="basket-titles">
          <div>item</div>
          <div>count</div>
          <div>cost</div>
        </div>
        <div v-for="item in basketList" v-bind:key="item.id">
          <BasketElement :item="item" />
        </div>
        <div class="basket-total">
          Total sum: <span>{{ totalValue }}</span>
        </div>
        <button class="basket-checkout" v-on:click="checkout">
          proceed to checkout
        </button>
      </template>
      <template v-else> <div>basket is clear</div></template>
    </div>
  </div>
</template>

<script>
import BasketElement from "./BasketElement.vue";
export default {
  name: "Basket",
  computed: {
    basketList() {
      return this.$store.state.basket.productsListInBasket;
    },
    totalValue() {
      return this.$store.getters.getBasketTotal;
    },
  },
  components: {
    BasketElement,
  },
  methods: {
    checkout: function () {
      alert(
        `${this.basketList
          .map((item) => `${item.name}: ${item.count} ${item.totalCost}`)
          .join("\n")}` +
          "\n \n" +
          `Total: ${this.totalValue}`
      );
    },
  },
};
</script>
<style scoped>
.basket {
  margin-top: 12px;
}
.basket-checkout {
  border: 1px solid rgb(70, 199, 70);
  outline: none;
  background: rgb(81, 131, 81);
  border-radius: 8px;
  color: #ffffff;
  height: 34px;
  cursor: pointer;
}
.basket-titles {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>
