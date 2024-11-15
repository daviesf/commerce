<template>
  <div>
    <AppHeader />
    <h1>Carrinho</h1>
    <div v-if="cart.length">
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - R$ {{ item.price.toFixed(2) }}
        </li>
      </ul>
      <p>Total: R$ {{ total.toFixed(2) }}</p>
    </div>
    <div v-else>
      <p>O carrinho está vazio.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "../components/AppHeader.vue";
import { Product } from "../utils/types";
import { addToCart } from "../services/cartServices";

export default defineComponent({
  components: { AppHeader },
  data() {
    return {
      cart: [] as Product[],
    };
  },
  computed: {
    total(): number {
      return this.cart.reduce(
        (sum: number, item: Product) => sum + item.price,
        0
      );
    },
  },
  methods: {
    async addToCart(product: Product) {
      this.cart.push(product);
      try {
        await addToCart(product.id);
      } catch (error) {
        console.error("Erro ao adicionar produto ao carrinho via API:", error);
      }
    },
  },
});
</script>

<style scoped>
/* Adicione estilo aqui, se necessário */
</style>
