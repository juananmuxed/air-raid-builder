<template>
  <GenericViewVue
    :columns="columnsNationYears"
    :title="$t('common.titles.nationYears', 2)"
    :dialog-title="$t('common.titles.nationYears', 1)"
  />
</template>

<script setup lang="ts">
import { NationYear } from 'src/models/api/NationYears';

import { GenericView } from 'src/components/common/GenericView';
import { GenericViewKey } from 'src/types/Symbols';
import { nationYearForm, columnsNationYears } from './TableData';
import { useNationYears } from 'src/composables/client/UseNationYears';

const nationYears = useNationYears();

provide<GenericView<NationYear>>(GenericViewKey, {
  tableService: nationYears.getNationYearsPaginated,
  createService: nationYears.createNationYear,
  updateService: nationYears.updateNationYear,
  removeService: nationYears.deleteNationYear,
  uploadService: nationYears.postNationYearsBulk,
  dialogForm: nationYearForm,
});

const { GenericViewVue } = GenericView<NationYear>();
</script>
