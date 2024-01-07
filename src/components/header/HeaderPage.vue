<template>
  <header>
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="Clash of Spears">
    </div>
    <nav>
      <ul>
        <li v-for="(menu, index) in getPublicMenu()" :key="index">
          <RouterLink :to="{name: menu.url}">
            {{
              $t(menu.titleTag)
            }}
          </RouterLink>
        </li>
        <li v-if="!user.validToken">
          <RouterLink :to="{ name: 'login' }">
            {{ $t('menu.login') }}
          </RouterLink>
        </li>
        <li v-else>
          <RouterLink :to="{ name: 'home' }">
            {{ $t('menu.admin') }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { getPublicMenu } from 'src/router/MenuRoutes';
import { useUserStore } from 'src/stores/UseUserStore';

const user = useUserStore();

</script>

<style lang="scss" scoped src="src/assets/scss/components/header.scss"></style>
