<template>
  <div class="element">
    <div class="element-image">
      <img v-bind:src="require(`@/assets/images/${item.image}`)" alt="test" />
    </div>
    <div class="element-info">
      {{ item.name }}: {{ item.cost }}
      <button class="element-add" v-on:click="addToBasket">
        add to basket
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreElement",
  props: {
    item: Object,
  },

  methods: {
    addToBasket: function () {
      this.$store.commit("addToBasket", this.item);
    },
  },
};
</script>
<style scoped>
.element {
}
.element-info {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.element-add {
  border: 1px solid rgb(30, 84, 245);
  outline: none;
  background: royalblue;
  border-radius: 8px;
  color: #ffffff;
  height: 34px;
  cursor: pointer;
}
.element-image {
  height: 300px;
}
.element-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
