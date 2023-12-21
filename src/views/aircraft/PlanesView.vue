<template>
  <GenericViewVue
    :columns="columnsPlanes"
    :title="$t('common.titles.planes', 2)"
    :dialog-title="$t('common.titles.planes', 1)"
  />
</template>

<script setup lang="ts">
import { Plane } from 'src/models/api/Planes';

import { GenericView } from 'src/components/common/GenericView';
import { GenericViewKey } from 'src/types/Symbols';
import { planeForm, columnsPlanes } from './TableData';
import { usePlanes } from 'src/composables/client/UsePlanes';

const planes = usePlanes();

provide<GenericView<Plane>>(GenericViewKey, {
  tableService: planes.getPlanesPaginated,
  createService: planes.createPlane,
  updateService: planes.updatePlane,
  removeService: planes.deletePlane,
  uploadService: planes.postPlanesBulk,
  dialogForm: planeForm,
});

const { GenericViewVue } = GenericView<Plane>();
</script>
