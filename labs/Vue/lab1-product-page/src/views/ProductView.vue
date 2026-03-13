<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import ProductDetails from '../components/ProductDetails.vue';
import ProductCard from '../components/ProductCard.vue';

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(['buy']);

const route = useRoute();

const currentProduct = computed(() => {
  const id = Number(route.params.id);
  return props.products.find(p => p.id === id);
});

const relatedProducts = computed(() => {
  if (!currentProduct.value) return [];
  return props.products.filter(p => p.id !== currentProduct.value.id);
});

onMounted(() => {
  console.log(`ProductView mounted for ID: ${route.params.id}`);
});

onUnmounted(() => {
  console.log("ProductView unmounted");
});

const relayBuy = (productId) => {
  emit('buy', productId);
};
</script>

<template>
  <div v-if="currentProduct">
    <div class="text-sm breadcrumbs mb-4">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li>{{ currentProduct.name }}</li>
      </ul>
    </div>

    <ProductDetails :product="currentProduct" @buy="relayBuy" />

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
