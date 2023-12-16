<template>
  <GenericViewVue
    :columns="columnsAircraftClasses"
    :title="$t('common.titles.aircraftClasses', 2)"
    :dialog-title="$t('common.titles.aircraftClasses', 1)"
  />
</template>

<script setup lang="ts">
import { AircraftClass } from 'src/models/api/AircraftClasses';

import { GenericView } from 'src/components/common/GenericView';
import { GenericViewKey } from 'src/types/Symbols';
import { aircraftClassForm, columnsAircraftClasses } from './TableData';
import { useAircraftClasses } from 'src/composables/client/UseAircraftClasses';

const aircraftClasses = useAircraftClasses();

provide<GenericView<AircraftClass>>(GenericViewKey, {
  tableService: aircraftClasses.getAircraftClassesPaginated,
  createService: aircraftClasses.createAircraftClass,
  updateService: aircraftClasses.updateAircraftClass,
  removeService: aircraftClasses.deleteAircraftClass,
  uploadService: aircraftClasses.postAircraftClassesBulk,
  dialogForm: aircraftClassForm,
});

const { GenericViewVue } = GenericView<AircraftClass>();
</script>
