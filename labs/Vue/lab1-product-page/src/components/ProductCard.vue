<script setup>
import { useCartStore } from '../stores/cartStore';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const cartStore = useCartStore();
</script>

<template>
  <div class="card bg-base-100 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
    <figure class="relative h-48 bg-gray-200">
      <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
      <div v-if="product.badge" class="badge badge-secondary absolute top-4 right-4">{{ product.badge }}</div>
    </figure>
    <div class="card-body p-4">
      <h2 class="card-title text-lg">
        <router-link :to="`/product/${product.id}`" class="hover:text-primary transition-colors">{{ product.name }}</router-link>
      </h2>
      <div class="flex items-center gap-2 mt-2">
        <span class="text-xl font-bold text-primary">${{ product.price - (product.price * (product.discount / 100)) }}</span>
        <span v-if="product.discount > 0" class="text-sm line-through text-gray-400">${{ product.price }}</span>
      </div>
      <div class="card-actions flex-col mt-4">
        <button 
          @click="cartStore.addToCart(product)" 
          class="btn btn-primary w-full" 
          :disabled="product.stock === 0"
        >
          {{ product.stock === 0 ? 'Out of Stock' : 'Add to Cart' }}
        </button>
        <router-link :to="`/product/${product.id}`" class="btn btn-outline btn-sm w-full mt-2">View Details</router-link>
      </div>
    </div>
  </div>
</template>
