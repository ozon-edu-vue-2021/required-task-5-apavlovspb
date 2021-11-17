<template>
  <div>
    <router-link to="/basket">Basket</router-link>
    <div class="store">
      <div v-for="item in productsList" v-bind:key="item.id">
        <StoreElement :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import StoreElement from "./StoreElement.vue";
export default {
  name: "Store",
  computed: {
    productsList() {
      return this.$store.state.products.productsList;
    },
  },
  components: {
    StoreElement,
  },
};
</script>
<style scoped>
.store {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 12px;
}
</style>
