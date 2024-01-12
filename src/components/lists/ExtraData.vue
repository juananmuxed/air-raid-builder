<template>
  <h4>{{ title }}</h4>
  <div class="extra-data">
    <div v-for="(item, index) in items" :key="index + title + 'extra-data'" class="item">
      <div class="title">
        {{ format.setTranslateSpecialAbility(item, false).name }}
      </div>
      <div class="description">
        {{ format.setTranslateSpecialAbility(item).description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SpecialAbility } from 'src/models/api/SpecialAbilities';

import { useFormatProperties } from 'src/composables/UseFormatProperties';

const format = useFormatProperties();

defineProps<{
  items: SpecialAbility[];
  title: string;
}>();
</script>

<style scoped src="src/assets/scss/components/extraDataTable.scss"></style>
