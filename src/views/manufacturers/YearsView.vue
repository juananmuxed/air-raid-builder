<template>
  <GenericViewVue
    :columns="columnsYears"
    :title="$t('common.titles.years', 2)"
    :dialog-title="$t('common.titles.years', 1)"
  />
</template>

<script setup lang="ts">
import { Year } from 'src/models/api/Years';

import { GenericView } from 'src/components/common/GenericView';
import { GenericViewKey } from 'src/types/Symbols';
import { yearForm, columnsYears } from './TableData';
import { useYears } from 'src/composables/client/UseYears';

const years = useYears();

provide<GenericView<Year>>(GenericViewKey, {
  tableService: years.getYearsPaginated,
  createService: years.createYear,
  updateService: years.updateYear,
  removeService: years.deleteYear,
  uploadService: years.postYearsBulk,
  dialogForm: yearForm,
});

const { GenericViewVue } = GenericView<Year>();
</script>
