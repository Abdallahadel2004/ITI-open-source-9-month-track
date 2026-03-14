<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '../stores/productStore';
import CarouselBanner from '../components/CarouselBanner.vue';
import ProductCard from '../components/ProductCard.vue';

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>

<template>
  <div>
    <div v-if="productStore.loading" class="flex justify-center items-center py-20">
      <span class="loading loading-spinner loading-lg text-primary"></span>
    </div>

    <div v-else-if="productStore.error" class="alert alert-error my-10 shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Error fetching products: {{ productStore.error }}</span>
    </div>

    <div v-else>
      <CarouselBanner :products="productStore.products" />
      <h2 class="text-2xl font-bold mb-6">Featured Products</h2>
      <div v-if="productStore.products" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard 
          v-for="product in productStore.products" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
  </div>
</template>
