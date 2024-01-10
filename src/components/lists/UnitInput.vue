<template>
  <div class="unit-input">
    <button @click="lists.deleteUnit(unit)">
      <IconComponent name="minus" />
    </button>
    <span class="name">{{ format.setCompletePlaneName(unit) }}</span>
    <button @click="lists.addUnit(unit)">
      <IconComponent name="plus" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Plane } from 'src/models/api/Planes';

import { useFormatProperties } from 'src/composables/UseFormatProperties';
import { useListsStore } from 'src/stores/UseLists';

const format = useFormatProperties();
const lists = useListsStore();

defineProps<{
  unit: Plane;
}>();
</script>

<style scoped src="src/assets/scss/components/unitInput.scss"></style>
