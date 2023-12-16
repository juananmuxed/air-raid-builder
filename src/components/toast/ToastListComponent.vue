<template>
  <div class="list-toasts">
    <TransitionGroup name="list" mode="in-out">
      <div
        v-for="(toast, index) in toasts.toastsArray"
        :key="index"
        class="toast-container"
        :class="toast?.color || 'light'"
      >
        <span>{{ toast?.text }}</span>
        <button v-if="toast?.closable" @click="toasts.deleteToast(index)">
          <IconComponent name="close" />
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import IconComponent from 'src/components/common/IconComponent.vue';
import { useToastStore } from 'src/stores/UseToasts';

const toasts = useToastStore();
</script>

<style scoped src="src/assets/scss/components/toasts.scss"></style>
