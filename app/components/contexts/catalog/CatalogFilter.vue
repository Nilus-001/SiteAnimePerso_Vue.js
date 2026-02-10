<template>
  <div v-for="{ categories, index } in filterSetup" :key="`category-index-${index}`">
    <h2>2cecec {{ categories }}</h2>
  </div>
</template>

<script setup>
import { useCatalogfilter } from "~/composables/useCatalogfilter.ts";

const {
  Data,
  textFilter,
  contentfilter,
  DataFiltered,
  filterOptions,
} = useCatalogfilter();

// const filterSetup = filterOptions();
</script>

<style lang="scss" scoped></style>
