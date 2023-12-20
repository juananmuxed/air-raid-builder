<template>
  <GenericViewVue
    :columns="columnsStats"
    :title="$t('common.titles.stats', 2)"
    :dialog-title="$t('common.titles.stats', 1)"
  />
</template>

<script setup lang="ts">
import { Stat } from 'src/models/api/Stats';

import { GenericView } from 'src/components/common/GenericView';
import { GenericViewKey } from 'src/types/Symbols';
import { statForm, columnsStats } from './TableData';
import { useStats } from 'src/composables/client/UseStats';

const stats = useStats();

provide<GenericView<Stat>>(GenericViewKey, {
  tableService: stats.getStatsPaginated,
  createService: stats.createStat,
  updateService: stats.updateStat,
  removeService: stats.deleteStat,
  uploadService: stats.postStatsBulk,
  dialogForm: statForm,
});

const { GenericViewVue } = GenericView<Stat>();
</script>
