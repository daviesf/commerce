<template>
  <div class="product-card">
    <h2>{{ product.name }}</h2>
    <p>Preço: R$ {{ product.price }}</p>
    <button @click="$emit('add-to-cart', product)">
      Adicionar ao Carrinho
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
}
</style>
