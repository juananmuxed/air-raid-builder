import { QTableColumn } from 'quasar';

import { FormItem } from 'src/models/common/Generics';
import { SpecialAbility } from 'src/models/api/SpecialAbilities';

import { useRules } from 'src/composables/UseRules';
import { t } from 'src/plugins/I18n';

const rules = useRules();

export const columnsSpecialAbilities = [
  {
    name: 'id',
    label: t('common.labels.id'),
    field: 'id',
    sortable: true,
    align: 'left',
  },
  {
    name: 'name',
    label: t('common.labels.name'),
    field: 'name',
    sortable: true,
    align: 'left',
  },
  {
    name: 'valueString',
    label: t('common.labels.valueString'),
    field: 'valueString',
    sortable: true,
    align: 'left',
  },
  {
    name: 'valueNumber',
    label: t('common.labels.valueNumber'),
    field: 'valueNumber',
    sortable: true,
    align: 'left',
  },
  {
    name: 'options',
    label: '',
    align: 'left',
  },
] as QTableColumn<SpecialAbility>[];

export const specialAbilityForm: FormItem[] = [
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.id'),
      mask: '##########',
      rules: [rules.isRequired],
    },
    queryName: 'id',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.name'),
      rules: [rules.isRequired],
    },
    queryName: 'name',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.valueString'),
      mask: 'A',
    },
    queryName: 'valueString',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.valueNumber'),
      mask: '#',
    },
    queryName: 'valueNumber',
  },
];
