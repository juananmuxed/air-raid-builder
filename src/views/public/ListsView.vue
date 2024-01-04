<template>
  <div class="container">
    <h1 class="no-print">
      {{ $t('pages.lists.general.title') }}
    </h1>
    <div class="army no-print">
      <div class="titles">
        <h2>{{ $t('pages.lists.general.nation') }}</h2>
        <QInnerLoading :showing="nations.getNationsSelect.isFetching" />
        <RadioGroup v-model="nation" :options="selectNations" />
        <p>{{ $t('pages.lists.paragraphs.selectNation') }}</p>
        <template v-if="hasNation">
          <h2>{{ $t('pages.lists.general.year') }}</h2>
          <QInnerLoading :showing="nationYears.getYearsByNationSelect.isFetching" />
          <RadioGroup v-model="year" :options="selectYears" />
          <p>{{ $t('pages.lists.paragraphs.selectYear') }}</p>
        </template>
        <button
          :disabled="!hasNationAndYear"
          @click="startList"
        >
          {{ $t("pages.lists.buttons.createList") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Notify } from 'quasar';

import { useNationYears } from 'src/composables/client/UseNationYears';
import { useNations } from 'src/composables/client/UseNations';
import { usePlanes } from 'src/composables/client/UsePlanes';
import { t } from 'src/plugins/I18n';

const nations = useNations();
const nationYears = useNationYears();
const planes = usePlanes();

const nation = ref();
const year = ref();

const selectNations = computed(() => nations.getNationsSelect.data.map((_nation) => ({
  ..._nation,
  name: t(`database.nations.${_nation.name}`),
  imgUrl: `/img/nations/${_nation.imgUrl}`,
})));
const selectYears = computed(() => nationYears.getYearsByNationSelect.data.map((_year) => ({
  id: _year.id,
  name: _year.year,
})));

const hasNation = computed(() => nation.value !== undefined);
const hasNationAndYear = computed(() => hasNation.value && year.value !== undefined);

watch(nation, async (newValue) => {
  await nationYears.getYearsByNationSelect.execute(newValue);
  year.value = undefined;
});

async function startList() {
  if (!nation.value || !year.value) {
    Notify.create({
      message: t('warnings.notSelectedNationOrYear'),
      type: 'warning',
    });
    return;
  }
  await planes.getPlanesByNationAndYear.execute(nation.value, year.value);
}

async function initLoad() {
  await nations.getNationsSelect.execute();
}

initLoad();
</script>

<style scoped src="src/assets/scss/components/lists.scss"></style>
