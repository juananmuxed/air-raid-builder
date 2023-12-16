<template>
  <Component
    :is="iconComponent"
    :style="computedStyle"
    role="image"
  />
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue';

import { toKebabCase } from 'src/utils/Strings';

const Components = import.meta.glob('./icons/*.vue', { eager: true });

interface IGlobItem {
  default: Component;
}

interface Icon {
  [key: string]: Component;
}

const icons: Icon = {};

Object.keys(Components).forEach((filename) => {
  const name = filename.split('/')[2].split('.')[0].split('Icon')[0];
  const iconName = toKebabCase(name);

  icons[iconName] = (Components[filename] as IGlobItem).default;
});

const props = defineProps<{
  name: string;
  height?: string | number;
  width?: string | number;
}>();

const computedStyle = computed(() => {
  const style = [];
  if (props.height) style.push(`height:${props.height}px`);
  if (props.width) style.push(`width:${props.width}px`);
  return style.join(';');
});

const iconComponent = computed(() => icons[props.name]);
</script>
