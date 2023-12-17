import { useFetch } from 'src/composables/fetch/UseFetch';
import { t } from 'src/plugins/I18n';
import { useFetchPaginated } from 'src/composables/fetch/UseFetchPaginated';
import { useFetchSelect } from 'src/composables/fetch/UseFetchSelect';
import { AircraftClassesApi } from 'src/services/api/AircraftClasses';

export const useAircraftClasses = () => {
  const aircraftClassesApi = new AircraftClassesApi();

  const getAircraftClasses = useFetch(aircraftClassesApi.getAircraftClasses);

  const getAircraftClassesSelect = useFetchSelect(aircraftClassesApi.getAircraftClasses, { optionLabel: 'name' });

  const createAircraftClass = useFetch(
    aircraftClassesApi.createAircraftClass,
    { successMessage: t('common.messages.correctlyCreated') },
  );

  const updateAircraftClass = useFetch(
    aircraftClassesApi.updateAircraftClass,
    { successMessage: t('common.messages.correctlyUpdated') },
  );

  const deleteAircraftClass = useFetch(
    aircraftClassesApi.deleteAircraftClass,
    { successMessage: t('common.messages.correctlyDeleted') },
  );

  const getAircraftClassesPaginated = useFetchPaginated(aircraftClassesApi.getAircraftClassesPaginated);

  const postAircraftClassesBulk = useFetch(aircraftClassesApi.postAircraftClassesBulk);

  return {
    getAircraftClasses,
    getAircraftClassesSelect,
    createAircraftClass,
    updateAircraftClass,
    deleteAircraftClass,
    getAircraftClassesPaginated,
    postAircraftClassesBulk,
  };
};
