<template>
  <header>
    <nav>
      <router-link to="/">Catálogo</router-link>
      <router-link to="/cart">Carrinho</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: "AppHeader",
};
</script>

<style scoped>
header {
  background-color: #f8f8f8;
  padding: 10px;
  text-align: center;
}
nav a {
  margin: 0 10px;
}
</style>
