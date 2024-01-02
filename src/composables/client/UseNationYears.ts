import { useFetch } from 'src/composables/fetch/UseFetch';
import { t } from 'src/plugins/I18n';
import { useFetchPaginated } from 'src/composables/fetch/UseFetchPaginated';
import { useFetchSelect } from 'src/composables/fetch/UseFetchSelect';
import { NationYearsApi } from 'src/services/api/NationYearsApi';
import { useFormatProperties } from '../UseFormatStats';

const format = useFormatProperties();

export const useNationYears = () => {
  const nationYearsApi = new NationYearsApi();

  const getNationYears = useFetch(nationYearsApi.getNationYears);

  const getNationYearsSelect = useFetchSelect(nationYearsApi.getNationYears, { optionLabel: (val) => format.setNationYearLabel(val) });

  const getYearsByNationSelect = useFetchSelect(nationYearsApi.getYearsByNation, { optionLabel: 'year' });

  const createNationYear = useFetch(
    nationYearsApi.createNationYear,
    { successMessage: t('common.messages.correctlyCreated') },
  );

  const updateNationYear = useFetch(
    nationYearsApi.updateNationYear,
    { successMessage: t('common.messages.correctlyUpdated') },
  );

  const deleteNationYear = useFetch(
    nationYearsApi.deleteNationYear,
    { successMessage: t('common.messages.correctlyDeleted') },
  );

  const getNationYearsPaginated = useFetchPaginated(nationYearsApi.getNationYearsPaginated);

  const postNationYearsBulk = useFetch(nationYearsApi.postNationYearsBulk);

  return {
    getNationYears,
    getNationYearsSelect,
    getYearsByNationSelect,
    createNationYear,
    updateNationYear,
    deleteNationYear,
    getNationYearsPaginated,
    postNationYearsBulk,
  };
};
