<template>
  <div id="watchlist-section">
    <BaseTitle text="Ma WatchList"> </BaseTitle>
    <AcceuilListContainer>
      <ListBlock :Gdata="Gdata">
        <template #desc="{ item }">
          <BlockDescWatchList :data="item" />
        </template>
      </ListBlock>
    </AcceuilListContainer>
  </div>
</template>

<script setup>
const props = defineProps({
  Gdata: { type: Array, required: true, default: [] },
});
</script>

<style lang="scss">
#watchlist-section {
  @apply flex flex-col gap-3 py-3;
}
</style>
