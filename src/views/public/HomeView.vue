<template>
  <div class="container">
    <h1>🛩️ {{ $t("pages.home.general.title") }} 🛩️</h1>
    <template v-for="(content, index) in ($tm('pages.home.contents') as ContentMessages[])" :key="index + '-content'">
      <h3>{{ $rt(content.title) }}</h3>
      <p v-for="(paragraph, indexP) in content.paragraphs" :key="indexP + '-paragraph'">
        {{ $rt(paragraph) }}
      </p>
      <ul v-if="content.list?.length !== 0">
        <li v-for="(item, indexL) in content.list" :key="indexL + '-list'">
          {{ $rt(item) }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ContentMessages } from 'src/plugins/I18n';
</script>
