<template>
  <div class="container">
    <QInnerLoading :showing="sheets.loading" />
    <h1 class="no-print">
      {{ $t('pages.lists.general.title') }}
    </h1>
    <div
      v-if="sheets.hasSavedLists"
      class="saved-lists no-print"
    >
      <h3 v-text="$t('pages.lists.general.savedLists')" />
      <RadioGroup
        v-model="sheets.selectedSavedList"
        :options="sheets.availableSavedLists"
      />
      <button
        :disabled="!Boolean(sheets.selectedSavedList)"
        @click="sheets.loadList"
      >
        {{ $t("pages.lists.buttons.loadList") }}
      </button>
    </div>
    <div v-if="!sheets.creatingList" class="army no-print">
      <div class="titles">
        <h2>{{ $t('pages.lists.general.nation') }}</h2>
        <RadioGroup v-model="sheets.nation" :options="sheets.selectNations" />
        <p>{{ $t('pages.lists.paragraphs.selectNation') }}</p>
        <template v-if="sheets.hasNation">
          <h2>{{ $t('pages.lists.general.year') }}</h2>
          <RadioGroup v-model="sheets.year" :options="sheets.selectYears" />
          <p>{{ $t('pages.lists.paragraphs.selectYear') }}</p>
        </template>
        <button
          :disabled="!sheets.hasNationAndYear"
          @click="sheets.startList"
        >
          {{ $t("pages.lists.buttons.createList") }}
        </button>
      </div>
    </div>
    <div v-else class="sheet">
      <ListData />
      <SheetOptions />
      <ListItems />
      <ListUnits />
      <ExtraData
        v-if="lists.hasSpecialAbilities && options.printSpecialAbilities"
        :title="$t('pages.lists.general.specialAbilities')"
        :items="lists.specialAbilities"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useListsStore } from 'src/stores/UseLists';
import { useOptionsStore } from 'src/stores/UseOptions';
import { useSheetsStore } from 'src/stores/UseSheets';

const lists = useListsStore();
const sheets = useSheetsStore();
const options = useOptionsStore();

sheets.initLoad();
</script>

<style scoped src="src/assets/scss/components/lists.scss"></style>
