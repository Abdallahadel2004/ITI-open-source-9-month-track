<script setup>
import { useCartStore } from '../stores/cartStore';

const cartStore = useCartStore();
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Your Cart</h1>
    
    <div v-if="cartStore.items.length === 0" class="text-center py-10">
      <p class="text-xl text-gray-500">Your cart is empty.</p>
      <router-link to="/" class="btn btn-primary mt-4">Go Shopping</router-link>
    </div>
    
    <div v-else>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartStore.items" :key="item.id">
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img :src="item.image" :alt="item.name" />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">{{ item.name }}</div>
                  </div>
                </div>
              </td>
              <td>${{ item.price - (item.price * (item.discount / 100)) }}</td>
              <td>{{ item.quantity }}</td>
              <td>${{ (item.price - (item.price * (item.discount / 100))) * item.quantity }}</td>
              <td>
                <button @click="cartStore.removeFromCart(item.id)" class="btn btn-sm btn-error">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="mt-8 flex justify-end">
        <div class="bg-base-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
          <h2 class="text-2xl font-bold mb-4">Summary</h2>
          <div class="flex justify-between mb-2">
            <span>Total Items:</span>
            <span>{{ cartStore.totalItems }}</span>
          </div>
          <div class="flex justify-between font-bold text-xl mt-4 pt-4 border-t">
            <span>Total Price:</span>
            <span>${{ cartStore.totalPrice }}</span>
          </div>
          <button class="btn btn-primary w-full mt-6">Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>
