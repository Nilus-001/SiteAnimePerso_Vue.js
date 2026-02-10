<template>
  <SearchBar @onSearch="search" @delSearch="del" />
</template>

<script setup>
import { useCatalogfilter } from "~/composables/useCatalogfilter.ts";

const { Data, DataFiltered } = useCatalogfilter();

const search = (values) => {
  DataFiltered.value = DataFiltered.value.filter((p) =>
    p.name.toLowerCase().includes(values.search.toLowerCase())
  );
};

const del = () => {
  DataFiltered.value = Data.value;
};
</script>

<style lang=""></style>
