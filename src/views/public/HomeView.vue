<template>
  <div class="container">
    <h1>🛩️ {{ $t("pages.home.general.title") }} 🛩️</h1>
    <template v-for="(content, index) in ($tm('pages.home.contents') as ContentMessages[])" :key="index + '-content'">
      <h3>{{ $rt(content.title) }}</h3>
      <p v-for="(paragraph, indexP) in content.paragraphs" :key="indexP + '-paragraph'">
        <template v-if="utilIs.string(paragraph)">
          {{ $rt(paragraph) }}
        </template>
        <template v-else>
          <a target="_blank" :href="paragraph.url">{{ $rt(paragraph.text) }}</a>
        </template>
      </p>
      <ul v-if="content.list?.length !== 0">
        <li v-for="(item, indexL) in content.list" :key="indexL + '-list'">
          <template v-if="utilIs.string(item)">
            {{ $rt(item) }}
          </template>
          <template v-else>
            <a target="_blank" :href="item.url">{{ $rt(item.text) }}</a>
          </template>
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ContentMessages } from 'src/plugins/I18n';
import { is } from 'src/utils/Is';

const utilIs = is();
</script>
