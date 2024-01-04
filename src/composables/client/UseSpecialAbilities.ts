import { useFetch } from 'src/composables/fetch/UseFetch';
import { t } from 'src/plugins/I18n';
import { useFetchPaginated } from 'src/composables/fetch/UseFetchPaginated';
import { useFetchSelect } from 'src/composables/fetch/UseFetchSelect';
import { SpecialAbilitiesApi } from 'src/services/api/SpecialAbilitiesApi';
import { useFormatProperties } from '../UseFormatProperties';

const format = useFormatProperties();

export const useSpecialAbilities = () => {
  const specialAbilitiesApi = new SpecialAbilitiesApi();

  const getSpecialAbilities = useFetch(specialAbilitiesApi.getSpecialAbilities);

  const getSpecialAbilitiesSelect = useFetchSelect(specialAbilitiesApi.getSpecialAbilities, { optionLabel: (value) => format.setAbilityName(value) });

  const createSpecialAbility = useFetch(
    specialAbilitiesApi.createSpecialAbility,
    { successMessage: t('common.messages.correctlyCreated') },
  );

  const updateSpecialAbility = useFetch(
    specialAbilitiesApi.updateSpecialAbility,
    { successMessage: t('common.messages.correctlyUpdated') },
  );

  const deleteSpecialAbility = useFetch(
    specialAbilitiesApi.deleteSpecialAbility,
    { successMessage: t('common.messages.correctlyDeleted') },
  );

  const getSpecialAbilitiesPaginated = useFetchPaginated(specialAbilitiesApi.getSpecialAbilitiesPaginated);

  const postSpecialAbilitiesBulk = useFetch(specialAbilitiesApi.postSpecialAbilitiesBulk);

  return {
    getSpecialAbilities,
    getSpecialAbilitiesSelect,
    createSpecialAbility,
    updateSpecialAbility,
    deleteSpecialAbility,
    getSpecialAbilitiesPaginated,
    postSpecialAbilitiesBulk,
  };
};
