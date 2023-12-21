import { QTableColumn } from 'quasar';

import { FormItem } from 'src/models/common/Generics';
import { AircraftClass } from 'src/models/api/AircraftClasses';
import { Cost } from 'src/models/api/Costs';
import { Stat } from 'src/models/api/Stats';
import { Plane } from 'src/models/api/Planes';

import { useRules } from 'src/composables/UseRules';
import { t } from 'src/plugins/I18n';
import { useFormatProperties } from 'src/composables/UseFormatStats';
import { useCosts } from 'src/composables/client/UseCosts';
import { useAircraftClasses } from 'src/composables/client/UseAircraftClasses';
import { useStats } from 'src/composables/client/UseStats';
import { useSpecialAbilities } from 'src/composables/client/UseSpecialAbilities';
import { useNationYears } from 'src/composables/client/UseNationYears';

const rules = useRules();
const format = useFormatProperties();
const costs = useCosts();
const aircraftClasses = useAircraftClasses();
const stats = useStats();
const specialAbilities = useSpecialAbilities();
const nationYears = useNationYears();

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

export const columnsPlanes = [
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
    field: (val) => format.setCompletePlaneName(val),
    sortable: false,
    align: 'left',
  },
  {
    name: 'cost',
    label: t('common.labels.cost'),
    field: (val) => format.setCosts(val.cost),
    sortable: false,
    align: 'left',
  },
  {
    name: 'class',
    label: t('common.labels.class'),
    field: (val) => val.class.name,
    sortable: false,
    align: 'left',
  },
  {
    name: 'statZero',
    label: t('common.labels.statZero'),
    field: (val) => format.setStatsLabel(val.statZero),
    sortable: false,
    align: 'left',
  },
  {
    name: 'statOne',
    label: t('common.labels.statOne'),
    field: (val) => format.setStatsLabel(val.statOne),
    sortable: false,
    align: 'left',
  },
  {
    name: 'statTwo',
    label: t('common.labels.statTwo'),
    field: (val) => format.setStatsLabel(val.statTwo),
    sortable: false,
    align: 'left',
  },
  {
    name: 'statThree',
    label: t('common.labels.statThree'),
    field: (val) => format.setStatsLabel(val.statThree),
    sortable: false,
    align: 'left',
  },
  {
    name: 'specialAbilities',
    label: t('common.labels.specialAbilities'),
    field: 'specialAbilities',
    sortable: false,
    align: 'left',
  },
  {
    name: 'specialAbilitiesVeteran',
    label: t('common.labels.specialAbilitiesVeteran'),
    field: 'specialAbilitiesVeteran',
    sortable: false,
    align: 'left',
  },
  {
    name: 'nationYears',
    label: t('common.labels.nationYears'),
    sortable: false,
    align: 'left',
  },
] as QTableColumn<Plane>[];

export const planeForm: FormItem[] = [
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
    queryName: 'designation',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.nickname'),
    },
    queryName: 'nickname',
  },
  {
    type: 'select',
    fieldProps: {
      label: t('common.labels.cost'),
      rules: [rules.isRequired],
    },
    queryName: 'costId',
    service: costs.getCostsSelect,
  },
  {
    type: 'select',
    fieldProps: {
      label: t('common.labels.class'),
      rules: [rules.isRequired],
    },
    queryName: 'aircraftClassId',
    service: aircraftClasses.getAircraftClassesSelect,
  },
  {
    type: 'select',
    fieldProps: {
      label: t('common.labels.statZero'),
      rules: [rules.isRequired],
    },
    queryName: 'statZeroId',
    service: stats.getStatsSelect,
  },
  {
    type: 'select',
    fieldProps: {
      label: t('common.labels.statOne'),
      rules: [rules.isRequired],
    },
    queryName: 'statOneId',
    service: stats.getStatsSelect,
  },
  {
    type: 'select',
    fieldProps: {
      label: t('common.labels.statTwo'),
      hint: '',
    },
    queryName: 'statTwoId',
    service: stats.getStatsSelect,
  },
  {
    type: 'select',
    fieldProps: {
      label: t('common.labels.statThree'),
      hint: '',
    },
    queryName: 'statThreeId',
    service: stats.getStatsSelect,
  },
  {
    type: 'select',
    fieldProps: {
      label: t('common.labels.specialAbilities'),
      multiple: true,
      hint: '',
    },
    queryName: 'specialAbilities',
    service: specialAbilities.getSpecialAbilitiesSelect,
  },
  {
    type: 'select',
    fieldProps: {
      label: t('common.labels.specialAbilitiesVeteran'),
      multiple: true,
      hint: '',
    },
    queryName: 'specialAbilitiesVeteran',
    service: specialAbilities.getSpecialAbilitiesSelect,
  },
  {
    type: 'select',
    fieldProps: {
      label: t('common.labels.nationYears'),
      multiple: true,
      hint: '',
    },
    queryName: 'nationYears',
    service: nationYears.getNationYearsSelect,
  },
];
