<template>
  <form class="catalog-filter-list" @submit.prevent="onSubmit">
    <!-- <CatalogFilterButton /> -->
    <CatalogFilterList
      v-for="(list, key) in filterSetup"
      :key="key"
      :list="list"
      :listname="key"
      v-model="contentfilter[key]"
    />
  </form>
</template>

<script setup>
import { watchEffect } from "vue";
import { useCatalogfilter } from "~/composables/useCatalogfilter.ts";

const { filterOptions, filterByFilter, contentfilter, textFilter } = useCatalogfilter();
const filterSetup = filterOptions();

watch(contentfilter, (values) => {
  filterByFilter(values);
  console.log(contentfilter);
});
</script>

<style lang="scss" scoped>
.catalog-filter-list {
  @apply flex flex-col;
}
</style>
