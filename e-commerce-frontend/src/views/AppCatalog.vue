<template>
  <div>
    <AppHeader />
    <h1>Catálogo de Produtos</h1>
    <div class="product-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "../components/AppHeader.vue";
import ProductCard from "../components/ProductCard.vue";
import { Product } from "../utils/types";
import { getProducts } from "../services/productService";

export default defineComponent({
  components: { AppHeader, ProductCard },
  data() {
    return {
      products: [] as Product[],
    };
  },
  methods: {
    addToCart(product: Product) {
      this.$emit("add-to-cart", product);
    },
  },
  async mounted() {
    try {
      const products = await getProducts();
      this.products = products;
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  },
});
</script>

<style scoped>
.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
