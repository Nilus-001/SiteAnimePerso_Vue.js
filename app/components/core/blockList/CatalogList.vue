<template>
  <div d="catalog-section">
    <CatalogListContainer>
      <ListBlock :Gdata="DataFiltered">
        <template #desc="{ item }">
          <BlockDescCatalog :data="item" />
        </template>
      </ListBlock>
    </CatalogListContainer>
  </div>
</template>

<script setup>
import { useCatalogfilter } from "~/composables/useCatalogfilter.ts";

const { Data, textFilter, contentfilter, DataFiltered } = useCatalogfilter();
</script>

<style lang="scss" scoped></style>
