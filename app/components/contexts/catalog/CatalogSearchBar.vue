<template>
  <SearchBar @onSearch="search" @delSearch="del" />
</template>

<script setup>
import { useCatalogfilter } from "~/composables/useCatalogfilter.ts";

const { Data, textFilter, DataFiltered } = useCatalogfilter();

console.log(Data.value);

const search = (values) => {
  DataFiltered.value = Data.value.filter((p) =>
    p.name.toLowerCase().includes(values.search.toLowerCase())
  );
};

const del = () => {
  DataFiltered.value = Data.value;
};
</script>

<style lang=""></style>
