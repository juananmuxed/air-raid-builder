import { QTableColumn } from 'quasar';

import { FormItem } from 'src/models/common/Generics';
import { Nation } from 'src/models/api/Nations';
import { Year } from 'src/models/api/Years';

import { useRules } from 'src/composables/UseRules';
import { t } from 'src/plugins/I18n';

const rules = useRules();

export const columnsNations = [
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
    name: 'imgUrl',
    label: t('common.labels.imgUrl'),
    field: 'imgUrl',
    sortable: true,
    align: 'left',
  },
  {
    name: 'options',
    label: '',
    align: 'left',
  },
] as QTableColumn<Nation>[];

export const nationForm: FormItem[] = [
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
      label: t('common.labels.imgUrl'),
      hint: '',
    },
    queryName: 'imgUrl',
  },
];

export const columnsYears = [
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
    name: 'imgUrl',
    label: t('common.labels.imgUrl'),
    field: 'imgUrl',
    sortable: true,
    align: 'left',
  },
  {
    name: 'options',
    label: '',
    align: 'left',
  },
] as QTableColumn<Year>[];

export const yearForm: FormItem[] = [
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
      label: t('common.labels.imgUrl'),
      hint: '',
    },
    queryName: 'imgUrl',
  },
];
