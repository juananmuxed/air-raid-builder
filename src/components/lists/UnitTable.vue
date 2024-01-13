<template>
  <div class="table">
    <div class="table-header">
      <div class="row">
        <div class="cell cell-wide cell-right">
          {{ $t('pages.lists.data.hits') }}
        </div>
        <div class="cell cell-center">
          0
        </div>
        <div class="cell cell-center" :class="format.getWoundColor(unit, 1)">
          1
        </div>
        <div class="cell cell-center" :class="format.getWoundColor(unit, 2)">
          2
        </div>
        <div class="cell cell-center" :class="format.getWoundColor(unit)">
          3
        </div>
      </div>
    </div>
    <div class="table-body">
      <div class="row">
        <div class="cel cell-wide cell">
          {{ $t('pages.lists.data.speed') }}
        </div>
        <div class="cell cell-center">
          {{ format.setSpeed(unit.statZero) }}
        </div>
        <div class="cell cell-center">
          {{ format.setSpeed(unit.statOne) }}
        </div>
        <div class="cell cell-center">
          {{ format.setSpeed(unit.statTwo) }} <IconComponent v-if="!unit.statTwo" name="parachute" />
        </div>
        <div class="cell cell-center">
          {{ format.setSpeed(unit.statThree) }} <IconComponent v-if="!unit.statThree" name="parachute" />
        </div>
      </div>
      <div class="row">
        <div class="cel cell-wide cell">
          {{ $t('pages.lists.data.agility') }}
        </div>
        <div class="cell cell-center">
          {{ format.setAgility(unit.statZero) }}
        </div>
        <div class="cell cell-center">
          {{ format.setAgility(unit.statOne) }}
        </div>
        <div class="cell cell-center">
          {{ format.setAgility(unit.statTwo) }}
        </div>
        <div class="cell cell-center">
          {{ format.setAgility(unit.statThree) }}
        </div>
      </div>
      <div class="row">
        <div class="cel cell-wide cell">
          {{ $t('pages.lists.data.firepower') }}
        </div>
        <div class="cell cell-center">
          {{ unit.statZero?.firepower }}
        </div>
        <div class="cell cell-center">
          {{ unit.statOne?.firepower }}
        </div>
        <div class="cell cell-center">
          {{ unit.statTwo?.firepower }}
        </div>
        <div class="cell cell-center">
          {{ unit.statThree?.firepower }}
        </div>
      </div>
      <div class="row">
        <div class="cel cell-wide cell">
          {{ $t('pages.lists.data.maneuver') }}
        </div>
        <div class="cell cell-center">
          {{ format.setManeuver(unit.statZero, unit.pilot) }}
        </div>
        <div class="cell cell-center">
          {{ format.setManeuver(unit.statOne, unit.pilot) }}
        </div>
        <div class="cell cell-center">
          {{ format.setManeuver(unit.statTwo, unit.pilot) }}
        </div>
        <div class="cell cell-center">
          {{ format.setManeuver(unit.statThree, unit.pilot) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UnitPlane } from 'src/models/api/Planes';

import { useFormatProperties } from 'src/composables/UseFormatProperties';

const format = useFormatProperties();

defineProps<{
  unit: UnitPlane;
}>();
</script>

<style scoped src="src/assets/scss/components/listUnitTable.scss"></style>
