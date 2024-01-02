<template>
  <div class="radio-group">
    <template v-for="(radio, index) in options" :key="index">
      <label
        :for="radio.name?.toString()"
        :class="radio.id == modelValue ? 'active' : ''"
      >
        <input
          :id="radio.name?.toString()"
          class="radio-input"
          type="radio"
          :value="radio.id"
          :checked="radio.id == modelValue"
          @change="updateValue($event)"
        >
        <img v-if="radio.imgUrl" :src="radio.imgUrl">
        <b>{{ radio.name }}</b>
      </label>
    </template>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);

defineProps<{
  modelValue?: string;
  options: {
    name?: string | number;
    id?: string | number;
    imgUrl?: string;
  }[];
}>();

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<style scoped src="src/assets/scss/components/radioGroup.scss"></style>
