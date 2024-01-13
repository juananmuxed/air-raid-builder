<template>
  <footer>
    <RouterLink v-if="!user.validToken" :to="{ name: 'login' }">
      {{ $t('menu.login') }}
    </RouterLink>
    <RouterLink v-else :to="{ name: 'home' }">
      {{ $t('menu.admin') }}
    </RouterLink>
    <span><a
      :href="'https://github.com/' + configPackage.repository"
      target="_blank"
    ><img src="@/assets/img/github.svg" height="30"></a></span>
    <BadgeComponent color="primary" outlined>
      v{{ configPackage.version }}
    </BadgeComponent>
    <span>© {{ new Date().getFullYear() }}
      <a href="https://muxed.dev" target="_blank">MuXeD</a></span>
  </footer>
</template>

<script setup lang="ts">
import BadgeComponent from 'src/components/common/BadgeComponent.vue';
import configPackage from '../../../package.json';
import { useUserStore } from 'src/stores/UseUserStore';

const user = useUserStore();
</script>

<style scoped src="src/assets/scss/components/footer.scss"></style>
