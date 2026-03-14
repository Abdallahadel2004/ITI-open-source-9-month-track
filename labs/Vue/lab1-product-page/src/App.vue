<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen bg-base-200">
    <NavBar />
    <main class="container mx-auto p-4">
      <router-view />
    </main>
  </div>
</template>
