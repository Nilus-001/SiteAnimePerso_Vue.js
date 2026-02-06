<template>
  <div id="toplist-section">
    <BaseTitle text="Ma TopList"></BaseTitle>
    <AcceuilListContainer>
      <ListBlock :Gdata="Gdata">
        <template #desc="{ item }">
          <BlockDescTopList :data="item" />
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
#toplist-section {
  @apply flex flex-col gap-3 py-3;
}
</style>
