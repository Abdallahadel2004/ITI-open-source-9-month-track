<script setup>
import { onMounted, onUnmounted } from 'vue';

const props = defineProps({
  products: {
    type: Array,
    required: true,
    default: () => []
  }
});

onMounted(() => {
  console.log("CarouselBanner mounted");
});

onUnmounted(() => {
  console.log("CarouselBanner unmounted");
});
</script>

<template>
  <div class="carousel w-full rounded-xl mb-8">
    <div 
      v-for="(product, index) in products.slice(0, 3)" 
      :key="product.id"
      :id="`slide${index + 1}`" 
      class="carousel-item relative w-full h-80"
    >
      <img :src="product.image" :alt="product.name" class="w-full object-cover" />
      
      <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h2 class="text-white text-4xl font-bold tracking-wider relative drop-shadow-md">
          {{ product.name }}
          <span v-if="product.badge" class="badge badge-secondary absolute -top-4 -right-8 text-xs">{{ product.badge }}</span>
        </h2>
      </div>

      <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a :href="`#slide${index === 0 ? Math.min(3, products.length) : index}`" class="btn btn-circle bg-base-100/50 border-none hover:bg-base-100">❮</a>
        <a :href="`#slide${index === (Math.min(3, products.length) - 1) ? 1 : index + 2}`" class="btn btn-circle bg-base-100/50 border-none hover:bg-base-100">❯</a>
      </div>
    </div>
  </div>
</template>
