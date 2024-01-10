<template>
  <div class="list-data">
    <img v-if="sheets.nationComplete?.imgUrl && options.printArmiesImages" :src="sheets.nationComplete?.imgUrl" :alt="sheets.nationComplete?.name">
    <h3>{{ sheets.nationComplete?.name }}{{ sheets.yearComplete ? `(${sheets.yearComplete?.name})` : '' }}</h3>
  </div>
  <div class="list-values">
    <h4>
      {{ $t('pages.lists.data.planes', lists.unitsTotal) }} ({{ $t('pages.lists.data.costs', lists.costTotal) }})
    </h4>
  </div>
</template>

<script setup lang="ts">
import { useSheetsStore } from 'src/stores/UseSheets';
import { useOptionsStore } from 'src/stores/UseOptions';
import { useListsStore } from 'src/stores/UseLists';

const sheets = useSheetsStore();
const lists = useListsStore();
const options = useOptionsStore();
</script>

<style scoped src="src/assets/scss/components/listData.scss"></style>
