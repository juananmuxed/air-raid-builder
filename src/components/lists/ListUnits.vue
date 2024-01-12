<template>
  <div class="unit-cards">
    <ListUnit
      v-for="(unit, index) in lists.units"
      :key="unit.id + index + '-plane'"
      :unit="unit"
      :index="index"
    />
  </div>
</template>

<script setup lang="ts">
import { useListsStore } from 'src/stores/UseLists';

const lists = useListsStore();
</script>

<style scoped src="src/assets/scss/components/listUnits.scss"></style>
