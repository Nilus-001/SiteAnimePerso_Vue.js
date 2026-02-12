<template>
  <h2 class="catalog-filter-list-title">{{ listname.toUpperCase() }}</h2>
  <div>
    <CatalogFilterListItem
      v-for="ele in list"
      :key="`${listname}-${ele}`"
      :ele="ele"
      v-model="listmodel"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  list: { type: Array, required: true, default: [] },
  listname: { type: String, required: true, default: "" },
});

const listmodel = defineModel();
</script>

<style lang="scss" scoped>
.catalog-filter-list {
  //   @apply bg-red-700;
  &-title {
    @apply text-red-700 self-center;
  }
}
</style>
