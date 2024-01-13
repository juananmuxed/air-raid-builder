import { defineStore } from 'pinia';

import { useFormatProperties } from 'src/composables/UseFormatProperties';
import { useNationYears } from 'src/composables/client/UseNationYears';
import { useNations } from 'src/composables/client/UseNations';
import { usePlanes } from 'src/composables/client/UsePlanes';
import { LOCAL_STORAGE } from 'src/constants/Keys';
import { POSITIONS } from 'src/constants/Positions';
import { SEPARATORS } from 'src/constants/Separators';
import { t } from 'src/plugins/I18n';
import { useToastStore } from './UseToasts';
import { useListsStore } from './UseLists';
import { is } from 'src/utils/Is';

export const useSheetsStore = defineStore('sheets', () => {
  const nations = useNations();
  const nationYears = useNationYears();
  const planes = usePlanes();
  const format = useFormatProperties();
  const toasts = useToastStore();
  const lists = useListsStore();
  const _is = is();

  const nation = ref();
  const year = ref();
  const creatingList = ref(false);
  const listName = ref('');
  const listCompact = ref('');
  const selectedSavedList: Ref<string | undefined> = ref();
  const savedLists: Ref<Record<string, string>> = ref(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE.LISTS) || '{}'),
  );

  const selectNations = computed(() => nations.getNationsSelect.data.map((_nation) => ({
    ..._nation,
    name: t(`database.nations.${_nation.name}`),
    imgUrl: `/img/nations/${_nation.imgUrl}`,
  })));
  const selectYears = computed(() => {
    const _years = [{ name: t('pages.lists.buttons.allYears'), id: -1 }];
    nationYears.getYearsByNationSelect.data.forEach((_year) => (
      _years.push({
        id: _year.id,
        name: _year.year.toString(),
      })
    ));
    return _years;
  });
  const availablePlanes = computed(() => planes.getPlanesByNationAndYear.data);

  const availableSavedLists = computed(() => {
    return Object.keys(savedLists.value).map((key) => {
      return {
        id: key,
        name: key,
        active: true,
      };
    });
  });

  const hasSavedLists = computed(() => availableSavedLists.value.length > 0);

  const loading = computed(() => nationYears.getYearsByNationSelect.isFetching
  || nations.getNationsSelect.isFetching
  || planes.getPlanesByNationAndYear.isFetching);

  const hasNation = computed(() => nation.value !== undefined);
  const hasNationAndYear = computed(() => hasNation.value && year.value !== undefined);

  const isInSavedList = computed(() => {
    return savedLists.value[listName.value] !== undefined;
  });

  const isEditedList = computed(() => {
    return savedLists.value[listName.value] !== listCompact.value;
  });

  const nationComplete = computed(() => selectNations.value.find((_nation) => Number(nation.value) === _nation.id));
  const yearComplete = computed(() => selectYears.value.find((_year) => Number(year.value) === _year.id));

  watch(nation, async (newValue) => {
    if (newValue) await nationYears.getYearsByNationSelect.execute(newValue);
    if (creatingList.value) year.value = undefined;
  });
  watch([nation, year, listName], () => {
    updateUriParams();
  });
  watch(savedLists, (newValue) => {
    localStorage.setItem(LOCAL_STORAGE.LISTS, JSON.stringify(newValue));
  }, { deep: true });

  function updateUriParams() {
    const url = new URL(window.location.href);
    compactList();
    localStorage.setItem(LOCAL_STORAGE.LIST, listCompact.value);
    url.searchParams.set('id', listCompact.value);
    // eslint-disable-next-line no-restricted-globals
    history.replaceState(history.state, '', url);
  }

  function getUriParams() {
    const url = new URL(window.location.href);
    listCompact.value = url.searchParams.get('id') || '';
    return listCompact.value;
  }

  function compactList() {
    const _name = _is.nullOrUndefined(listName.value) ? '' : listName.value;
    const _nation = _is.nullOrUndefined(nation.value) ? undefined : nation.value;
    const _year = _is.nullOrUndefined(year.value) ? undefined : year.value;
    listCompact.value = format.setSeparator([
      _nation,
      _year,
      _name,
      lists.compactUnits,
    ], SEPARATORS.SHEET);
  }

  async function startList() {
    if (!nation.value || !year.value) {
      toasts.addToast({
        text: t('warnings.notSelectedNationOrYear'),
        color: 'warning',
        time: 4000,
      });
      return;
    }
    await planes.getPlanesByNationAndYear.execute(nation.value, year.value);
    listName.value = t('pages.lists.general.newList', availableSavedLists.value.length + 1);
    creatingList.value = true;
  }

  function resetList() {
    year.value = undefined;
    nation.value = undefined;
    listName.value = '';
    lists.units = [];
    creatingList.value = false;
  }

  function saveList() {
    savedLists.value[listName.value] = listCompact.value;
    toasts.addToast({
      text: t('success.saveList'),
      color: 'success',
      time: 4000,
    });
  }

  function deleteList() {
    delete savedLists.value[listName.value];
    resetList();
    toasts.addToast({
      text: t('warnings.deletedList'),
      color: 'warning',
      time: 4000,
    });
  }

  function loadList() {
    listCompact.value = savedLists.value[selectedSavedList.value || ''];
    setCompactList(listCompact.value);
    selectedSavedList.value = undefined;
    toasts.addToast({
      text: t('success.saveList'),
      color: 'success',
      time: 4000,
    });
  }

  function copyUrl() {
    const url = new URL(window.location.href);
    url.searchParams.set('id', listCompact.value);
    navigator.clipboard.writeText(url.toString());
    toasts.addToast({
      text: t('success.copiedClipboard'),
      color: 'success',
      time: 4000,
    });
  }

  function printList() {
    window.print();
  }

  async function initLoad() {
    const _compact = getUriParams();
    if (_compact !== '') {
      await setCompactList(_compact);
    } else {
      await nations.getNationsSelect.execute();
    }
    updateUriParams();
  }

  async function setCompactList(compact: string) {
    await nations.getNationsSelect.execute();
    nation.value = format.splitSeparator(compact, SEPARATORS.SHEET).at(POSITIONS.NATION);
    if (nation.value) {
      await nationYears.getYearsByNationSelect.execute(nation.value);
      year.value = format.splitSeparator(compact, SEPARATORS.SHEET).at(POSITIONS.YEAR);
      listName.value = format.splitSeparator(compact, SEPARATORS.SHEET).at(POSITIONS.LIST_NAME) || '';
      if (nation.value && year.value) {
        await planes.getPlanesByNationAndYear.execute(nation.value, year.value);
        lists.setUnitsCompact(format.splitSeparator(compact, SEPARATORS.SHEET).at(POSITIONS.UNITS));
        if (listName.value || lists.units.length > 0) {
          creatingList.value = true;
        }
      }
    }
  }

  return {
    nation,
    year,
    creatingList,
    listName,
    hasSavedLists,
    selectNations,
    selectYears,
    selectedSavedList,
    availablePlanes,
    availableSavedLists,
    hasNation,
    hasNationAndYear,
    loading,
    isInSavedList,
    isEditedList,
    nationComplete,
    yearComplete,
    getUriParams,
    updateUriParams,
    startList,
    resetList,
    printList,
    initLoad,
    saveList,
    loadList,
    deleteList,
    copyUrl,
  };
});
