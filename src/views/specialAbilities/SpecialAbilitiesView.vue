<template>
  <GenericViewVue
    :columns="columnsSpecialAbilities"
    :title="$t('common.titles.specialAbilities', 2)"
    :dialog-title="$t('common.titles.specialAbilities', 1)"
  />
</template>

<script setup lang="ts">
import { SpecialAbility } from 'src/models/api/SpecialAbilities';

import { GenericView } from 'src/components/common/GenericView';
import { GenericViewKey } from 'src/types/Symbols';
import { specialAbilityForm, columnsSpecialAbilities } from './TableData';
import { useSpecialAbilities } from 'src/composables/client/UseSpecialAbilities';

const specialAbilities = useSpecialAbilities();

provide<GenericView<SpecialAbility>>(GenericViewKey, {
  tableService: specialAbilities.getSpecialAbilitiesPaginated,
  createService: specialAbilities.createSpecialAbility,
  updateService: specialAbilities.updateSpecialAbility,
  removeService: specialAbilities.deleteSpecialAbility,
  uploadService: specialAbilities.postSpecialAbilitiesBulk,
  dialogForm: specialAbilityForm,
});

const { GenericViewVue } = GenericView<SpecialAbility>();
</script>
