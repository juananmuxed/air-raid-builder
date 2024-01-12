<template>
  <div class="unit-card">
    <div class="unit-title">
      <b>{{ unit.designation }}</b>
      <BadgeComponent color="primary" outlined small>
        {{ unit.nickname }}
      </BadgeComponent>
    </div>
    <UnitTable :unit="unit" />
    <div class="pilot-select">
      <BadgeComponent color="primary" outlined small>
        {{
          `${$t('pages.lists.data.pilots.' + format.setPilot(unit).toLowerCase())}
          (${$t('pages.lists.data.costs', format.getUnitCost(unit))})`
        }}
      </BadgeComponent>
      <RadioGroup v-model="pilot" :options="options" class="pilot-selector no-print" :reference="index.toString()" />
    </div>
    <div class="abilities">
      <b>{{ $t('pages.lists.general.specialAbilities') }}</b>
      <div class="ability-items">
        <BadgeComponent
          v-for="(item, indexSA) in unit.specialAbilities"
          :key="indexSA + '-sa'"
          outlined small
          :label="format.setTranslateSpecialAbility(item).name"
          :title="format.setTranslateSpecialAbility(item).description"
        />
        <template v-if="unit.pilot === PILOTS_ABILITIES.VETERAN">
          <BadgeComponent
            v-for="(item, indexSAV) in unit.specialAbilitiesVeteran"
            :key="indexSAV + '-sav'"
            outlined
            small
            :label="format.setTranslateSpecialAbility(item).name"
            :title="format.setTranslateSpecialAbility(item).description"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UnitPlane } from 'src/models/api/Planes';

import { useFormatProperties } from 'src/composables/UseFormatProperties';
import { PILOTS, PILOTS_ABILITIES } from 'src/constants/PilotsAbilities';
import { t } from 'src/plugins/I18n';
import { useListsStore } from 'src/stores/UseLists';

const format = useFormatProperties();
const lists = useListsStore();

const options = PILOTS
  .map((key, value) => ({ name: t(`pages.lists.data.pilots.${key.toLowerCase()}`), id: value, key }));

const props = defineProps<{
  unit: UnitPlane;
  index: number;
}>();

const pilot = ref(props.unit.pilot);

watch(pilot, (newValue) => {
  lists.changePilot(newValue, props.index);
});
</script>

<style scoped src="src/assets/scss/components/listUnit.scss"></style>
