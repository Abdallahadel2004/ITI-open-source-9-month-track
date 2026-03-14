<script setup>
import { computed } from 'vue';
import { useCartStore } from '../stores/cartStore';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const cartStore = useCartStore();

const discountedPrice = computed(() => {
  return props.product.price - (props.product.price * (props.product.discount / 100));
});

const handleBuy = () => {
  if (props.product.stock > 0) {
    cartStore.addToCart(props.product);
  }
};
</script>

<template>
  <div class="card lg:card-side bg-base-100 shadow-xl mb-8">
    <figure class="lg:w-1/2 p-4">
      <img :src="product.image" :alt="product.name" class="rounded-xl object-cover w-full h-96 shadow-sm" />
    </figure>
    <div class="card-body lg:w-1/2">
      <div class="flex justify-between items-start">
        <h1 class="card-title text-3xl font-bold">{{ product.name }}</h1>
        <div v-if="product.badge" class="badge badge-secondary badge-lg">{{ product.badge }}</div>
      </div>
      
      <p class="text-gray-500 my-4 text-lg">{{ product.description }}</p>
      
      <div class="flex items-center gap-4 mb-6">
        <span class="text-4xl font-bold text-primary">${{ discountedPrice }}</span>
        <span v-if="product.discount > 0" class="text-xl line-through text-gray-400">${{ product.price }}</span>
        <span v-if="product.discount > 0" class="badge badge-accent">-{{ product.discount }}%</span>
      </div>
      
      <div class="mb-6">
        <h3 class="font-semibold mb-2 text-gray-600">Categories:</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in product.tags" :key="tag" class="badge badge-outline">{{ tag }}</span>
        </div>
      </div>
      
      <div class="mb-6">
        <span class="text-sm font-semibold text-gray-600">Availability: </span>
        <span :class="product.stock > 0 ? 'text-success font-bold' : 'text-error font-bold'">
          {{ product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock' }}
        </span>
      </div>
      
      <div class="card-actions justify-end mt-auto pt-4 border-t border-base-200">
        <button 
          @click="handleBuy" 
          class="btn btn-primary btn-lg w-full sm:w-auto" 
          :disabled="product.stock === 0"
        >
          {{ product.stock > 0 ? 'Buy Now' : 'Out of Stock' }}
        </button>
      </div>
    </div>
  </div>
</template>
