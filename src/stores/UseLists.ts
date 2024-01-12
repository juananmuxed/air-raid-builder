import { defineStore } from 'pinia';

import { Plane, UnitPlane } from 'src/models/api/Planes';
import { SpecialAbility } from 'src/models/api/SpecialAbilities';

import { useFormatProperties } from 'src/composables/UseFormatProperties';
import { SEPARATORS } from 'src/constants/Separators';
import { useSheetsStore } from './UseSheets';
import { PILOTS_ABILITIES } from 'src/constants/PilotsAbilities';

export const useListsStore = defineStore('lists', () => {
  const units = ref<UnitPlane[]>([]);
  const format = useFormatProperties();
  const sheets = useSheetsStore();

  const unitsTotal = computed(() => units.value.length);
  const costTotal = computed(() => units.value.reduce((prev, current) => prev + format.getUnitCost(current), 0));

  const compactUnits = computed(() => format.setSeparator(units.value
    .map((unit) => format.setSeparator([unit.id, unit.pilot], SEPARATORS.OPTIONS)), SEPARATORS.UNITS));

  const specialAbilities = computed(() => {
    let _specialAbilities: SpecialAbility[] = [];
    units.value.forEach((unit) => {
      if (unit.specialAbilities
        && unit.specialAbilities.length > 0) _specialAbilities = _specialAbilities.concat(unit.specialAbilities);
      if (unit.specialAbilitiesVeteran
        && unit.specialAbilitiesVeteran.length > 0
        && unit.pilot === PILOTS_ABILITIES.VETERAN) _specialAbilities = _specialAbilities.concat(unit.specialAbilitiesVeteran);
    });
    const uniqueSpecialAbilities = [...new Map(_specialAbilities.map((item) => [item.name, item])).values()];
    return uniqueSpecialAbilities;
  });

  const hasSpecialAbilities = computed(() => specialAbilities.value.length > 0);

  watch(units, () => sheets.updateUriParams(), { deep: true });

  function setUnitsCompact(unitsCompacted?: string) {
    const unitIds = format.splitSeparator(unitsCompacted || '', SEPARATORS.UNITS);
    units.value = unitIds
      .map((plane) => deconstructPlane(plane))
      .filter((plane): plane is UnitPlane => plane !== undefined);
  }

  function deconstructPlane(planeCompact: string) {
    const [id, pilot] = format.splitSeparator(planeCompact, SEPARATORS.OPTIONS);
    const _plane = sheets.availablePlanes.find((plane) => plane.id === Number(id));
    if (!_plane) return undefined;
    return { ..._plane, pilot: Number(pilot) };
  }

  function addUnit(unit: Plane) {
    units.value.push({ ...unit, pilot: PILOTS_ABILITIES.REGULAR });
  }

  function deleteUnit(unit: Plane) {
    const unitIndex = units.value.findIndex((_unit) => _unit.id === unit.id);
    if (unitIndex >= 0)units.value.splice(unitIndex, 1);
  }

  function changePilot(pilot: number, index: number) {
    units.value[index].pilot = pilot;
  }

  return {
    units,
    unitsTotal,
    costTotal,
    compactUnits,
    specialAbilities,
    hasSpecialAbilities,
    setUnitsCompact,
    addUnit,
    deleteUnit,
    changePilot,
  };
});
