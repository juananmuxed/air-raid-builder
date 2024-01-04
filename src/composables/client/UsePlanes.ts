import { useFetch } from 'src/composables/fetch/UseFetch';
import { t } from 'src/plugins/I18n';
import { useFetchPaginated } from 'src/composables/fetch/UseFetchPaginated';
import { useFetchSelect } from 'src/composables/fetch/UseFetchSelect';
import { PlanesApi } from 'src/services/api/PlanesApi';
import { useFormatProperties } from '../UseFormatStats';

const format = useFormatProperties();

export const usePlanes = () => {
  const planesApi = new PlanesApi();

  const getPlanes = useFetch(planesApi.getPlanes);

  const getPlanesSelect = useFetchSelect(planesApi.getPlanes, { optionLabel: (val) => format.setCompletePlaneName(val) });

  const getPlanesByNationAndYear = useFetchSelect(planesApi.getPlanesByNationAndYear, { optionLabel: 'designation' });

  const createPlane = useFetch(
    planesApi.createPlane,
    { successMessage: t('common.messages.correctlyCreated') },
  );

  const updatePlane = useFetch(
    planesApi.updatePlane,
    { successMessage: t('common.messages.correctlyUpdated') },
  );

  const deletePlane = useFetch(
    planesApi.deletePlane,
    { successMessage: t('common.messages.correctlyDeleted') },
  );

  const getPlanesPaginated = useFetchPaginated(planesApi.getPlanesPaginated);

  const postPlanesBulk = useFetch(planesApi.postPlanesBulk);

  return {
    getPlanes,
    getPlanesSelect,
    getPlanesByNationAndYear,
    createPlane,
    updatePlane,
    deletePlane,
    getPlanesPaginated,
    postPlanesBulk,
  };
};
