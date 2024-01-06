<template>
  <div class="options">
    <div class="options-name">
      <span>
        <span class="no-print">{{ $t("pages.lists.general.listName") }}</span>
        <span class="rendered-name" v-text="sheets.listName" />
      </span>
      <input v-model="sheets.listName" type="text">
    </div>
    <div class="options-buttons">
      <button @click="sheets.resetList">
        <IconComponent name="undo" />
        {{ $t("pages.lists.buttons.reset") }}
      </button>
      <button :disabled="!sheets.isEditedList" @click="sheets.saveList">
        <IconComponent name="save" />
        {{ $t("pages.lists.buttons.save") }}
      </button>
      <button :disabled="!sheets.isInSavedList" @click="sheets.deleteList">
        <IconComponent name="delete" />
        {{ $t("pages.lists.buttons.delete") }}
      </button>
      <button @click="sheets.printList">
        <IconComponent name="print" />
        {{ $t("pages.lists.buttons.print") }}
      </button>
      <button @click="sheets.copyUrl">
        <IconComponent name="link" />
        {{ $t("pages.lists.buttons.copyUrl") }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSheetsStore } from 'src/stores/UseSheets';

const sheets = useSheetsStore();
</script>

<style scoped src="src/assets/scss/components/options.scss"></style>
