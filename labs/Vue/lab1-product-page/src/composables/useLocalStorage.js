import { ref, watch } from 'vue';

export function useLocalStorage(key, defaultValue) {
  const data = ref(defaultValue);

  const storedValue = localStorage.getItem(key);
  if (storedValue) {
    try {
      data.value = JSON.parse(storedValue);
    } catch (e) {
      console.error(`Error parsing localStorage for key "${key}":`, e);
      data.value = defaultValue;
    }
  }

  watch(data, (newValue) => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (e) {
      console.error(`Error saving to localStorage for key "${key}":`, e);
    }
  }, { deep: true });

  return data;
}
