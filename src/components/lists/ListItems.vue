<template>
  <div class="list-items no-print">
    <h4>{{ $t("pages.lists.general.availablePlanes") }}</h4>
    <div class="units-inputs">
      <UnitInput
        v-for="(unit, index) in sheets.availablePlanes"
        :key="index + '-unit-input'"
        :unit="unit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSheetsStore } from 'src/stores/UseSheets';

const sheets = useSheetsStore();
</script>

<style scoped src="src/assets/scss/components/listItems.scss"></style>
