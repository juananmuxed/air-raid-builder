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
        <h2>{{ $t('pages.lists.general.year') }}</h2>
        <QInnerLoading :showing="nationYears.getYearsByNationSelect.isFetching" />
        <RadioGroup v-model="year" :options="selectYears" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNationYears } from 'src/composables/client/UseNationYears';
import { useNations } from 'src/composables/client/UseNations';
import { t } from 'src/plugins/I18n';

const nations = useNations();
const nationYears = useNationYears();

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

watch(nation, async (newValue) => {
  await nationYears.getYearsByNationSelect.execute(newValue);
  year.value = undefined;
});

async function initLoad() {
  await nations.getNationsSelect.execute();
}

initLoad();
</script>

<style scoped src="src/assets/scss/components/lists.scss"></style>
