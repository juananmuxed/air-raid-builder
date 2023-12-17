import { useFetch } from 'src/composables/fetch/UseFetch';
import { t } from 'src/plugins/I18n';
import { useFetchPaginated } from 'src/composables/fetch/UseFetchPaginated';
import { useFetchSelect } from 'src/composables/fetch/UseFetchSelect';
import { NationsApi } from 'src/services/api/Nations';

export const useNations = () => {
  const nationsApi = new NationsApi();

  const getNations = useFetch(nationsApi.getNations);

  const getNationsSelect = useFetchSelect(nationsApi.getNations, { optionLabel: 'name' });

  const createNation = useFetch(
    nationsApi.createNation,
    { successMessage: t('common.messages.correctlyCreated') },
  );

  const updateNation = useFetch(
    nationsApi.updateNation,
    { successMessage: t('common.messages.correctlyUpdated') },
  );

  const deleteNation = useFetch(
    nationsApi.deleteNation,
    { successMessage: t('common.messages.correctlyDeleted') },
  );

  const getNationsPaginated = useFetchPaginated(nationsApi.getNationsPaginated);

  const postNationsBulk = useFetch(nationsApi.postNationsBulk);

  return {
    getNations,
    getNationsSelect,
    createNation,
    updateNation,
    deleteNation,
    getNationsPaginated,
    postNationsBulk,
  };
};
