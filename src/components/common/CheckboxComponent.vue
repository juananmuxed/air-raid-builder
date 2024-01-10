<template>
  <div class="input-checkbox">
    <input :id="id" v-model="model" type="checkbox">
    <div
      class="control"
      :class="modelValue ? 'active' : ''"
      @click="clickEvent"
    >
      <IconComponent name="check" />
    </div>
    <label :for="id">
      <span v-if="label">{{ label }}</span>
      <slot v-else />
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import IconComponent from './IconComponent.vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps<{
  modelValue: boolean;
  id: string;
  label?: string;
}>();

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

function clickEvent() {
  model.value = !model.value;
}
</script>

<style scoped src="src/assets/scss/components/checkbox.scss"></style>
