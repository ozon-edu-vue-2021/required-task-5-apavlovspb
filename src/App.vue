<template>
  <div id="app">
    <!-- <Store />
    <Basket /> -->
    <router-view />
  </div>
</template>

<script>
// import Basket from "@/views/Basket/Basket.vue";
// import Store from "@/views/Store/Store.vue";
export default {
  name: "App",
  components: {
    // Basket,
    // Store,
  },
  created: function () {
    // `this` указывает на экземпляр vm
    this.$store.dispatch("products");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
