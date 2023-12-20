<template>
  <GenericViewVue
    :columns="columnsCosts"
    :title="$t('common.titles.costs', 2)"
    :dialog-title="$t('common.titles.costs', 1)"
  />
</template>

<script setup lang="ts">
import { Cost } from 'src/models/api/Costs';

import { GenericView } from 'src/components/common/GenericView';
import { GenericViewKey } from 'src/types/Symbols';
import { costForm, columnsCosts } from './TableData';
import { useCosts } from 'src/composables/client/UseCosts';

const costs = useCosts();

provide<GenericView<Cost>>(GenericViewKey, {
  tableService: costs.getCostsPaginated,
  createService: costs.createCost,
  updateService: costs.updateCost,
  removeService: costs.deleteCost,
  uploadService: costs.postCostsBulk,
  dialogForm: costForm,
});

const { GenericViewVue } = GenericView<Cost>();
</script>
