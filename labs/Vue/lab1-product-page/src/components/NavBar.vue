<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  console.log("NavBar mounted");
});

onUnmounted(() => {
  console.log("NavBar unmounted");
});
</script>

<template>
  <div class="navbar bg-base-100 shadow-md mb-8">
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost text-xl">MyStore</router-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/product/1">Sample Product</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </div>
</template>
