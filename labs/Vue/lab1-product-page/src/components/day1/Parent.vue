<script setup>
import { ref } from 'vue'
import Child from './day1/Child.vue'

// the data in the parent component
const mainProduct = ref({
  id: 1,
  name: "Cozy Sneakers",
  description: "High-quality sneakers that go with everything you wear.",
  image: "https://via.placeholder.com/300",
  badge: "NEW",
  price: 350,
  discount: 50,
  tags: ["Fashion", "Casual", "Sport"]
  
})

const relatedProducts = ref([
  {
    id: 2,
    name: "Running Shoes",
    price: 90,
    discount: 10,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Casual Boots",
    price: 150,
    discount: 0,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 4,
    name: "Flip Flops",
    price: 30,
    discount: 50,
    image: "https://via.placeholder.com/150"
  }, 
    {
    id: 4,
    name: "Flip Flops",
    price: 30,
    discount: 0,
    image: "https://via.placeholder.com/150"
  }
])
</script>

<template>
  <div class="min-h-screen bg-base-200 py-10 px-4 sm:px-10">
<!-- pass data to the child -->
  <Child :mainProduct="mainProduct" :relatedProducts="relatedProducts" />
  </div>
</template>
