<template>
  <div
    class="badge"
    :class="[
      color,
      rounded ? 'rounded' : '',
      outlined ? 'outlined' : '',
      small ? 'small' : '',
    ]"
    :style="{ verticalAlign: align }"
  >
    <span v-if="$slots.default || label" class="label" :title="title">
      <slot v-if="!label" />
      <template v-else>{{ label }}</template>
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: 'primary',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
});
</script>

<style scoped src="src/assets/scss/components/badge.scss"></style>
