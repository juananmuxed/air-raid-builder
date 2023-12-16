import { defineStore } from 'pinia';
import { computed, ref, type Ref } from 'vue';

import { Toast } from 'src/models/common/Toast';

export const useToastStore = defineStore('toast', () => {
  const toasts: Ref<Record<number, Toast | undefined>> = ref({});
  const autoIncrementId = ref(0);

  const toastsArray = computed(() => {
    return Object.keys(toasts.value)
      .map((key) => toasts.value[Number(key)])
      .filter((toast) => toast !== undefined);
  });

  function addToast(toast: Toast) {
    toasts.value[autoIncrementId.value] = toast;
    setTimeToast(autoIncrementId.value, toast.time || 3000);
    ++autoIncrementId.value;
  }

  function setTimeToast(id: number, time: number) {
    setTimeout(() => {
      deleteToast(id);
    }, time);
  }

  function deleteToast(id: number) {
    toasts.value[id] = undefined;
  }

  return {
    toastsArray,
    addToast,
    deleteToast,
  };
});
