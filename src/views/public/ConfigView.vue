<template>
  <div class="container">
    <h1>{{ $t('pages.config.general.title') }}</h1>
    <h3>{{ $t('pages.config.general.titleGeneral') }}</h3>
    <div class="config-item">
      <h5><b>{{ $t("pages.config.general.languages") }}</b></h5>
      <RadioGroup
        v-model="lang"
        :options="langs"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { LOCAL_STORAGE } from 'src/constants/Keys';
import { availableLocales, loadLanguageAsync } from 'src/plugins/I18n';

const langToken = localStorage.getItem(LOCAL_STORAGE.LANG) || 'en';

const lang = ref(langToken);

const langs = computed(() => availableLocales.map((_lang) => ({ id: _lang.value, name: _lang.label, imgUrl: _lang.avatar })));

watch(lang, (newValue) => {
  loadLanguageAsync(newValue || 'en');
});
</script>
