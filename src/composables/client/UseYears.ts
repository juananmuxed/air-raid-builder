import { useFetch } from 'src/composables/fetch/UseFetch';
import { t } from 'src/plugins/I18n';
import { useFetchPaginated } from 'src/composables/fetch/UseFetchPaginated';
import { useFetchSelect } from 'src/composables/fetch/UseFetchSelect';
import { YearsApi } from 'src/services/api/YearsApi';

export const useYears = () => {
  const yearsApi = new YearsApi();

  const getYears = useFetch(yearsApi.getYears);

  const getYearsSelect = useFetchSelect(yearsApi.getYears, { optionLabel: 'year' });

  const createYear = useFetch(
    yearsApi.createYear,
    { successMessage: t('common.messages.correctlyCreated') },
  );

  const updateYear = useFetch(
    yearsApi.updateYear,
    { successMessage: t('common.messages.correctlyUpdated') },
  );

  const deleteYear = useFetch(
    yearsApi.deleteYear,
    { successMessage: t('common.messages.correctlyDeleted') },
  );

  const getYearsPaginated = useFetchPaginated(yearsApi.getYearsPaginated);

  const postYearsBulk = useFetch(yearsApi.postYearsBulk);

  return {
    getYears,
    getYearsSelect,
    createYear,
    updateYear,
    deleteYear,
    getYearsPaginated,
    postYearsBulk,
  };
};
