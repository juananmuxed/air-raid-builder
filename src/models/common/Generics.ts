/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { QInput, QSelect, QToggle } from 'quasar';

import { UseFetch, UseFetchPagination } from 'src/types/UseFetch.type';
import { FetchResponse } from '../fetch/FetchResponse';
import { ListApiResponse } from '../fetch/Response';
import { UseFetchSelect } from 'src/types/UseFetchSelect.type';
import { MultiPartRequest } from '../fetch/MultiPartRequest';

export type _GenericViewType<T> = {
  tableService:
  | UseFetchPagination<(param?: any)=> Promise<FetchResponse<T | undefined | ListApiResponse<T>>>>;
  createService?:
  | UseFetch<(param?: any)=> Promise<FetchResponse<T | undefined>>>;
  updateService?:
  | UseFetch<(param?: any)=> Promise<FetchResponse<T | undefined>>>;
  removeService?:
  | UseFetch<(param?: any)=> Promise<FetchResponse<T | undefined>>>;
  uploadService?:
  | UseFetch<(file: File)=> Promise<FetchResponse<MultiPartRequest | undefined>>>;
  dialogForm?: FormItem[];
}

export type FormSelect = {
  type: 'select';
  service: UseFetchSelect<()=> Promise<FetchResponse<ListApiResponse<any>>>>;
  fieldProps?: Partial<QSelect>;
}

export type FormInput = {
  type: 'input';
  fieldProps?: Partial<QInput>;
}

export type FormSwitch = {
  type: 'switch';
  fieldProps?: Partial<QToggle>;
}

export type FormItem = (FormSwitch | FormInput | FormSelect) & {
  queryName: string;
}
