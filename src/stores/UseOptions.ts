import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

import { LOCAL_STORAGE } from 'src/constants/Keys';

export const useOptionsStore = defineStore('options', () => {
  const printArmiesImages = ref(
    localStorage.getItem(LOCAL_STORAGE.PRINT_LIST_IMAGE) !== (false).toString(),
  );
  const printSpecialAbilities = ref(
    localStorage.getItem(LOCAL_STORAGE.PRINT_LIST_IMAGE) !== (false).toString(),
  );

  watch(printArmiesImages, setPrintArmiesImages);
  watch(printSpecialAbilities, setPrintSpecialAbilities);

  function setPrintArmiesImages(value: boolean) {
    localStorage.setItem(LOCAL_STORAGE.PRINT_LIST_IMAGE, value.toString());
  }

  function setPrintSpecialAbilities(value: boolean) {
    localStorage.setItem(LOCAL_STORAGE.PRINT_SPECIAL_ABILITIES, value.toString());
  }

  return {
    printArmiesImages,
    printSpecialAbilities,
  };
});
