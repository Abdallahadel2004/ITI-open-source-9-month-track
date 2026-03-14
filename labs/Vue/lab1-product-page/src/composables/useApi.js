import { ref } from 'vue';

export function useApi(baseUrl, initialData = null) {
  const data = ref(initialData);
  const error = ref(null);
  const loading = ref(false);

  const getAll = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(baseUrl);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      data.value = await response.json();
      return data.value;
    } catch (e) {
      error.value = e.message;
      data.value = null;
    } finally {
      loading.value = false;
    }
  };

  const getOne = async (id) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${baseUrl}/${id}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      data.value = await response.json();
      return data.value;
    } catch (e) {
      error.value = e.message;
      data.value = null;
    } finally {
      loading.value = false;
    }
  };

  const update = async (id, payload) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const updatedItem = await response.json();
      data.value = updatedItem;
      return updatedItem;
    } catch (e) {
      error.value = e.message;
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    error,
    loading,
    getAll,
    getOne,
    update
  };
}
