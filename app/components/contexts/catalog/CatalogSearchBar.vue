<template>
  <SearchBar @onSearch="search" @delSearch="del" />
</template>

<script setup>
import { useCatalogfilter } from "~/composables/useCatalogfilter.ts";

const { resetFilter, filterByName } = useCatalogfilter();

const search = (values) => {
  filterByName(values.search);
};

const del = () => {
  resetFilter();
};
</script>

<style lang=""></style>
