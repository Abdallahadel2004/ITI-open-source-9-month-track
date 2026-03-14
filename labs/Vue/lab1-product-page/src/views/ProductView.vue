<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/productStore';
import ProductDetails from '../components/ProductDetails.vue';
import ProductCard from '../components/ProductCard.vue';

const route = useRoute();
const productStore = useProductStore();

onMounted(() => {
  if (!productStore.products || productStore.products.length === 0) {
    productStore.fetchProducts();
  }
});

const currentProduct = computed(() => {
  return productStore.getProductById(route.params.id);
});

const relatedProducts = computed(() => {
  if (!currentProduct.value || !productStore.products) return [];
  return productStore.products.filter(p => p.id !== currentProduct.value.id);
});
</script>

<template>
  <div v-if="currentProduct">
    <div class="text-sm breadcrumbs mb-4">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li>{{ currentProduct.name }}</li>
      </ul>
    </div>

    <ProductDetails :product="currentProduct" />

    <div v-if="relatedProducts.length > 0" class="mt-12">
      <h2 class="text-2xl font-bold mb-6 border-b pb-2">Related Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard 
          v-for="product in relatedProducts" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
  </div>
  <div v-else class="text-center py-20">
    <h2 class="text-2xl font-bold text-error">Product Not Found</h2>
    <router-link to="/" class="btn btn-primary mt-4">Go Back Home</router-link>
  </div>
</template>
