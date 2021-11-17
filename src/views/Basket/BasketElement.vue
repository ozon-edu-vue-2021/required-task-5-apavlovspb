<template>
  <div class="element">
    <div>{{ item.name }}</div>
    <div>{{ item.count }}</div>
    <div>{{ item.totalCost }}</div>
    <button class="remove" v-on:click="removeItem">remove</button>
  </div>
</template>

<script>
export default {
  name: "BasketElement",
  props: {
    item: Object,
  },
  methods: {
    removeItem: function () {
      this.$store.commit("removeFromBasket", this.item);
    },
  },
};
</script>
<style scoped>
.element {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.remove {
  border: 1px solid rgb(131, 81, 81);
  outline: none;
  background: rgb(199, 70, 70);
  border-radius: 8px;
  color: #ffffff;
  height: 34px;
  cursor: pointer;
}
.element > div {
  align-self: center;
}
</style>
