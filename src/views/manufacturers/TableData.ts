import { QTableColumn } from 'quasar';

import { FormItem } from 'src/models/common/Generics';
import { Nation } from 'src/models/api/Nations';
import { Year } from 'src/models/api/Years';
import { NationYear } from 'src/models/api/NationYears';

import { useRules } from 'src/composables/UseRules';
import { t } from 'src/plugins/I18n';
import { useYears } from 'src/composables/client/UseYears';
import { useNations } from 'src/composables/client/UseNations';
import { useFormatProperties } from 'src/composables/UseFormatStats';

const rules = useRules();
const years = useYears();
const nations = useNations();
const format = useFormatProperties();

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
    name: 'year',
    label: t('common.labels.year'),
    field: 'year',
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
      label: t('common.labels.year'),
      rules: [rules.isRequired],
    },
    queryName: 'year',
  },
];

export const columnsNationYears = [
  {
    name: 'id',
    label: t('common.labels.id'),
    field: 'id',
    sortable: true,
    align: 'left',
  },
  {
    name: 'nationId',
    label: t('common.labels.nation'),
    field: (nationYear) => nationYear.nation.name,
    sortable: false,
    align: 'left',
  },
  {
    name: 'years',
    label: t('common.labels.years'),
    field: (nationYear) => format.setYears(nationYear),
    sortable: false,
    align: 'left',
  },
  {
    name: 'options',
    label: '',
    align: 'left',
  },
] as QTableColumn<NationYear>[];

export const nationYearForm: FormItem[] = [
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
    type: 'select',
    fieldProps: {
      label: t('common.labels.nation'),
      rules: [rules.isRequired],
    },
    queryName: 'nationId',
    service: nations.getNationsSelect,
  },
  {
    type: 'select',
    fieldProps: {
      label: t('common.labels.years'),
      multiple: true,
      rules: [rules.isRequired],
    },
    queryName: 'years',
    service: years.getYearsSelect,
  },
];
