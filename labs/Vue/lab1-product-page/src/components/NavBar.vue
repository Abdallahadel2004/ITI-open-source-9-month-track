<script setup>
import { useCartStore } from '../stores/cartStore';

const cartStore = useCartStore();
</script>

<template>
  <div class="navbar bg-base-100 shadow-md mb-8">
    <div class="flex-1">
      <router-link to="/" class="btn btn-ghost text-xl">MyStore</router-link>
    </div>
    <div class="flex-none items-center space-x-4">
      <ul class="menu menu-horizontal px-1">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <router-link to="/cart" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item">{{ cartStore.totalItems }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
