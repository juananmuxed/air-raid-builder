<script setup lang="ts">
import { RouterView } from 'vue-router';

import ToastListComponent from 'src/components/toast/ToastListComponent.vue';
import HeaderPage from 'src/components/header/HeaderPage.vue';
import FooterPage from 'src/components/footer/FooterPage.vue';

</script>

<template>
  <HeaderPage class="no-print" />
  <main>
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <div :key="route.fullPath">
          <Component :is="Component" />
        </div>
      </Transition>
    </RouterView>
  </main>
  <FooterPage class="no-print" />
  <ToastListComponent class="no-print" />
</template>

<style lang="scss">
#app {
}
</style>
