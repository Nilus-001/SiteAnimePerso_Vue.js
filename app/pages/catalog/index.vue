<template>
  <TransparentContainer id="catalog">
    <MainContainer id="catalog-filter">
      <CatalogFilter />
    </MainContainer>
    <MainContainer id="catalog-search">
      <CatalogSearchBar />
    </MainContainer>
    <MainContainer id="catalog-content">
      <CatalogList />
    </MainContainer>
  </TransparentContainer>
</template>

<script setup></script>

<style lang="scss" scoped>
#catalog {
  @apply mx-[10%] my-10 grid grid-cols-4 grid-rows-[auto_1fr] gap-4;

  &-search {
    @apply col-start-2 p-5;
  }
  &-content {
    @apply col-start-2 col-span-full row-start-2;
  }
  &-filter {
    @apply col-start-1 row-start-2;
  }
}
</style>
