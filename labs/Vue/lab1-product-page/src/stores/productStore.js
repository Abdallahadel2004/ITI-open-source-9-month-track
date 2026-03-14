import { defineStore } from 'pinia';
import { useApi } from '../composables/useApi';

export const useProductStore = defineStore('product', () => {
  const { data: products, error, loading, getAll, update } = useApi('http://localhost:3000/products', []);

  const fetchProducts = async () => {
    products.value = []; 
    await getAll();
  };

  const decreaseStock = async (productId) => {
    if (!products.value) return;
    const product = products.value.find(p => p.id === productId);
    if (product && product.stock > 0) {
      product.stock--;

      await update(productId, product);
    }
  };

  const getProductById = (id) => {
    if (!products.value) return null;
    return products.value.find(p => String(p.id) === String(id));
  };

  return {
    products,
    loading,
    error,
    fetchProducts,
    decreaseStock,
    getProductById
  };
}); 
