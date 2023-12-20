import { QTableColumn } from 'quasar';

import { FormItem } from 'src/models/common/Generics';
import { AircraftClass } from 'src/models/api/AircraftClasses';
import { Cost } from 'src/models/api/Costs';
import { Stat } from 'src/models/api/Stats';

import { useRules } from 'src/composables/UseRules';
import { t } from 'src/plugins/I18n';
import { useFormatStats } from 'src/composables/UseFormatStats';

const rules = useRules();
const format = useFormatStats();

export const columnsAircraftClasses = [
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
    name: 'options',
    label: '',
    align: 'left',
  },
] as QTableColumn<AircraftClass>[];

export const aircraftClassForm: FormItem[] = [
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
];

export const columnsCosts = [
  {
    name: 'id',
    label: t('common.labels.id'),
    field: 'id',
    sortable: true,
    align: 'left',
  },
  {
    name: 'value',
    label: t('common.labels.value'),
    field: (val) => format.setCosts(val),
    sortable: false,
    align: 'left',
  },
  {
    name: 'options',
    label: '',
    align: 'left',
  },
] as QTableColumn<Cost>[];

export const costForm: FormItem[] = [
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
      label: t('common.labels.rookie'),
      rules: [rules.isRequired],
      mask: '####',
    },
    queryName: 'rookie',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.regular'),
      rules: [rules.isRequired],
      mask: '####',
    },
    queryName: 'regular',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.veteran'),
      rules: [rules.isRequired],
      mask: '####',
    },
    queryName: 'veteran',
  },
];

export const columnsStats = [
  {
    name: 'id',
    label: t('common.labels.id'),
    field: 'id',
    sortable: true,
    align: 'left',
  },
  {
    name: 'value',
    label: t('common.labels.value'),
    field: (val) => format.setStatsLabel(val),
    sortable: false,
    align: 'left',
  },
  {
    name: 'options',
    label: '',
    align: 'left',
  },
] as QTableColumn<Stat>[];

export const statForm: FormItem[] = [
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
      label: t('common.labels.speedMinRegular'),
      rules: [rules.isRequired],
      mask: '##',
    },
    queryName: 'speedMinRegular',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.speedMaxRegular'),
      rules: [rules.isRequired],
      mask: '##',
    },
    queryName: 'speedMaxRegular',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.speedMinMaximum'),
      rules: [rules.isRequired],
      mask: '##',
    },
    queryName: 'speedMinMaximum',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.speedMaxMaximum'),
      rules: [rules.isRequired],
      mask: '##',
    },
    queryName: 'speedMaxMaximum',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.agilityRegular'),
      rules: [rules.isRequired],
      mask: '##',
    },
    queryName: 'agilityRegular',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.agilityMaximum'),
      rules: [rules.isRequired],
      mask: '##',
    },
    queryName: 'agilityMaximum',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.firepower'),
      rules: [rules.isRequired],
      mask: 'A',
    },
    queryName: 'firepower',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.maneuverRookieRegular'),
      rules: [rules.isRequired],
      mask: '##',
    },
    queryName: 'maneuverRookieRegular',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.maneuverRookieMaximum'),
      rules: [rules.isRequired],
      mask: '##',
    },
    queryName: 'maneuverRookieMaximum',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.maneuverRegularRegular'),
      rules: [rules.isRequired],
      mask: '##',
    },
    queryName: 'maneuverRegularRegular',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.maneuverRegularMaximum'),
      rules: [rules.isRequired],
      mask: '##',
    },
    queryName: 'maneuverRegularMaximum',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.maneuverVeteranRegular'),
      rules: [rules.isRequired],
      mask: '##',
    },
    queryName: 'maneuverVeteranRegular',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.maneuverVeteranMaximum'),
      rules: [rules.isRequired],
      mask: '##',
    },
    queryName: 'maneuverVeteranMaximum',
  },
];
