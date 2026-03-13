<script setup>
import { computed } from 'vue'

const props = defineProps({
mainProduct: {
  type: Object,
  required: true
  },
relatedProducts: {
  type: Array,
  required: true
  }
})

// calculate the discounted price for the main product
const discountedMainPrice = computed(() => {
return props.mainProduct.price - props.mainProduct.discount
})

// calculate the discounted price for the related products
const computedRelatedProducts = computed(() => {
return props.relatedProducts.map(product => ({...product,
discountedPrice: product.price - product.discount
}))
})
</script>

<template>
<div class="p-8 max-w-4xl mx-auto">
 <div class="flex gap-8 mb-12 border p-6 rounded-lg shadow-sm">
<img :src="mainProduct.image" :alt="mainProduct.name" class="w-64 h-64 object-cover rounded" />
  <div>
    <h1 class="text-3xl font-bold">
      {{ mainProduct.name }}<!-- interpolation-->
<span 
  v-if="mainProduct.badge" 
  class="text-sm text-white px-2 py-1 rounded ml-2"
  :class="mainProduct.badge === 'NEW' ? 'bg-red-500' : 'bg-blue-500'"
     >
   {{ mainProduct.badge }}
  </span>
  </h1>
        
    <p class="mt-4">{{ mainProduct.description }}</p>
        
    <div class="mt-4 flex gap-2">
      <span v-for="(tag, index) in mainProduct.tags" :key="index" class="bg-black-200 px-2 py-1 rounded text-sm">
        {{ tag }}
      </span>
    </div>

  <div class="mt-6">
    <p class="text-3xl font-bold text-green-600">${{ discountedMainPrice }}</p>
    <p v-if="mainProduct.discount > 0" class="line-through text-gray-400 text-lg">
      ${{ mainProduct.price }}
    </p>
  </div>
  </div>
</div>

<!-- related products -->
<h2 class="text-2xl font-bold mb-4">Related Products</h2>
<div class="flex gap-6">
  <div v-for="product in computedRelatedProducts" :key="product.id" class="border p-4 rounded-lg shadow-sm w-56">
    <img :src="product.image" :alt="product.name" class="w-full h-40 object-cover mb-4 rounded" />
    <h3 class="font-bold text-lg">{{ product.name }}</h3>
        
<div class="mt-2">
  <span class="font-bold text-green-600 text-xl">${{ product.discountedPrice }}</span>
  <span v-if="product.discount > 0" class="line-through text-gray-400 text-sm ml-2">
    ${{ product.price }}
  </span>
</div>
</div>
</div>

</div>
</template>
