<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  console.log("AboutView mounted");
});

onUnmounted(() => {
  console.log("AboutView unmounted");
});
</script>

<template>
  <div class="card bg-base-100 shadow-xl p-8 max-w-3xl mx-auto mt-10">
    <h1 class="text-4xl font-bold mb-6 text-center text-primary">About Us</h1>
    
    <div class="mb-8 space-y-4">
      <h2 class="text-2xl font-semibold border-b pb-2">Developer Information</h2>
      <ul class="list-disc list-inside text-lg">
        <li><strong>Name:</strong> Abdallah</li>
        <li><strong>Course:</strong> ITI Open Source 9 Month Track</li>
        <li><strong>Institution:</strong> Information Technology Institute (ITI)</li>
      </ul>
    </div>
    </div>

</template>
