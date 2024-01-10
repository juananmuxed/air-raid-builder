<template>
  <div v-for="(unit, index) in lists.units" :key="unit.id + index + '-plane'">
    {{ unit.designation }}
  </div>
</template>

<script setup lang="ts">
import { useListsStore } from 'src/stores/UseLists';

const lists = useListsStore();
</script>

<style scoped>

</style>
