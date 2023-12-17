<template>
  <GenericViewVue
    :columns="columnsNations"
    :title="$t('common.titles.nations', 2)"
    :dialog-title="$t('common.titles.nations', 1)"
  />
</template>

<script setup lang="ts">
import { Nation } from 'src/models/api/Nations';

import { GenericView } from 'src/components/common/GenericView';
import { GenericViewKey } from 'src/types/Symbols';
import { nationForm, columnsNations } from './TableData';
import { useNations } from 'src/composables/client/UseNations';

const nations = useNations();

provide<GenericView<Nation>>(GenericViewKey, {
  tableService: nations.getNationsPaginated,
  createService: nations.createNation,
  updateService: nations.updateNation,
  removeService: nations.deleteNation,
  uploadService: nations.postNationsBulk,
  dialogForm: nationForm,
});

const { GenericViewVue } = GenericView<Nation>();
</script>
