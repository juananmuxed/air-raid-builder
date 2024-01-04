import { useFetch } from 'src/composables/fetch/UseFetch';
import { t } from 'src/plugins/I18n';
import { useFetchPaginated } from 'src/composables/fetch/UseFetchPaginated';
import { useFetchSelect } from 'src/composables/fetch/UseFetchSelect';
import { StatsApi } from 'src/services/api/StatsApi';
import { useFormatProperties } from '../UseFormatProperties';

const format = useFormatProperties();

export const useStats = () => {
  const statsApi = new StatsApi();

  const getStats = useFetch(statsApi.getStats);

  const getStatsSelect = useFetchSelect(
    statsApi.getStats,
    { optionLabel: (val) => format.setStatsLabel(val) },
  );

  const createStat = useFetch(
    statsApi.createStat,
    { successMessage: t('common.messages.correctlyCreated') },
  );

  const updateStat = useFetch(
    statsApi.updateStat,
    { successMessage: t('common.messages.correctlyUpdated') },
  );

  const deleteStat = useFetch(
    statsApi.deleteStat,
    { successMessage: t('common.messages.correctlyDeleted') },
  );

  const getStatsPaginated = useFetchPaginated(statsApi.getStatsPaginated);

  const postStatsBulk = useFetch(statsApi.postStatsBulk);

  return {
    getStats,
    getStatsSelect,
    createStat,
    updateStat,
    deleteStat,
    getStatsPaginated,
    postStatsBulk,
  };
};
