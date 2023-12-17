import { QTableColumn } from 'quasar';

import { Role } from 'src/models/api/Roles';
import { FormItem } from 'src/models/common/Generics';
import { User } from 'src/models/api/Users';

import { useRules } from 'src/composables/UseRules';
import { t } from 'src/plugins/I18n';
import { useRoles } from 'src/composables/client/UseRoles';

const rules = useRules();
const roles = useRoles();

export const roleColumns = [
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
] as QTableColumn<Role>[];

export const roleForm: FormItem[] = [
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

export const userColumns = [
  {
    name: 'id',
    label: t('common.labels.id'),
    field: 'id',
    sortable: true,
    align: 'left',
  },
  {
    name: 'email',
    label: t('common.labels.email'),
    field: 'email',
    sortable: true,
    align: 'left',
  },
  {
    name: 'username',
    label: t('common.labels.username'),
    field: 'username',
    sortable: true,
    align: 'left',
  },
  {
    name: 'roleId',
    label: t('common.labels.role'),
    field: (row) => row.role.name,
    sortable: true,
    align: 'left',
  },
  {
    name: 'options',
    label: '',
    align: 'left',
  },
] as QTableColumn<User>[];

export const userForm: FormItem[] = [
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
      label: t('common.labels.email'),
      rules: [rules.isRequired, rules.isEmail],
    },
    queryName: 'email',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.password'),
      rules: [rules.isRequired],
      type: 'password',
    },
    queryName: 'password',
  },
  {
    type: 'input',
    fieldProps: {
      label: t('common.labels.username'),
      rules: [rules.isRequired],
    },
    queryName: 'username',
  },
  {
    type: 'select',
    fieldProps: {
      label: t('common.labels.role'),
      rules: [rules.isRequired],
    },
    queryName: 'roleId',
    service: roles.getRolesSelect,
  },
];
