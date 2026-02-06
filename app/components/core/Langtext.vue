<template>
  <div v-for="(lang, index) in getAllLang" :key="`lang-index-${index}`" class="lang">
    {{ lang }}
  </div>
  {{ $t("test") }}
</template>

<script setup>
import { useLangsStore } from "~/store/lang.store";

const langStore = useLangsStore();
const { getAllLang } = storeToRefs(langStore);
</script>

<style lang="scss">
.lang {
}
</style>
