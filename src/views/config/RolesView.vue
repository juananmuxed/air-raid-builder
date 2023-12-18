<template>
  <GenericViewVue
    :columns="roleColumns"
    :title="$t('common.titles.roles', 2)"
    :dialog-title="$t('common.titles.roles', 1)"
  />
</template>

<script setup lang="ts">
import { Role } from 'src/models/api/Roles';

import { useRoles } from 'src/composables/client/UseRoles';
import { GenericView } from 'src/components/common/GenericView';
import { GenericViewKey } from 'src/types/Symbols';
import { roleForm, roleColumns } from './TableData';

const roles = useRoles();

provide<GenericView<Role>>(GenericViewKey, {
  tableService: roles.getRolesPaginated,
  createService: roles.createRole,
  updateService: roles.updateRole,
  removeService: roles.deleteRole,
  dialogForm: roleForm,
});

const { GenericViewVue } = GenericView<Role>();
</script>
