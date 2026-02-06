<template>
  <button class="lang-switch" @click="changeLang">
    <span :class="{ activeLang: locale === 'fr' }">fr</span>
    <Icon name="ph:arrow-right-bold" class="icon" :class="{ rotate: locale === 'en' }" />
    <span :class="{ activeLang: locale === 'en' }">en</span>
  </button>
</template>

<script setup>
import { ref } from "vue";

const currentLang = ref("fr");
const { locale, setLocale } = useI18n();

const changeLang = () => {
  const switchLang = (locale.value = locale.value === "fr" ? "en" : "fr");

  setLocale(switchLang);
  console.log(locale.value);
};
</script>

<style lang="scss" scoped>
.lang-switch {
  @apply flex items-center gap-2 px-4 py-2 bg-gray-900 text-gray-500 rounded-full border border-white/10;
  @apply hover:bg-gray-800 transition-all cursor-pointer font-bold text-sm;

  span {
    &.activeLang {
      @apply opacity-100 text-red-500;
    }
  }
}
.icon {
  @apply text-white/50;

  &.rotate {
    transform: rotate(180deg);
  }
}
</style>
