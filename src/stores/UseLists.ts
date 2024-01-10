import { defineStore } from 'pinia';

import { Plane } from 'src/models/api/Planes';

export const useListsStore = defineStore('lists', () => {
  const units = ref<Plane[]>([]);

  const unitsTotal = computed(() => units.value.length);
  const costTotal = computed(() => units.value.reduce((prev, current) => prev + current.cost.rookie, 0));

  function addUnit(unit: Plane) {
    units.value.push(unit);
  }

  function deleteUnit(unit: Plane) {
    const unitIndex = units.value.findIndex((_unit) => _unit.id === unit.id);
    if (unitIndex >= 0)units.value.splice(unitIndex, 1);
  }

  return {
    units,
    unitsTotal,
    costTotal,
    addUnit,
    deleteUnit,
  };
});
