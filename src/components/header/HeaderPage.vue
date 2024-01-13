<template>
  <header>
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="Air Raid 36/46">
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
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

import { getPublicMenu } from 'src/router/MenuRoutes';
</script>

<style lang="scss" scoped src="src/assets/scss/components/header.scss"></style>
