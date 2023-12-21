import { useFetch } from 'src/composables/fetch/UseFetch';
import { t } from 'src/plugins/I18n';
import { useFetchPaginated } from 'src/composables/fetch/UseFetchPaginated';
import { useFetchSelect } from 'src/composables/fetch/UseFetchSelect';
import { CostsApi } from 'src/services/api/CostsApi';
import { useFormatProperties } from '../UseFormatStats';

const format = useFormatProperties();

export const useCosts = () => {
  const costsApi = new CostsApi();

  const getCosts = useFetch(costsApi.getCosts);

  const getCostsSelect = useFetchSelect(
    costsApi.getCosts,
    { optionLabel: (val) => format.setCosts(val) },
  );

  const createCost = useFetch(
    costsApi.createCost,
    { successMessage: t('common.messages.correctlyCreated') },
  );

  const updateCost = useFetch(
    costsApi.updateCost,
    { successMessage: t('common.messages.correctlyUpdated') },
  );

  const deleteCost = useFetch(
    costsApi.deleteCost,
    { successMessage: t('common.messages.correctlyDeleted') },
  );

  const getCostsPaginated = useFetchPaginated(costsApi.getCostsPaginated);

  const postCostsBulk = useFetch(costsApi.postCostsBulk);

  return {
    getCosts,
    getCostsSelect,
    createCost,
    updateCost,
    deleteCost,
    getCostsPaginated,
    postCostsBulk,
  };
};
