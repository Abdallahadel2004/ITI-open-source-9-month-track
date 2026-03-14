import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useLocalStorage } from '../composables/useLocalStorage';
import { useProductStore } from './productStore';

export const useCartStore = defineStore('cart', () => {
  const items = useLocalStorage('cart', []);
  const totalItems = computed(() => {
    return items.value?.reduce((sum, item) => sum + item.quantity, 0) || 0;
  });

  const totalPrice = computed(() => {
    return items.value?.reduce((sum, item) => {
      const currentPrice = item.price - (item.price * ((item.discount || 0) / 100));
      return sum + currentPrice * item.quantity;
    }, 0) || 0;
  });

  const addToCart = (product) => {
    const existingItem = items.value.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
    
    const productStore = useProductStore();
    productStore.decreaseStock(product.id);
  };

  const removeFromCart = (id) => {
    if (!items.value) return;
    items.value = items.value.filter(item => item.id !== id);
  };

  const clearCart = () => {
    items.value = [];
  };

  return {
    items,
    totalItems,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart
  };
});
